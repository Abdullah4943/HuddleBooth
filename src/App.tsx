import React from "react";
import "./App.css";
import AdminProvider from "./Contexts/Providers/AdminProvider";
import BrandProvider from "./Contexts/Providers/BrandProvider";
import CustomerProvider from "./Contexts/Providers/CustomerProvider";
import { Navigation } from "./Routes/Routes";

function App() {
  return (
    <>
      <AdminProvider>
        <BrandProvider>
          <CustomerProvider>
            <Navigation></Navigation>
          </CustomerProvider>
        </BrandProvider>
      </AdminProvider>
    </>
  );
}

export default App;
