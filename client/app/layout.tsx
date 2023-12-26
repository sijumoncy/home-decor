import type { Metadata } from "next";
import "./globals.scss";
import LayoutWrapper from "./LayoutWrapper";

export const metadata: Metadata = {
  title: "Home Decor App",
  description: "Fullfill your dream home at one place : Home Decor",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="">
        <LayoutWrapper>{children}</LayoutWrapper>
      </body>
    </html>
  );
}
