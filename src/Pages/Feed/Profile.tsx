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
  Avatar,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Slider from "react-slick";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";

const settings = {
  className: "center",
  centerMode: true,
  infinite: true,
  centerPadding: "150px",
  slidesToShow: 1,
  speed: 400,
};
const Profile = () => {
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
          Profile
        </Typography>
      </Toolbar>
      <Divider />
      <Box
        sx={{
          backgroundColor: "#f5f2f2",
          width: "90%",
          height: "14rem",
          ml: "60px",
          mt: "2rem",
          border: "1px solid #d8d8d8",
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "row" }}>
          {" "}
          <Box
            sx={{
              "& .MuiAvatar-root": {
                fontSize: "40px",
                width: "100px",
                height: "100px",
                mt: "35px",
                ml: "4rem",
                border: "1px solid #f9c712",
              },
            }}
          >
            <Avatar
              alt="Remy Sharp"
              src="https://petapixel.com/assets/uploads/2019/02/download-1.jpeg"
            />
            <Typography sx={{ ml: "4rem", mt: "10px" }}>
              Jessica Smith<br></br>
              <FavoriteIcon sx={{ color: "red", ml: 2.5, fontSize: "20px" }} />
              <Typography sx={{ mt: -3.5, ml: 5.5 }}>256</Typography>
            </Typography>
          </Box>
          <Box
            sx={{
              mt: 5,
              ml: 6,
              width: "40%",
              textAlign: "justify",
              paddingBottom: "2rem",
            }}
          >
            <Typography sx={{ fontWeight: "bold" }}>
              About Pepsi Swag Challenge
            </Typography>
            <Typography>
              In publishing and graphic design, Lorem ipsum is a placeholder
              text commonly used to demonstrate the visual form of a document or
              a typeface without relying on meaningful content. Lorem ipsum may
              be used as a placeholder before final copy is available.
            </Typography>
          </Box>
        </Box>
      </Box>
      <Container
        sx={{
          overflow: "hidden",
          width: "100%",
          height: "500px",
          ml: "auto",
          mr: "auto",
          mt: "1rem",
          mb: "1rem",
          "& .slick-arrow": {
            backgroundColor: "#303030",
            color: "#f9c712",
            height: "40px",
            width: "40px",
            pt: "3px",
            borderRadius: "25px",
            zIndex: 20,
            opacity: "0.75",
            "&:hover": { backgroundColor: "#f9c712", color: "#303030" },
          },
          "& .slick-prev": { marginLeft: "3px" },
          "& .slick-next": { marginRight: "4px" },
        }}
      >
        <Slider {...settings}>
          {[1, 2, 3, 4, 5, 6].map((value: any, key: any) => (
            <Box>
              <>
                <Card key={value.id} sx={{ borderRadius: 0, mx: 2 }}>
                  <CardMedia
                    component="img"
                    alt="challengeImg"
                    height="490px"
                    image="https://images.unsplash.com/photo-1614620150352-c89bb3dae31c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                  ></CardMedia>
                </Card>
                <Box
                  sx={{
                    position: "absolute",
                    marginTop: "-11rem",
                    marginLeft: "2rem",
                  }}
                >
                  <Typography sx={{ color: "white" }}>
                    Pepsi Swag Challenge
                    <br></br>
                    id: 256
                    <br></br>
                    swag challenge
                  </Typography>

                  <Button
                    sx={{
                      backgroundColor: "#ff4242",
                      color: "white",
                      mt: "10px",
                      px: "10px",
                      "&:hover": { backgroundColor: "red" },
                    }}
                  >
                    <FavoriteBorderOutlinedIcon
                      sx={{ fontSize: "14px", mr: "3px" }}
                    />
                    Liked
                  </Button>
                </Box>
              </>
            </Box>
          ))}
        </Slider>
      </Container>
    </Container>
  );
};

export default Profile;
