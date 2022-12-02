import { Dispatch } from "react";

export type adminDataType = {}[];

export type adminContextType = {
  data: adminDataType;
  challenges: {}[];
  setChallenges: Dispatch<any>;
  adminData:{}[]; 
  setAdminData: Dispatch<any>;
  tricks: {}[];
  setTricks : Dispatch<any>;
};
 