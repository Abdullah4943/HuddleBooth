import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  Box,
  Button,
  Container,
  Typography,
  Card,
  CardMedia,
} from "@mui/material";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";

export default class CenterMode extends Component {
  render() {
    const settings = {
      className: "center",
      centerMode: true,
      infinite: true,
      centerPadding: "150px",
      slidesToShow: 1,
      speed: 400,
    };
    return (
      <div>
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
            {[1, 2, 3, 4, 5, 6].map((data, index) => (
              <Box sx={{ px: "2rem" }}>
                <Card sx={{ borderRadius: 0 }}>
                  <CardMedia
                    component="img"
                    alt="challengeImg"
                    height="490px"
                    image="https://images.unsplash.com/photo-1548625149-d629f7136bb3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2073&q=80"
                  ></CardMedia>
                </Card>
                <Box
                  sx={{
                    position: "absolute",
                    marginTop: "-7rem",
                    marginLeft: "2rem",
                  }}
                >
                  <Typography sx={{ color: "white" }}>
                    Challenge No. 1<br></br>id: 231
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
              </Box>
            ))}
          </Slider>
        </Container>
      </div>
    );
  }
}
