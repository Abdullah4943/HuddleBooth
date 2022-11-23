import React from "react";
import { Box, Divider, Toolbar, Typography } from "@mui/material";
import { useNavigate } from "react-router";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

const Tricks = () => {
  const navigate = useNavigate();
  const { userType } = useParams();
  useEffect(() => {
    navigate(`/${userType}/landingpage/tricks`);
  }, []);
  return (
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
          Tricks
        </Typography>
      </Toolbar>
      <Divider />
    </Box>
  );
};

export default Tricks;
