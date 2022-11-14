import axios from "axios";

const useSignup = (userType: any) => {
  const SignupAPI = (
    username: string,
    email: string,
    password: string,
    setOpen: (Params: any) => any,
    setLoading: (Params: any) => any
  ) => {
    axios
      .post("https://project2-p2.herokuapp.com/api/brands.json", {
        brand: {
          username: username,
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
  return { SignupAPI };
};

export default useSignup;
