import React from "react";
import { createContext } from "react";
import { brandContextType, brandDataType, responseMessageType } from "../../Types/brand";

const brandContext = createContext<brandContextType | null>(null);
const BrandProvider = ({ children }: any) => {
  const [brandData, setBrandData] = React.useState<brandDataType>([]);
  const [responseMessage, setResponseMessage] = React.useState<responseMessageType>([]);
  return (
    <brandContext.Provider value={{ setBrandData, data: brandData,  setResponseMessage}}>
      {children}
    </brandContext.Provider>
  );
};

export default BrandProvider;
