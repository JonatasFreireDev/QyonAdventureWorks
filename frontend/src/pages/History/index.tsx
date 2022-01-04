import { useCallback, useEffect, useState } from "react";
import {
  DataGrid,
  GridActionsCellItem,
  GridColDef,
  GridToolbar,
} from "@mui/x-data-grid";
import Header from "../../components/Header";
import { IRaceHistory } from "../../interfaces/IRaceHistory";
import api from "../../services/api";
import DeleteIcon from "@mui/icons-material/Delete";

import * as S from "./styles";

interface IParams {
  id: number;
}

const History: React.FC = () => {
  const [raceHistorys, setRaceHistory] = useState<IRaceHistory[]>([]);

  const columnsRaceHistory = [
    {
      field: "competidorId",
      headerName: "Competidor Id",
      type: "number",
      minWidth: 120,
      editable: true,
    },
    {
      field: "speedway",
      headerName: "Speedway",
      type: "number",
      minWidth: 100,
      editable: true,
    },
    {
      field: "raceDate",
      headerName: "Race Date",
      type: "string",
      minWidth: 180,
      editable: true,
    },
    {
      field: "timeSpent",
      headerName: "Time Spent",
      type: "number",
      minWidth: 100,
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
          onClick={deleteRaceHistory(params.id)}
        />,
      ],
    },
  ];

  useEffect(() => {
    getRaceHistory();
  }, []);

  const getRaceHistory = useCallback(async () => {
    const { data } = await api.get<IRaceHistory[]>("/raceHistory");

    if (data!) {
      setRaceHistory([...data]);
    }
  }, []);

  const putRaceHistory = useCallback(
    async (params) => {
      const { id, field, value } = params;

      const raceHistory = raceHistorys.find(
        (raceHistory) => raceHistory.id === id
      );

      if (raceHistory) {
        switch (field) {
          case "competidorId":
            raceHistory.competidorId = value;
            break;
          case "raceDate":
            raceHistory.raceDate = value;
            break;
          case "speedway":
            raceHistory.speedway = value;
            break;
          case "timeSpent":
            raceHistory.timeSpent = value;
            break;
          default:
            break;
        }

        await api.put(`/raceHistory/${params.id}`, raceHistory);
        await getRaceHistory();
      }
    },
    [raceHistorys]
  );

  const deleteRaceHistory = useCallback(
    (id) => async () => {
      await api.delete(`/competitors/${id}`);

      const newRaceHistorys = raceHistorys.filter(
        (raceHistory) => raceHistory.id !== id
      );

      setRaceHistory([...newRaceHistorys]);
    },
    [raceHistorys]
  );

  return (
    <>
      <Header title="Race History" />
      <S.Container>
        <div style={{ height: 600, padding: 50, maxWidth: 700 }}>
          <DataGrid
            rows={raceHistorys}
            columns={columnsRaceHistory}
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
              putRaceHistory(params);
            }}
          />
        </div>
      </S.Container>
    </>
  );
};

export default History;
