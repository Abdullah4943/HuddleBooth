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
import moment from "moment/moment";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";

const Tricks = () => {
  const [previewImage, setPreviewImage] = React.useState<string>("");
  const { challenges } = React.useContext(adminContext);
  const { tricks } = React.useContext(adminContext);
  const [searchInput, setSearchInput] = React.useState("");
  const [itemsToShow, setItemsToShow] = React.useState(8);
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

  const showmore = () => {
    setItemsToShow(challenges.length);
  };
  const showless = () => {
    setItemsToShow(8);
  };
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
             .slice(0, itemsToShow)
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
                              mt: "2rem",
                              px: 5.5,
                              fontSize: "20px",
                            }}
                          >
                            {data.description}
                          </Typography>
                          <Typography
                            sx={{
                              color: "white",
                              mt: "1rem",
                              px: 5.5,
                              fontSize: "12px",
                            }}
                          >
                            {<span>By: {data?.customer_info?.name}</span>}
                            <br></br>
                            {
                              <span>
                                Created at:{" "}
                                {moment(data?.customer_info?.created_at).format(
                                  "ll"
                                )}
                              </span>
                            }
                          </Typography>
                        </Box>
                      </Card>
                    </Box>
                  </Grid>
                );
              })}
                  {itemsToShow === 8 ? (
              <Box sx={{ ml: "30rem" }}>
                <button
                  style={{
                    marginTop: "2rem",
                    paddingBottom: "2rem",
                    border: "none",
                    backgroundColor: "white",
                    color: "#8b8b8b",
                    cursor: "pointer",
                    fontSize: "17px",
                  }}
                  onClick={showmore}
                >
                  View More{" "}
                  <ArrowDropDownIcon
                    sx={{ mt: "-3px", position: "absolute" }}
                  />
                </button>
              </Box>
            ) : (
              <button
                style={{
                  marginTop: "2rem",
                  paddingBottom: "2rem",
                  border: "none",
                  backgroundColor: "white",
                  color: "#8b8b8b",
                  cursor: "pointer",
                  fontSize: "17px",
                }}
                onClick={showless}
              >
                View Less{" "}
                <ArrowDropUpIcon
                  sx={{ mt: "-3px", position: "absolute" }}
                ></ArrowDropUpIcon>
              </button>
            )}
          </Grid>
        </Container>
      ) : null}
    </Container>
  );
};

export default Tricks;
