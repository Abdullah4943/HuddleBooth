import React from "react";
import axios from "axios";

const useAddComments = () => {
  const AddComments = (challengeId: string | undefined, newComment: string) => {
    const token = window.localStorage.getItem("token");
    var data = new FormData();
    data.append("comment[description]", newComment);
    var config = {
      method: "post", 
      url: `http://192.168.99.104:3001/api/challenges/${challengeId}/comments`,
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
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

  return { AddComments };
};

export default useAddComments;
