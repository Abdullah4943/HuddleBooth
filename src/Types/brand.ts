import { Dispatch } from "react";

export type brandDataType = {
  name: string;
  id: string;
  followers: number;
}[];

export type responseMessageType = {
  name: string;
  id: string;
  followers: number;
}[];
export type brandContextType = {
  data: brandDataType;
  setBrandData: Dispatch<any>;
  setResponseMessage: Dispatch<any>;
};
