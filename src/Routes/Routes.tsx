import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Login from "../Pages/LoginPage/Login";
import Signup from "../Pages/SignupPage/Signup";

export const Navigation = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        {/* <Route path="/:userType/login" element={<Login />} /> */}
        <Route path="/signup" element={<Signup />} />
      </Routes> 
    </Router>
  );
};
