import { useCallback, useEffect, useState } from "react";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";

import Header from "../../components/Header";
import { ICompetitors } from "../../interfaces/ICompetitors";

import * as S from "./styles";
import api from "../../services/api";
import { columnsCompetitor } from "../../utils/tables/columnsCompetitors";

const Competitors: React.FC = () => {
  const [competitors, setCompetitors] = useState<ICompetitors[]>([]);

  useEffect(() => {
    getCompetitors();
  }, []);

  const getCompetitors = useCallback(async () => {
    const { data } = await api.get<ICompetitors[]>("/competitors");

    if (data!) {
      setCompetitors([...data]);
    }
  }, []);

  const putCompetitors = useCallback(async (params) => {
    const competitor = params.row;

    const { data } = await api.put(`/competitors/${params.id}`, competitor);

    await getCompetitors();
    console.log(data);
  }, []);

  return (
    <>
      <Header title="Competitors" />
      <S.Container>
        <div style={{ height: 600, width: "auto", padding: 50 }}>
          <DataGrid
            rows={competitors}
            columns={columnsCompetitor}
            pageSize={5}
            rowsPerPageOptions={[5]}
            localeText={{
              toolbarDensity: "Size",
              toolbarDensityLabel: "Size",
              toolbarDensityCompact: "Small",
              toolbarDensityStandard: "Medium",
              toolbarDensityComfortable: "Large",
            }}
            components={{
              Toolbar: GridToolbar,
            }}
            onCellEditCommit={(params) => {
              putCompetitors(params);
            }}
          />
        </div>
      </S.Container>
    </>
  );
};

export default Competitors;
