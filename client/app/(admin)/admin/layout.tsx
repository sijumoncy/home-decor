import "../../globals.scss";
import { getServerSession } from "next-auth";
import AuthProvider from "@/context/SessionProvider";
import Navbar from "./Navbar";
import { AdminContextProvider } from "@/context/adminContext";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession();

  return (
    <html lang="en">
      <body className="">
        <AuthProvider session={session}>
          <AdminContextProvider>
            <Navbar />
          </AdminContextProvider>
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
