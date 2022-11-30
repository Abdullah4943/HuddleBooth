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
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import MiniDrawer from "../../Components/Drawer";
import { adminContext } from "../../Contexts/Providers/AdminProvider";
import CustomizedTables from "../../Components/DemoTable";
import { useParams, useNavigate } from "react-router-dom";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";

const headerBox = {
  width: "65rem",
  height: "3.5rem",
  backgroundColor: "#f5f2f2",
  position: "absolute",
  ml: "5rem",
  mt: "8rem",
  borderRadius: 1,
  border: "1px solid black",
};

const headerButton = {
  textTransform: "capitalize",
  backgroundColor: "#e8e7e7",
  border: "1px solid #bababa",
  color: "black",
  height: "30px",
  fontSize: "12px",
  px: 2,
  mx: 2,
  "&:hover": { backgroundColor: "#f9c712" },
};

const styleBox = {
  width: "35rem",
  height: "3.5rem",
  backgroundColor: "#f5f2f2",
  position: "absolute",
  ml: "30rem",
  mt: "5rem",
  borderRadius: 1,
  border: "1px solid black",
  display: "flex",
  flexDirection: "row",
};
const styleBox2 = {
  position: "absolute",
  ml: "30rem",
  mt: "2rem",
  borderRadius: 1,
};
const ChallengeDetails = (props: any) => {
  const navigate = useNavigate();
  const [selectedIndex, setSelectedIndex] = React.useState<number | null>(0);
  const { challenges, tricks } = React.useContext(adminContext);
  const { userType } = useParams();
  const url = new URL(window.location.href);
  const challengeId = Number(url.searchParams.get("ChallengeId"));
  var item = challenges.find((item: any) => item.id === props.challengeId);

  const handleIndex = (index: any) => {
    setSelectedIndex(index);
  };
  return (
    <Box component="main" sx={{ display: "flex", flexGrow: 1, pl: 2 }}>
      <Toolbar sx={{ height: "4rem" }}>
        <Button
          onClick={() => {
            navigate(`/${userType}/landingpage/challenges`);
          }}
          sx={{
            backgroundColor: "#f9c712",
            color: "#303030",
            ml: -2,
            py: "2px",
            paddingRight: "15px",
            mr: 2,
            textTransform: "capitalize",
            "&:hover": { backgroundColor: "#d1a810" },
          }}
        >
          <ChevronLeftIcon />
          Back
        </Button>
        <Typography
          component="div"
          sx={{
            fontWeight: "bold",
            fontSize: "26px",
            mt: "1rem",
          }}
        >
          Challenges by Brands
        </Typography>
        <Divider
          orientation="vertical"
          sx={{ height: "2rem", ml: "24rem", position: "absolute", mt: "15px" }}
        ></Divider>
        <Typography
          variant="body2"
          sx={{
            cursor: "pointer",
            position: "absolute",
            ml: "26rem",
            mt: "14px",
            width: "10rem",
          }}
        >
          View All Brands
        </Typography>

        <Box sx={headerBox}>
          <List
            sx={{
              mt: "14px",
              ml: "20px",
              display: "flex",
              flexDirection: "row",
              "& .Mui-selected": {
                backgroundColor: "#f9c712 !important",
              },
            }}
            disablePadding
          >
            {" "}
            {[
              "Past Challenges",
              "Current Challenges",
              "Upcoming Challenges",
            ].map((text, index) => (
              <div
                onClick={() => {
                  setSelectedIndex(index);
                }}
              >
                <ListItemButton
                  selected={index === selectedIndex}
                  sx={headerButton}
                >
                  <ListItemText disableTypography primary={text} />
                </ListItemButton>
                {index < 2 && (
                  <Divider
                    orientation="vertical"
                    variant="middle"
                    sx={{ height: "20px", mt: "-24px" }}
                  />
                )}
              </div>
            ))}
          </List>
        </Box>
      </Toolbar>
      <Divider />

      <Box sx={{ marginTop: "6rem", ml: "-19rem" }}>
        <Box sx={styleBox}>
          <Typography sx={{ fontWeight: "bold", pt: "15px", pl: "20px" }}>
            Winning Reward:
          </Typography>

          <Typography sx={{ fontSize: "12px", pt: "18px", pl: "20px" }}>
            Daraz Voucher Worth 1000Rs
          </Typography>
        </Box>
        <Typography variant="h6" sx={{ mt: 8, fontWeight: "bold" }}>
          Pepsi Swag Challenge
        </Typography>
        <Box sx={{ display: "flex", flexDirection: "row", mt: 1 }}>
          <Box
            sx={{
              backgroundColor: "#303030",
              borderRadius: 6,
              py: 1,
              width: "30%",
            }}
          >
            <Typography sx={{ color: "#f9c712", fontSize: "12px", px: 4 }}>
              May 01 to May 15
            </Typography>
          </Box>
          <Box
            sx={{
              backgroundColor: "#8ad6a4",
              borderRadius: 6,
              py: 1,
              width: "15%",
              ml: 2,
            }}
          >
            <Typography sx={{ color: "black", fontSize: "12px", px: 3 }}>
              Joined
            </Typography>
          </Box>
        </Box>
        <Box sx={styleBox2}>
          <Divider sx={{ width: "35rem" }}></Divider>
          <Box sx={{ display: "flex", flexDirection: "row", mt: 2 }}>
            <Typography sx={{ fontSize: "15px", fontWeight: "bold", mt:1 }}>
              256<br></br>
              <Typography>Participants</Typography>
            </Typography>
            <Divider
              orientation="vertical"
              variant="middle"
              sx={{ height: "4rem", mx: "5rem", mt:"-1px" }}
            ></Divider>
            <Typography sx={{ fontSize: "15px", fontWeight: "bold", mt:1 }}>
              0<br></br>
              <Typography>Finishers</Typography>
            </Typography>
            <Divider
              orientation="vertical"
              variant="middle"
              sx={{ height: "4rem", mx: "5rem", mt:"-1px" }}
            ></Divider>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                ml: -4,
                mt: 2,
                "& .MuiAvatar-root": {
                  fontSize: "14px",
                  width: "30px",
                  height: "30px",
                },
              }}
            >
              <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
              <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
              <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
            </Box>
          </Box>
          <Divider sx={{ width: "35rem",mt:"6px"}}></Divider>
          <CustomizedTables />
        </Box>

        <Card sx={{ mt: 2, width: "80%" }}>
          <CardMedia
            component="img"
            alt="challengeImg"
            height="360px"
            image="https://images.unsplash.com/photo-1614620150352-c89bb3dae31c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
          ></CardMedia>
        </Card>
        <Box
          sx={{
            mt: 2,
            position: "absolute",
            width: "34%",
            textAlign: "justify",
            paddingBottom: "2rem",
          }}
        >
          <Typography sx={{ fontWeight: "bold" }}>
            About Pepsi Swag Challenge
          </Typography>
          <Typography>
            In publishing and graphic design, Lorem ipsum is a placeholder text
            commonly used to demonstrate the visual form of a document or a
            typeface without relying on meaningful content. Lorem ipsum may be
            used as a placeholder before final copy is available.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default ChallengeDetails;
