import axios from "axios";

const useLogin = (userType: any) => {
  const LoginAPI = (
    email: string,
    password: string,
    setOpen: (Params: any) => any
  ) => {
    axios
      .post(`https://project2-p2.herokuapp.com/api/${userType}/login.json`, {
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
      })
      .catch(function (error: string) {
        window.localStorage.setItem("token", "");
        console.log(error);
        setOpen(true);
      });
  };

  return { LoginAPI };
};

export default useLogin;
