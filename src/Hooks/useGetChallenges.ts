import React from 'react'
import axios from "axios";
import { adminContext } from "../Contexts/Providers/AdminProvider";

const useGetChallenges = () => {
    const { setChallenges } = React.useContext(adminContext);
    const GetChallenges = () => {
        var config = {
          method: "get",
          url: "http://192.168.99.104:3001/api/challenges",
        };
    
        axios(config)
          .then(function (response: any) {
            console.log(response.data);
            setChallenges(response.data);
          })
          .catch(function (error: any) {
            console.log(error); 
          });
      };
  return {GetChallenges}
}

export default useGetChallenges