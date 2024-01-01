import "../../globals.scss";
import { getServerSession } from "next-auth";
import AuthProvider from "@/context/SessionProvider";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession();

  return (
    <html lang="en">
      <body className="">
        <AuthProvider session={session}>{children}</AuthProvider>
      </body>
    </html>
  );
}
