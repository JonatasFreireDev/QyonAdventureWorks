import { useCallback, useEffect, useState } from "react";
import { DataGrid, GridActionsCellItem, GridToolbar } from "@mui/x-data-grid";

import Header from "../../components/Header";
import { ICompetitors } from "../../interfaces/ICompetitors";

import * as S from "./styles";
import api from "../../services/api";
import DeleteIcon from "@mui/icons-material/Delete";

interface IParams {
  id: number;
}

const Competitors: React.FC = () => {
  const [competitors, setCompetitors] = useState<ICompetitors[]>([]);

  const columnsCompetitor = [
    {
      field: "name",
      headerName: "Name",
      type: "string",
      width: 150,
      editable: true,
    },
    {
      field: "sex",
      headerName: "Sex",
      type: "string",
      width: 100,
      editable: true,
    },
    {
      field: "averageBodyTemperature",
      headerName: "Average Body Temp",
      type: "number",
      width: 150,
      editable: true,
    },
    {
      field: "weight",
      headerName: "Weight",
      type: "number",
      width: 100,
      editable: true,
    },
    {
      field: "height",
      headerName: "Height",
      type: "number",
      width: 100,
      editable: true,
    },
    {
      field: "actions",
      type: "actions",
      headerName: "Remove",
      width: 80,
      getActions: (params: IParams) => [
        <GridActionsCellItem
          icon={<DeleteIcon />}
          label="Delete"
          onClick={deleteCompetitor(params.id)}
        />,
      ],
    },
  ];

  useEffect(() => {
    getCompetitors();
  }, []);

  const getCompetitors = useCallback(async () => {
    const { data } = await api.get<ICompetitors[]>("/competitors");

    if (data!) {
      setCompetitors([...data]);
    }
  }, []);

  const putCompetitors = useCallback(
    async (params) => {
      const { id, field, value } = params;

      const competitor = competitors.find((competitor) => competitor.id === id);

      if (competitor) {
        switch (field) {
          case "name":
            competitor.name = value;
            break;
          case "sex":
            competitor.sex = value;
            break;
          case "averageBodyTemperature":
            competitor.averageBodyTemperature = value;
            break;
          case "weight":
            competitor.weight = value;
            break;
          case "height":
            competitor.height = value;
            break;
          default:
            break;
        }

        await api.put(`/competitors/${params.id}`, competitor);
        await getCompetitors();
      }
    },
    [competitors]
  );

  const deleteCompetitor = useCallback(
    (id) => async () => {
      await api.delete(`/competitors/${id}`);

      const newCompetitors = competitors.filter(
        (competitor) => competitor.id !== id
      );

      setCompetitors([...newCompetitors]);
    },
    [competitors]
  );

  return (
    <>
      <Header title="Competitors" />
      <S.Container>
        <section>
          <S.Boz>Dados</S.Boz>
          <S.Boz>Dados</S.Boz>
        </section>
        <div style={{ height: 600, padding: 50, maxWidth: 800 }}>
          <DataGrid
            rows={competitors}
            columns={columnsCompetitor}
            pageSize={6}
            rowsPerPageOptions={[6]}
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
