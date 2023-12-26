import { createContext, useContext, useState } from "react";
import {
  AppContextInterface,
  AppProviderProps
} from "../interface/appContext";

const AppContext = createContext<AppContextInterface>(
  {} as AppContextInterface
);

const useAppContext = () => {
  return useContext(AppContext);
}

export default useAppContext;

const AppContextProvider = ({ children }: AppProviderProps) => {
  const [currentMenu, setCurrentMenu] = useState('');
  const [mobNavOpen, setMobNavOpen] = useState(false);
  
  return (
    <AppContext.Provider value={{
       currentMenu,
       mobNavOpen,
       setMobNavOpen,
       setCurrentMenu 
       }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppContextProvider, useAppContext };