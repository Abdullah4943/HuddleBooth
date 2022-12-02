import React from "react";
import axios from "axios";
import { adminContext } from "../Contexts/Providers/AdminProvider";
import useGetChallenges from "./useGetChallenges";

const useAddChallenges = () => {
  const { challenges, setChallenges } = React.useContext(adminContext);
  const { GetChallenges } = useGetChallenges();
  const AddChallenges = (
    challengeName: string,
    challengeDescription: string,
    challengeImage: Blob,
    challengeTag: string
  ) => {
    const token = window.localStorage.getItem("token");
    const data = new FormData();
    data.append("challenge[title]", challengeName);
    data.append("challenge[description]", challengeDescription);
    data.append("tag[ids]", challengeTag);
    data.append("challenge[images][]", challengeImage);
    var config = {
      method: "post",
      url: "http://192.168.99.104:3001/api/challenges",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      data: data,
    };
    axios(config)
      .then(function (response: any) {
        console.log(response.data);
        setChallenges(response.data);
        GetChallenges();
      })
      .catch(function (error: any) {
        console.log(error);
        GetChallenges();
      });
  };
  return { AddChallenges };
};

export default useAddChallenges;
