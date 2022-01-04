import { useCallback, useEffect, useState } from "react";
import { DataGrid, GridActionsCellItem, GridToolbar } from "@mui/x-data-grid";
import Header from "../../components/Header";
import { ISpeedway } from "../../interfaces/ISpeedway";
import DeleteIcon from "@mui/icons-material/Delete";

import * as S from "./styles";
import api from "../../services/api";

interface IParams {
  id: number;
}

const Speedway: React.FC = () => {
  const [speedways, setSpeedway] = useState<ISpeedway[]>([]);

  const columnsSpeedway = [
    {
      field: "id",
      headerName: "Id",
      type: "number",
      width: 100,
    },
    {
      field: "description",
      headerName: "Description",
      type: "string",
      flex: 1,
      editable: true,
    },
    {
      field: "actions",
      type: "actions",
      headerName: "Remove",
      width: 100,
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
    getSpeedways();
  }, []);

  const getSpeedways = useCallback(async () => {
    const { data } = await api.get<ISpeedway[]>("/speedways");

    if (data!) {
      setSpeedway([...data]);
    }
  }, []);

  const putSpeedways = useCallback(
    async (params) => {
      const { id, value } = params;

      const speedway = speedways.find((speedway) => speedway.id === id);

      if (speedway) {
        speedway.description = value;
      }

      await api.put(`/speedways/${params.id}`, speedway);
      await getSpeedways();
    },
    [speedways]
  );

  const deleteCompetitor = useCallback(
    (id) => async () => {
      await api.delete(`/speedways/${id}`);

      const newSpeedways = speedways.filter((speedway) => speedway.id !== id);

      setSpeedway([...newSpeedways]);
    },
    [speedways]
  );

  return (
    <>
      <Header title="Speedway" />
      <S.Container>
        <div style={{ height: 600, padding: 50 }}>
          <DataGrid
            rows={speedways}
            columns={columnsSpeedway}
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
              putSpeedways(params);
            }}
          />
        </div>
      </S.Container>
    </>
  );
};

export default Speedway;
