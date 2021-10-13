import faker from "faker";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  table: {
    minWidth: 650,
  },
  tablecontainer: {
    borderRadius: 15,
    margin: "10px 10px",
    maxWidth: 1375,
  },
  tableHeaderCell: {
    fontWeight: "bold",
    backgroundColor: "#42cccf",
    // color: #42cccf;
  },
  name: {
    fontWeight: "bold",
    color: "#a92ab0",
  },
  status: {
    fontWeight: "bold",
    fontSize: "0.75rem",
    color: "white",
    backgroundColor: "grey",
    borderRadius: 8,
    padding: "3px 5px",
    display: "block",
    marginTop: "15px",
    textAlign: "center",
  },
}));

let users = [],
  statuses = ["Passed", "Failed"];

for (let i = 1; i <= 9; i++) {
  users[i] = {
    id: i,
    name: faker.name.findName(),
    email: faker.internet.email(),
    assessment: "Sample assessment(Java + Javascript + Coding)",
    score: "40%",
    status: statuses[Math.floor(Math.random() * statuses.length)],
  };
}

// console.log(users);

function MTable() {
  const classes = useStyles();
  return (
    <TableContainer component={Paper} className={classes.tablecontainer}>
      <Table
        className={classes.table}
        sx={{ minWidth: 650 }}
        aria-label="simple table"
      >
        <TableHead>
          <TableRow>
            <TableCell className={classes.tableHeaderCell} align="right">
              Id
            </TableCell>
            <TableCell className={classes.tableHeaderCell} align="right">
              Name
            </TableCell>
            <TableCell className={classes.tableHeaderCell} align="right">
              Email
            </TableCell>
            <TableCell className={classes.tableHeaderCell} align="right">
              Assessment
            </TableCell>
            <TableCell className={classes.tableHeaderCell} align="right">
              Status
            </TableCell>
            <TableCell className={classes.tableHeaderCell} align="right">
              Score
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((row) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell align="right">{row.id}</TableCell>
              <TableCell align="right" className={classes.name}>
                {row.name}
              </TableCell>
              <TableCell align="right">{row.email}</TableCell>
              <TableCell align="right">{row.assessment}</TableCell>
              <TableCell
                align="right"
                className={classes.status}
                style={{
                  backgroundColor:
                    (row.status === "Passed" && "green") ||
                    (row.status === "Failed" && "red"),
                }}
              >
                {row.status}
              </TableCell>
              <TableCell align="right">{row.score}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default MTable;
