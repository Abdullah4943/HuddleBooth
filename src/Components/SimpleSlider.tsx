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
import { adminContext } from "../Contexts/Providers/AdminProvider";
import useGetChallenges from "../Hooks/useGetChallenges";
import moment from "moment/moment";
import { useParams } from "react-router-dom";
import { getValue } from "@mui/system";
import { validateYupSchema } from "formik";

const settings = {
  className: "center",
  centerMode: true,
  infinite: true,
  centerPadding: "150px",
  slidesToShow: 1,
  speed: 400,
};
const SimpleSlider = () => {
  const { userType } = useParams();
  const { challenges } = React.useContext(adminContext);
  const { GetChallenges } = useGetChallenges();
  React.useEffect(() => {
    GetChallenges();
  }, []);
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
          {challenges.map(
            (value: any, key: any) =>
              value.counts !== 0 && (
                <Box sx={{ px: "2rem" }}>
                  <>
                    <Card key={value.id} sx={{ borderRadius: 0 }}>
                      <CardMedia
                        component="img"
                        alt="challengeImg"
                        height="490px"
                        image={`http://192.168.99.104:3001${value?.images[0]}`}
                      ></CardMedia>
                    </Card>
                    <Box
                      sx={{
                        position: "absolute",
                        marginTop: "-11rem",
                        marginLeft: "2rem",
                      }}
                    >
                      <Typography sx={{ color: "white", fontSize: "12px" }}>
                        {moment(value.created_at).format("ll")}
                      </Typography>
                      <Typography sx={{ color: "white" }}>
                        {value.title}
                        <br></br>
                        id: {value.id}
                        <br></br>
                        {value.description}
                      </Typography>
                      {userType === "brand" ? (
                        <>
                          {" "}
                          <Button
                            sx={{
                              backgroundColor: "#ff4242",
                              color: "white",
                              mt: "10px",
                              px: "10px",
                              "&:hover": { backgroundColor: "red" },
                            }}
                          >
                            {value.counts} Likes
                          </Button>{" "}
                        </>
                      ) : (
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
                      )}
                    </Box>
                  </>
                </Box>
              )
          )}
        </Slider>
      </Container>
    </div>
  );
};

export default SimpleSlider;
