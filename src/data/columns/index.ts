import { Column } from "react-table";
import { River } from "type";

const datasetColumns: ReadonlyArray<Column<River>> = [
  {
    Header: "No",
    accessor: "no",
    width: "10%",
  },
  {
    Header: "River Name",
    accessor: "name",
    width: "20%",
  },
  {
    Header: "Temperature",
    accessor: "temperature",
    width: "17.5%",
  },
  {
    Header: "Turbidity",
    accessor: "turbidity",
    width: "17.5%",
  },
  {
    Header: "Solid",
    accessor: "solid",
    width: "17.5%",
  },
  {
    Header: "Distance",
    accessor: "distance",
    width: "17.5%",
  },
  {
    Header: "Terrain",
    accessor: "terrain",
    width: "17.5%",
  },
  {
    Header: "Debit",
    accessor: "debit",
    width: "17.5%",
  },
];

export { datasetColumns };
