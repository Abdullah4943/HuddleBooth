import React from "react";
import { createContext } from "react";
import { adminDataType } from "../../Types/admin";

export const adminContext = createContext<any>(null); 

const AdminProvider = ({ children }: any) => {
  const [adminData, setAdminData] = React.useState<adminDataType>([]);
  const [challenges, setChallenges] = React.useState<adminDataType>([]);
  const [tricks, setTricks] = React.useState<adminDataType>([]);
  
  return ( 
    <adminContext.Provider value={{  adminData, setAdminData, challenges, setChallenges, tricks, setTricks }}>
      {children}
    </adminContext.Provider>
  ); 
};
export default AdminProvider;
