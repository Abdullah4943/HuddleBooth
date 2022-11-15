import axios from "axios";
import { useNavigate } from "react-router-dom";

const useResetPassword = (props: any) => {
  let navigate = useNavigate();
  const ResetPassword = (
    reset_password_token: string,
    password: string,
    confirmPassword: string,
    setLoading: (Params: any) => any,
    setOpen: (Params: any) => any,
    setResponseMessage: (Params: any) => any,
    open: boolean
  ) => {
    const changeScreen = () => {
      navigate("/");
    };
    axios
      .patch("https://project2-p2.herokuapp.com/api/brands/password", {
        brand: {
          reset_password_token: reset_password_token,
          password: password,
        },
      })
      .then(function (response: any) {
        setResponseMessage(response.status);
        setOpen(true);
        setLoading(false);
        setTimeout(changeScreen, 3000);
        console.log(response);
      })
      .catch(function (response) {
        setResponseMessage(null);
        console.log(response);
        setOpen(true);
        setLoading(false);
      });
  };

  return { ResetPassword };
};
export default useResetPassword;
