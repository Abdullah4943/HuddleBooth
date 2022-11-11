import React from "react";
import { createContext } from "react";
import { adminDataType } from "../../Types/admin";

const adminContext = createContext<any>(null); 

const AdminProvider = ({ children }: any) => {
  const [adminData, setAdminData] = React.useState<adminDataType>([]);
  return (
    <adminContext.Provider value={{ data: adminData, setAdminData }}>
      {children}
    </adminContext.Provider>
  ); 
};
export default AdminProvider;