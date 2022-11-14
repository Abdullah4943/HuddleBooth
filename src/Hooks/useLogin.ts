import axios from "axios";

const useLogin = (userType: any) => {
  const LoginAPI = (
    email: string,
    password: string,
    setOpen: (Params: any) => any,
    setLoading: (Params: any) => any
    
  ) => {
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
