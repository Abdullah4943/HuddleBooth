import React from "react";
import axios from "axios";
import useGetChallenges from "./useGetChallenges";

const useAddLikes = () => {
  const { GetChallenges } = useGetChallenges();
  const PostLikes = (challengeId: string | undefined) => {
    const token = window.localStorage.getItem("token");
    var config = {
      method: "post",
      url: `http://192.168.99.104:3001/api/challenges/${challengeId}/likes`,
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    };

    axios(config)
      .then(function (response: any) {
        console.log(response.data);
        GetChallenges();
      })
      .catch(function (error: any) {
        console.log(error);
        GetChallenges();
      });
  };
  return { PostLikes };
};

export default useAddLikes;
