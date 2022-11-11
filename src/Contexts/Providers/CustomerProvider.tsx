import React from "react";
import { createContext } from "react";
import { customerContextType, customerDataType } from "../../Types/customer";

const customerContext = createContext<customerContextType | null>(null);
const CustomerProvider = ({ children }: any) => {
  const [customerData, setCustomerData] = React.useState<customerDataType>([]);
  return (
    <customerContext.Provider value={{ data: customerData, setCustomerData }}>
      {children}
    </customerContext.Provider>
  );
}; 

export default CustomerProvider;
