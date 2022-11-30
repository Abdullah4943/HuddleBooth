import React from "react";
import {
  Box,
  Container,
  Divider,
  Toolbar,
  Typography,
  Grid,
  CardMedia,
  Card,
  Button,
} from "@mui/material";
import { useNavigate } from "react-router";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import SearchBar from "../../Components/SearchBar";
import { adminContext } from "../../Contexts/Providers/AdminProvider";
import useGetTricks from "../../Hooks/useGetTricks";

const Tricks = () => {
  const [previewImage, setPreviewImage] = React.useState<string>("");
  const { challenges } = React.useContext(adminContext);
  const { tricks } = React.useContext(adminContext);
  const [searchInput, setSearchInput] = React.useState("");
  const { GetTricks } = useGetTricks();
  const navigate = useNavigate();
  const { userType } = useParams();

  const url = new URL(window.location.href);
  const challengeId = Number(url.searchParams.get("ChallengeId"));

  const item = challenges.find((item: any) => item.id === challengeId);

  if (previewImage) {
    setPreviewImage(URL.createObjectURL(item.images[0]));
  }
  useEffect(() => {
    navigate(`/${userType}/landingpage/tricks`);
  }, []);
  React.useEffect(() => {
    GetTricks(challengeId);
  }, []);
  return (
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
          Tricks
        </Typography>
      </Toolbar>
      <Divider />
      <Box sx={{ ml: 2 }}>
        <SearchBar searchInput={searchInput} setSearchInput={setSearchInput} />
      </Box>

      {tricks ? (
        <Container
          sx={{
            display: "flex",
            flexDirection: "row",
            marginTop: "3rem",
          }}
        >
          <Grid container>
            {tricks
              .filter((data: any) => {
                return searchInput === ""
                  ? data
                  : data.description
                      .toLowerCase()
                      .includes(searchInput.toLowerCase());
              })
              ?.map((data: any, key: string | undefined) => {
                return (
                  <Grid item md={3}>
                    <Box sx={{ padding: "10px" }}>
                      <Card
                        key={data.id}
                        sx={{
                          maxWidth: 300,
                          height: "340px",
                          position: "relative",
                        }}
                      >
                        <CardMedia
                          component="img"
                          alt="challengeImg"
                          height="340px"
                          image={`http://192.168.99.104:3001${data?.images}`}
                        ></CardMedia>
                        <Box sx={{ top: "20%", position: "absolute" }}>
                          <Typography
                            sx={{
                              display: "flex ",
                              color: "white",
                              mt: "-2rem",
                              px: 5.5,
                            }}
                          >
                            {data.description}
                          </Typography>
                          <Typography
                            sx={{
                              color: "white",
                              mt: "1rem",
                              px: 5.5,
                              fontSize: "x-small",
                            }}
                          >
                            {<span>by: {data?.customer_info?.name}</span>}
                          </Typography>

                          <Button
                            sx={{
                              backgroundColor: "#f9c712",
                              color: "#303030",
                              mt: "6rem",
                              mx: "4.7rem",
                              px: "40px",
                              py: "3px",
                              textTransform: "capitalize",
                              "&:hover": { backgroundColor: "#d1a810" },
                            }}
                          >
                            Join
                          </Button>
                        </Box>
                      </Card>
                    </Box>
                  </Grid>
                );
              })}
          </Grid>
        </Container>
      ) : null}
    </Container>
  );
};

export default Tricks;
