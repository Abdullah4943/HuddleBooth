import axios from "axios";
import { useNavigate } from "react-router-dom";

const useResetPassword = (userType: any) => {
  const navigate = useNavigate();
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
      navigate(`/${userType}/login`);
    };
    axios
      .patch(`https://project2-p2.herokuapp.com/api/${userType}s/password`, {
        [`${userType}`]: {
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
