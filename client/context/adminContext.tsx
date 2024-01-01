"use client"
import { createContext, useContext, useState } from "react";
import {
  AdminContextInterface,
  AdminProviderProps
} from "../interface/adminContext";

const AdminContext = createContext<AdminContextInterface>(
  {} as AdminContextInterface
);

const useAdminContext = () => {
  return useContext(AdminContext);
}

export default useAdminContext;

const AdminContextProvider = ({ children }: AdminProviderProps) => {
  const [currentMenu, setCurrentMenu] = useState('');
  const [mobNavOpen, setMobNavOpen] = useState(false);
  
  return (
    <AdminContext.Provider value={{
       currentMenu,
       mobNavOpen,
       setMobNavOpen,
       setCurrentMenu 
       }}>
      {children}
    </AdminContext.Provider>
  );
};

export { AdminContext, AdminContextProvider, useAdminContext };