import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { useStyles } from "./TableViewStyle";

const TableView = ({ tableHeader, data }) => {
  const { root, table } = useStyles();

  return (
    <TableContainer component={Paper} className={root}>
      <Table className={table} aria-label="table data">
        <TableHead>
          <TableRow>
            {tableHeader &&
              tableHeader.map((header, index) => {
                return <TableCell key={index}>{header}</TableCell>;
              })}
          </TableRow>
        </TableHead>
        <TableBody>
          {data &&
            data.map((item, index) => (
              <TableRow key={index}>
                {Object.values(item).map((el, index) => (
                  <TableCell
                    key={`${item}_${index}`}
                    component="th"
                    scope="row"
                  >
                    {el}
                  </TableCell>
                ))}
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TableView;
