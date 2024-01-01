"use client";

import { AppContextProvider } from "@/context/appContext";
import { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

function LayoutWrapper({ children }: { children: ReactNode }) {
  return (
    <AppContextProvider>
        <Navbar />
        {children}
        <Footer />
    </AppContextProvider>
  );
}

export default LayoutWrapper;
