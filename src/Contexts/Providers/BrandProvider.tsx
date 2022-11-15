import React from "react";
import { createContext } from "react";
import { brandContextType, brandDataType } from "../../Types/brand";

const brandContext = createContext<brandContextType | null>(null);
const BrandProvider = ({ children }: any) => {
  const [brandData, setBrandData] = React.useState<brandDataType>([]);
  return (
    <brandContext.Provider value={{ setBrandData, data: brandData }}>
      {children}
    </brandContext.Provider>
  );
};

export default BrandProvider;
