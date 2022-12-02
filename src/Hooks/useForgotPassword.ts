import axios from "axios";
import { useNavigate } from "react-router";

const useForgotPassword = (userType: any) => {
  const navigate = useNavigate();
  const ForgotAPI = (
    email: string,
    setLoading: (Params: any) => any,
    setOpen: (Params: any) => any
  ) => {
    axios
      .post(`https://project2-p2.herokuapp.com/api/${userType}s/password`, {
        [`${userType}`]: {
          email: email,
        },
      })
      .then(function (response: any) {
        console.log(response.data);
        setOpen(true);
        setLoading(false);
        navigate(`/${userType}/resetpassword`);
      })
      .catch(function (error: string) {
        console.log(error);
        setOpen(true);
        setLoading(false);
      });
  };
  return {
    ForgotAPI,
  };
};

export default useForgotPassword;
