import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Login from "../Pages/LoginPage/Login";
import Signup from "../Pages/SignupPage/Signup";
import LandingPage from "../Pages/Feed/LandingPage";
import ProtectedRoutes from "./protectedRoutes";
import ForgotPassword from "../Pages/LoginPage/ForgotPassword";
import Reset from "../Pages/LoginPage/Reset";


export const Navigation = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/customer/login" />} />
        <Route path="/:userType/login" element={<Login />} />
        <Route path="/:userType/forgotpassword" element={<ForgotPassword />} />
        <Route path="/:userType/resetpassword" element={<Reset />} />
        <Route path="/:userType/" element={<Signup />} />
        <Route path="/404_Not_Found" element={<>Page not found</>} />
        <Route element={<ProtectedRoutes />}>
          <Route path="/:userType/landingpage/:screen" element={<LandingPage />} />
        </Route>
      </Routes>
    </Router>
  );
};
