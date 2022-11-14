import React from "react";
import axios from "axios";

const useLogin = (userType: any) => {
  const LoginAPI = (email: string, password: string) => {
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
          JSON.stringify(response.data.token)
        );
      })
      .catch(function (error: string) {
        console.log(error);
      });
  };

  return { LoginAPI };
};

export default useLogin;
