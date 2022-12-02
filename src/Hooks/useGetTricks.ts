import React from "react";
import axios from "axios";
import { adminContext } from "../Contexts/Providers/AdminProvider";
import { useParams } from "react-router";

const useGetTricks = () => {
  const { setTricks } = React.useContext(adminContext);
  const {userType}= useParams();
  const GetTricks = (challengeId: any) => {
    var config = {
      method: "get",
      url: `http://192.168.99.104:3001/api/challenges/170/tricks`,
    };
    axios(config)
      .then(function (response: any) {
        console.log(response.data);
        setTricks(response.data);
      })
      .catch(function (error: any) {
        console.log(error);
      });
  };

  return { GetTricks };
};

export default useGetTricks;
