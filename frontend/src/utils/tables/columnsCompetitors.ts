import { GridColDef } from "@mui/x-data-grid";

export const columnsCompetitor: GridColDef[] = [
  {
    field: "name",
    headerName: "Name",
    type: 'string',
    width: 150,
    editable: true,
  },
  {
    field: "sex",
    headerName: "Sex",
    type: 'string',
    width: 100,
    editable: true,
  },
  {
    field: "averageBodyTemperature",
    headerName: "Average Body Temp",
    type: 'number',
    width: 150,
    editable: true,
  },
  {
    field: "weight",
    headerName: "Weight",
    type: 'number',
    width: 100,
    editable: true,
  },
  {
    field: "height",
    headerName: "Height",
    type: 'number',
    width: 100,
    editable: true,
  },
];