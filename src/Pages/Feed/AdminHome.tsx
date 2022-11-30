import React from "react";
import { Box, Divider, Toolbar, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useNavigate } from "react-router";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import useAdminDataTable from "../../Hooks/useAdminDataTable";
import { adminContext } from "../../Contexts/Providers/AdminProvider";
import SearchBar from "../../Components/SearchBar";
import { Container } from "@mui/system";

const AdminHome = (props: any) => {
  const navigate = useNavigate();
  const [searchInput, setSearchInput] = React.useState("");
  const { userType } = useParams();
  const { adminData } = React.useContext(adminContext);
  const { AdminDataTable } = useAdminDataTable();
  console.log("admin Data:", adminData);

  useEffect(() => {
    AdminDataTable();
  }, []);

  useEffect(() => {
    navigate(`/${userType}/landingpage/home`);
  }, []);

  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    "&:last-child td, &:last-child th": {
      border: 0,
    },
  }));

  const columns = [
    { id: "id", label: "ID" },
    { id: "name", label: "Name" },
    { id: "email", label: "Email" },
    { id: "challenges", label: "Challenges" },
    { id: "tricks", label: "Tricks" },
  ];

  const rows = [
    function createData(
      id: number,
      name: string,
      email: string,
      challenges: number,
      tricks: number
    ) {
      return { id, name, email, challenges, tricks };
    },
  ];

  return (
    <>
      <Container sx={{ width: "100%", overflow: "hidden" }}>
        <Toolbar sx={{ height: "4rem" }}>
          <Typography
            component="div"
            sx={{
              fontWeight: "bold",
              fontSize: "26px",
              mt: "1rem",
            }}
          >
            Home
          </Typography>
        </Toolbar>
        <Divider />
        <Box sx={{ ml: 2 }}>
          <SearchBar
            searchInput={searchInput}
            setSearchInput={setSearchInput}
          />
        </Box>
        <TableContainer
          component={Paper}
          sx={{ m: 5, ml: 4, maxHeight: "60vh", maxWidth: "90%" }}
        >
          <Table aria-label="customized table" align="center">
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <StyledTableCell key={column.id} align="center">
                    {column.label}
                  </StyledTableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {adminData
                ? adminData
                    .filter((row: any) => {
                      return searchInput === ""
                        ? row
                        : row.name?.includes(searchInput.toLowerCase());
                    })
                    .map((row: any) => (
                      <StyledTableRow key={row?.id}>
                        <StyledTableCell align="center">
                          {row?.id}
                        </StyledTableCell>
                        <StyledTableCell align="center">
                          {row?.name}
                        </StyledTableCell>
                        <StyledTableCell align="center">
                          {row?.email}
                        </StyledTableCell>
                        <StyledTableCell align="center">
                          {row?.challenges.length}
                        </StyledTableCell>
                        <StyledTableCell align="center">
                          {row?.tricks.length}
                        </StyledTableCell>
                      </StyledTableRow>
                    ))
                : null}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </>
  );
};

export default AdminHome;
