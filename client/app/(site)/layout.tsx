import type { Metadata } from "next";
import "../globals.scss";
import LayoutWrapper from "./LayoutWrapper";
import { getServerSession } from "next-auth";
import AuthProvider from "@/context/SessionProvider";
import StoreProvider from "@/context/storeProvider";

export const metadata: Metadata = {
  title: "Home Decor App",
  description: "Fullfill your dream home at one place : Home Decor",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession();

  return (
    <html lang="en">
      <body className="">
        <StoreProvider>
          <AuthProvider session={session}>
            <LayoutWrapper>{children}</LayoutWrapper>
          </AuthProvider>
        </StoreProvider>
      </body>
    </html>
  );
}
