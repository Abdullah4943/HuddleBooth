import React from "react";
import axios from "axios";

const useAddTricks = () => {
  const AddTricks = (
    trickDescription: string,
    trickImage: Blob,
    challengeId: string
  ) => {
    const token = window.localStorage.getItem("token");
    const data = new FormData();
    data.append("trick[description]", trickDescription);
    data.append("trick[images][]", trickImage);
    var config = {
      method: "post",
      url: `http://192.168.99.104:3001/api/challenges/${challengeId}/tricks`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
      data: data,
    };

    axios(config)
      .then(function (response: any) {
        console.log(response.data);
      })
      .catch(function (error: any) {
        console.log(error);
      });
  };
  return { AddTricks };
};

export default useAddTricks;
