import React from "react";
import {
  Box,
  Button,
  Toolbar,
  Typography,
  Divider,
  Container,
  Card,
  CardMedia,
  Grid,
  Avatar,
  AvatarGroup,
} from "@mui/material";
import moment from "moment/moment";
import { useNavigate } from "react-router";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import SearchBar from "../../Components/SearchBar";
import FavoriteIcon from "@mui/icons-material/Favorite";

const Leaderboard = () => {
  const navigate = useNavigate();
  const { userType } = useParams();
  useEffect(() => {
    navigate(`/${userType}/landingpage/leaderboard`);
  }, []);
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
            Leaderboard
          </Typography>
        </Toolbar>
        <Divider />
        <Container
          sx={{
            display: "flex",
            flexDirection: "row",
            marginTop: "2rem",
          }}
        >
          <Grid container>
            {[1, 2, 3, 4, 5, 6, 7, 8]?.map((row: any, key: any) => {
              return (
                <Grid item md={3}>
                  <Box sx={{ padding: "10px" }}>
                    <Card
                      key={row}
                      sx={{
                        maxWidth: 300,
                        height: "370px",
                        position: "relative",
                      }}
                    >
                      <CardMedia
                        component="img"
                        alt="challengeImg"
                        height="370px"
                        image="https://images.unsplash.com/photo-1614620150352-c89bb3dae31c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                      ></CardMedia>
                      <Box sx={{ top: "20%", position: "absolute" }}>
                        <Button
                          sx={{
                            backgroundColor: "#f9c712",
                            color: "#303030",
                            mt: "-3rem",
                            position: "absolute",
                            ml: "150px",
                            py: "1px",
                            width: "100px",
                            height: "30px",
                            textTransform: "capitalize",
                            borderRadius: 5,
                            "&:hover": { backgroundColor: "#f9c712" },
                          }}
                        >
                          <Typography
                            sx={{ color: "#303030", fontSize: "12px" }}
                          >
                            {moment(row.created_at).format("ll")}
                          </Typography>
                        </Button>
                        <Typography
                          sx={{
                            display: "flex ",
                            color: "white",
                            mt: "8px",
                            px: 2.5,
                          }}
                        >
                          Pepsi Swag Challenge
                        </Typography>
                        <Typography
                          sx={{
                            color: "white",
                            mt: "1rem",
                            px: 2.5,
                            fontSize: "x-small",
                          }}
                        >
                          The Top Teams with the highest percentage of active
                          users win!
                        </Typography>
                        <Typography
                          sx={{ color: "white", mt: "1rem", px: 2.5 }}
                        >
                          Winners
                        </Typography>

                        <Box sx={{ ml: -1, mt: -2 }}>
                          <AvatarGroup
                            sx={{
                              position: "absolute",
                              ml: "6.5rem",
                              mt: "-2rem",
                              "& .MuiAvatar-root": {
                                fontSize: "20px",
                                width: "70px",
                                height: "70px",
                                border: "1px solid yellow",
                                ml: -2,
                              },
                            }}
                          >
                            <Avatar
                              alt=""
                              src="https://petapixel.com/assets/uploads/2019/02/download-1.jpeg"
                            />
                            <Box
                              sx={{
                                width: "20px",
                                height: "20px",
                                borderRadius: 9,
                                backgroundColor: "#f9c712",
                                pl: 0.9,
                                pt: 0.2,
                                ml: -2,
                                zIndex: 1,
                                fontSize: "12px",
                                color: "white",
                              }}
                            >
                              1
                            </Box>
                          </AvatarGroup>
                          <Box
                            sx={{
                              ml: 3,
                              mt: 7,
                              "& .MuiAvatar-root": {
                                fontSize: "20px",
                                width: "70px",
                                height: "70px",
                                border: "1px solid yellow",
                              },
                            }}
                          >
                            <Avatar
                              alt=""
                              src="https://petapixel.com/assets/uploads/2019/02/download-3.jpeg"
                            />
                            <Box
                              sx={{
                                position: "absolute",
                                ml: "50px",
                                mt: "-72px",
                                width: "20px",
                                height: "20px",
                                borderRadius: 9,
                                backgroundColor: "silver",
                                pl: 0.9,
                                pt: 0.2,
                                zIndex: 1,
                                fontSize: "12px",
                                color: "white",
                              }}
                            >
                              2
                            </Box>
                          </Box>
                          <Box
                            sx={{
                              ml: 23,
                              mt: "-71px",
                              "& .MuiAvatar-root": {
                                fontSize: "20px",
                                width: "70px",
                                height: "70px",
                                border: "1px solid yellow",
                              },
                            }}
                          >
                            <Avatar
                              alt=""
                              src="https://petapixel.com/assets/uploads/2019/02/download-2.jpeg"
                            />
                            <Box
                              sx={{
                                position: "absolute",
                                ml: "50px",
                                mt: "-72px",
                                width: "20px",
                                height: "20px",
                                borderRadius: 9,
                                backgroundColor: "#837841",
                                pl: 0.9,
                                pt: 0.2,
                                zIndex: 1,
                                fontSize: "12px",
                                color: "white",
                              }}
                            >
                              3
                            </Box>
                          </Box>
                        </Box>
                      </Box>
                    </Card>
                  </Box>
                </Grid>
              );
            })}
          </Grid>
        </Container>
      </Container>
    </>
  );
};

export default Leaderboard;
