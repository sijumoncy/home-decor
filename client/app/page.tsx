"use client";

import { AppContextProvider } from "@/context/appContext";
import Navbar from "./Navbar";

export default function Home() {
  return (
    <main className="main">
      <AppContextProvider>
        <Navbar />
        Home Decor
      </AppContextProvider>
    </main>
  );
}
