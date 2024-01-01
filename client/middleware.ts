import { withAuth } from "next-auth/middleware";

export default withAuth({
  callbacks: {
    authorized: ({ req }) => {

      const session = req.cookies.get("next-auth.session-token");
      
      if (session) return true;
      else return false;
    },
  },
  pages: {
    signIn: '/login',
  }
});

export const config = { matcher: ["/shop/:path*"] };