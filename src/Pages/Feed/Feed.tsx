import MiniDrawer from "../../Components/Drawer";
import { Box, Divider, Toolbar, Typography } from "@mui/material";
import SimpleSlider from "../../Components/SimpleSlider";

const Feed = () => {
  return (
    <>
      <Box component="main" sx={{ display: "flex", flexGrow: 1 }}>
        <MiniDrawer />
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
      </Box>
    </>
  );
};

export default Feed;
