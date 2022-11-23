import React from "react";
import axios from "axios";
import { adminContext } from "../Contexts/Providers/AdminProvider";

const useAdminDataTable = () => {
  const token = window.localStorage.getItem("token");
  const { setAdminData } = React.useContext(adminContext);
  const AdminDataTable = () => {
    axios
      .get("https://project2-p2.herokuapp.com/api/admin/feed", {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      })
      .then(function (Response) {
        console.log(Response.data);
        setAdminData(Response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return { AdminDataTable };
};

export default useAdminDataTable;
