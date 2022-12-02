import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#f5f2f2",
    color: "black",
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: "white",
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function createData(
  position: number,
  members: string,
  rewards: any,
  points: any
) {
  return { position, members, rewards, points };
}

const rows = [
  createData(1, "John Doe", "abc", 24),
  createData(2, "John Doe", "abc", 37),
  createData(3, "John Doe", "abc", 24),
  createData(4, "John Doe", "abc", 67),
  createData(5, "John Doe", "abc", 67),
  createData(6, "John Doe", "abc", 67),
];

export default function CustomizedTables() {
  return (
    <TableContainer component={Paper} sx={{ mt: 3 }}>
      <Table
        sx={{ minWidth: 400, height: 200, border: "1px solid #d8d8d8" }}
        aria-label="customized table"
      >
        <TableHead>
          <TableRow>
            <StyledTableCell align="center">Position</StyledTableCell>
            <StyledTableCell align="center">Members</StyledTableCell>
            <StyledTableCell align="center">Reward</StyledTableCell>
            <StyledTableCell align="center">Points</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.position}>
              <StyledTableCell component="th" scope="row" align="center">
                {row.position}
              </StyledTableCell>
              <StyledTableCell align="center">{row.members}</StyledTableCell>
              <StyledTableCell align="center">{row.rewards}</StyledTableCell>
              <StyledTableCell align="center">{row.points}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
