"use client";

import { AppContextProvider } from "@/context/appContext";
import { ReactNode } from "react";
import Navbar from "./Navbar";

function LayoutWrapper({ children }: { children: ReactNode }) {
  return (
    <AppContextProvider>
      <Navbar />
      {children}
    </AppContextProvider>
  );
}

export default LayoutWrapper;
