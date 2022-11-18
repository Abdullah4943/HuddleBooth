import axios from "axios";
import { useNavigate } from "react-router-dom";

const useLogin = (userType: any) => {
  const navigate = useNavigate();
  const LoginAPI = (
    email: string,
    password: string,
    setOpen: (Params: any) => any,
    setLoading: (Params: any) => any
  ) => {
    const changeScreen = () => {
      navigate("/feed");
    };
    axios
      .post(`https://project2-p2.herokuapp.com/api/brands/login.json`, {
        brand: {
          email: email,
          password: password,
        },
      })
      .then(function (response: any) {
        console.log(response.data);
        window.localStorage.setItem(
          "token",
          JSON.stringify(response.data.brand.token)
        );
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
