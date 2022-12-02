import * as React from "react";
import { Box, Divider, Toolbar, Typography } from "@mui/material";
import SimpleSlider from "../../Components/SimpleSlider";
import { useNavigate } from "react-router";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
const Home = () => {
  const navigate = useNavigate();
  const { userType } = useParams();
  useEffect(() => {
    navigate(`/${userType}/landingpage/home`);
  }, []);

  return (
    <>
      <Box sx={{ width: "100%", overflow: "hidden" }}>
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
        <SimpleSlider />
      </Box>
    </>
  );
};

export default Home;
