import * as React from "react";
import MiniDrawer from "../../Components/Drawer";
import { Box } from "@mui/material";
import { useParams, useNavigate } from "react-router-dom";
import Home from "./Home";
import Challenges from "./Challenges";
import Tricks from "./Tricks";
import Leaderboard from "./Leaderboard";
import AdminHome from "./AdminHome";

const LandingPage = (props: any) => {
  const navigate = useNavigate();
  const { userType } = useParams();
  const [selectedIndex, setSelectedIndex] = React.useState<number | null>(0);
  const authUser = window.localStorage.getItem("authUser");
  React.useEffect(() => {
    if (userType !== authUser) {
      navigate("/404_Not_Found");
    }
  }, []);

  return (
    <Box component="main" sx={{ display: "flex", flexGrow: 1 }}>
      <MiniDrawer
        selectedIndex={selectedIndex}
        setSelectedIndex={setSelectedIndex}
      />
      <Box sx={{ width: "100%", overflow: "hidden" }}>
        {selectedIndex === 0 && userType === "admin" && <AdminHome></AdminHome>}
        {selectedIndex === 0 && userType !== "admin" && <Home></Home>}
        {selectedIndex === 1 && <Challenges></Challenges>}
        {selectedIndex === 2 && <Tricks></Tricks>}
        {selectedIndex === 3 && <Leaderboard></Leaderboard>}
      </Box>
    </Box>
  );
};

export default LandingPage;
