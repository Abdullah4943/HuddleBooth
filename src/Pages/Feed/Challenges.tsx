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
  IconButton,
} from "@mui/material";
import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";
import SearchBar from "../../Components/SearchBar";
import { adminContext } from "../../Contexts/Providers/AdminProvider";
import useGetChallenges from "../../Hooks/useGetChallenges";
import AddTrickModal from "../../Components/AddTrickModal";
import AddChallengeModal from "../../Components/AddChallengeModal";
import useAddLikes from "../../Hooks/useAddLikes";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import CommentField from "../../Components/CommentField";
import useAddComments from "../../Hooks/useAddComments";
import Textarea from "@mui/joy/Textarea";

export const Challenges = (props: any) => {
  const { challenges } = React.useContext(adminContext);
  const { GetChallenges } = useGetChallenges();
  const { PostLikes } = useAddLikes();
  const { AddComments } = useAddComments();
  const navigate = useNavigate();
  const [searchInput, setSearchInput] = React.useState("");
  const [challengeId, setChallengeId] = React.useState<string>("");
  const [itemsToShow, setItemsToShow] = React.useState(8);

  const [modalOpen, setModalOpen] = React.useState<boolean>(false);
  const [newComment, setNewComment] = React.useState<string>("");
  const [challengeModalOpen, setChallengeModalOpen] =
    React.useState<boolean>(false);
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
  const handleLikes = (challengeId: any | undefined) => {
    PostLikes(challengeId);
  };

  const handleAddComment = () => {
    setNewComment("");
  };

  const handleComment = (challengeId: any | undefined) => {
    AddComments(challengeId, newComment);
  };

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
          Challenges
        </Typography>
      </Toolbar>
      <Divider />

      <Box sx={{ ml: 2, display: "flex", flexDirection: "row" }}>
        <SearchBar searchInput={searchInput} setSearchInput={setSearchInput} />
        <AddTrickModal
          open={modalOpen}
          setOpen={setModalOpen}
          challengeId={challengeId}
        ></AddTrickModal>

        {userType === "brand" && (
          <>
            <AddChallengeModal
              open={challengeModalOpen}
              setOpen={setChallengeModalOpen}
            ></AddChallengeModal>
            <Button
              onClick={(event: React.MouseEvent<HTMLElement>) => {
                setChallengeModalOpen(true);
              }}
              sx={{
                backgroundColor: "#f9c712",
                color: "#303030",
                height: "2rem",
                mt: 4,
                ml: 4,
                textTransform: "capitalize",
                "&:hover": { backgroundColor: "#d1a810" },
              }}
            >
              +Add Challenge
            </Button>
          </>
        )}
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
              .slice(0, itemsToShow)
              .filter((value: any) => {
                return searchInput == ""
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
                          height: "360px",
                          position: "relative",
                        }}
                      >
                        <CardMedia
                          component="img"
                          alt="challengeImg"
                          height="360px"
                          image={`http://192.168.99.104:3001${value?.images[0]}`}
                        ></CardMedia>
                        <Box sx={{ top: "17%", position: "absolute" }}>
                          <Button
                            onClick={() => {
                              navigate(
                                `/customer/landingpage/challenges/challengedetails/?ChallengeId=${value.id}`
                              );
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
                              height: "20px",
                            }}
                          >
                            {value.title}
                          </Typography>
                          <Typography
                            sx={{
                              color: "white",
                              mt: "1.5rem",
                              px: 5.5,
                              fontSize: "x-small",
                              height: "20px",
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
                          )}
                        </Box>
                      </Card>
                      {userType === "customer" && (
                        <>
                          <Box sx={{ display: "flex", flexDirection: "row" }}>
                            <IconButton aria-label="add to favorites">
                              {value.counts !== 0 ? (
                                <FavoriteIcon
                                  sx={{ color: "red" }}
                                  onClick={(e: any) => {
                                    handleLikes(value.id);
                                  }}
                                />
                              ) : (
                                <FavoriteIcon
                                  sx={{ color: "grey" }}
                                  onClick={(e: any) => {
                                    handleLikes(value.id);
                                  }}
                                />
                              )}

                              <Typography>{value.counts}</Typography>
                            </IconButton>
                            <Box
                              sx={{
                                display: "flex",
                                flexDirection: "row",
                                p: 1,
                              }}
                            >
                              <Textarea
                                key={value.id}
                                sx={{
                                  width: "50%",
                                  borderRadius: "0px",
                                  borderColor: "transparent",
                                  p: 1,
                                  fontSize: "14px",
                                  "&.JoyTextarea-focused": {
                                    focusedHighlight: "black !important",
                                  },
                                }}
                                placeholder="Add comment"
                                defaultValue=""
                                maxRows={4}
                                onChange={(event: any) =>
                                  setNewComment(event.target.value)
                                }
                                value={newComment}
                              />
                              <Button
                                sx={{ textTransform: "none", display: "flex" }}
                                onClick={() => {
                                  handleComment(value.id);
                                  handleAddComment();
                                }}
                              >
                                Post
                              </Button>
                            </Box>
                          </Box>
                        </>
                      )}

                      <CommentField commentsValue={value.comments} />
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
