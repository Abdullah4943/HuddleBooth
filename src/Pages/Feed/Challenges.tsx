import * as React from "react";
import { useNavigate } from "react-router";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
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
} from "@mui/material";
import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";
import SearchBar from "../../Components/SearchBar";
import { adminContext } from "../../Contexts/Providers/AdminProvider";
import useGetChallenges from "../../Hooks/useGetChallenges";
import AddTrickModal from "./AddTrickModal";

export const Challenges = (props: any) => {
  const { challenges } = React.useContext(adminContext);
  const { GetChallenges } = useGetChallenges();
  const navigate = useNavigate();
  const [searchInput, setSearchInput] = React.useState("");
  const [challengeId, setChallengeId] = React.useState<string>("");
  const [modalOpen, setModalOpen] = React.useState<boolean>(false);
  const { userType } = useParams();
  console.log(userType);
  useEffect(() => {
    navigate(`/${userType}/landingpage/challenges`);
  }, []);
  React.useEffect(() => {
    GetChallenges();
  }, []);

  const [selectedIndexDropdown, setSelectedIndexDropdown] = React.useState<
    number | null
  >(null);
  const handleListItemClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    index: number
  ) => {
    setSelectedIndexDropdown(index);
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
          Challenges
        </Typography>
      </Toolbar>
      <Divider />

      <Box sx={{ ml: 2 }}>
        <SearchBar searchInput={searchInput} setSearchInput={setSearchInput} />
      </Box>

      {challenges ? (
        <Container
          sx={{
            display: "flex",
            flexDirection: "row",
            marginTop: "3rem",
          }}
        >
          <Grid container>
            {challenges
              .filter((value: any) => {
                return searchInput === ""
                  ? value
                  : value.title
                      .toLowerCase()
                      .includes(searchInput.toLowerCase());
              })
              ?.map((value: any, key: string | undefined) => {
                return (
                  <Grid item md={3}>
                    <Box sx={{ padding: "10px" }}>
                      <Card
                        key={value.id}
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
                          image={`http://192.168.99.104:3001${value?.images[0]}`}
                        ></CardMedia>
                        <Box sx={{ top: "20%", position: "absolute" }}>
                          <Button
                         onClick={() => {
                          navigate(`/customer/landingpage/challenges/challengedetails/?ChallengeId=${value.id}`);
                        }}
                            sx={{
                              backgroundColor: "#303030",
                              color: "#f9c712",
                              mt: "-3rem",
                              position: "absolute",
                              ml: "160px",
                              px: "20px",
                              py: "2px",
                              textTransform: "capitalize",
                              "&:hover": { backgroundColor: "black" },
                            }}
                          >
                            Details
                          </Button>
                          <Typography
                            sx={{
                              display: "flex ",
                              color: "white",
                              mt: "15px",
                              px: 5.5,
                            }}
                          >
                            {value.title}
                          </Typography>
                          <Typography
                            sx={{
                              color: "white",
                              mt: "1rem",
                              px: 5.5,
                              fontSize: "x-small",
                            }}
                          >
                            {value.description}
                          </Typography>
                          <Typography
                            sx={{ color: "white", mt: "1rem", px: 5.5 }}
                          >
                            Participants
                          </Typography>
                          <AvatarGroup
                            total={50}
                            max={4}
                            sx={{
                              pr: "6.5rem",
                              "& .MuiAvatar-root": {
                                fontSize: "14px",
                                width: "30px",
                                height: "30px",
                              },
                            }}
                          >
                            <Avatar {...value.id} />
                            <Avatar
                              alt="Travis Howard"
                              src="/static/images/avatar/2.jpg"
                            />
                            <Avatar
                              alt="Cindy Baker"
                              src="/static/images/avatar/3.jpg"
                            />
                            <Avatar
                              alt="Agnes Walker"
                              src="/static/images/avatar/4.jpg"
                            />
                            <Avatar
                              alt="Trevor Henderson"
                              src="/static/images/avatar/5.jpg"
                            />
                          </AvatarGroup>
                          {userType === "customer" ? (
                            <>
                              <AddTrickModal
                                open={modalOpen}
                                setOpen={setModalOpen}
                                challengeId={challengeId}
                              ></AddTrickModal>
                              <Button
                                onClick={(
                                  event: React.MouseEvent<HTMLElement>
                                ) => {
                                  setModalOpen(true);
                                  setChallengeId(value.id);
                                }}
                                sx={{
                                  backgroundColor: "#f9c712",
                                  color: "#303030",
                                  mt: "4rem",
                                  mx: "4.7rem",
                                  px: "40px",
                                  py: "3px",
                                  textTransform: "capitalize",
                                  "&:hover": { backgroundColor: "#d1a810" },
                                }}
                              >
                                Join
                              </Button>
                            </>
                          ) : (
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
                          )}
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
