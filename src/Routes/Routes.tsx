import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "../Pages/LoginPage/Login";
import Signup from "../Pages/SignupPage/Signup";
import Feed from "../Pages/Feed/Feed";
import ProtectedRoutes from "./protectedRoutes";

export const Navigation = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        {/* <Route path="/:userType/login" element={<Login />} /> */}
        <Route path="/signup" element={<Signup />} />
        <Route element={<ProtectedRoutes />}>
          <Route path="/feed" element={<Feed />} />
        </Route>
      </Routes>
    </Router>
  );
};
