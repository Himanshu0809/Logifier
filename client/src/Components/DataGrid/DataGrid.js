import React, { useState } from "react";
import MUIDataTable from "mui-datatables";
import { useStyles } from "./DataGrid.styles.js";

function DataGrid(props) {
  const classes = useStyles();
  const [data, setData] = useState(props.initialData);
  const [columns, setColumns] = useState(props.initialColumns);
  const options = {
    filterType: "dropdown",
    responsive: "stacked",
    print: true,
    rowsPerPage: 10,
    page: 1,
  };
  return (
    <MUIDataTable
      title={props.selectedLabel? props.selectedLabel.toUpperCase(): 'LOGIFIED DATA'}
      data={data}
      columns={columns}
      options={options}
      className={classes.dataTableWrapper}
    />
  );
}

export default DataGrid;
