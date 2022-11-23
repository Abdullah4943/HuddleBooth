import axios from "axios";
import { useNavigate } from "react-router-dom";

const useLogin = (userType: any, screen: any) => {
  const navigate = useNavigate();
  const LoginAPI = (
    email: string,
    password: string,
    setOpen: (Params: any) => any,
    setLoading: (Params: any) => any
  ) => {
    const changeScreen = () => {
      navigate(`/${userType}/landingpage/home`); 
    };

    axios
      .post(`https://project2-p2.herokuapp.com/api/${userType}s/login.json`, {
        [`${userType}`]: {
          email: email,
          password: password,
        },
      })
      .then(function (response: any) {
        console.log(response.data);
        window.localStorage.setItem(
          "token",
          JSON.stringify(response.data[userType].token)
        );
        window.localStorage.setItem("authUser", userType);
        setOpen(true);
        setLoading(false);
        setTimeout(changeScreen, 2000);
      })
      .catch(function (error: string) {
        window.localStorage.setItem("token", "");
        console.log(error);
        setOpen(true);
        setLoading(false);
      });
  };
  return { LoginAPI };
};
export default useLogin;
