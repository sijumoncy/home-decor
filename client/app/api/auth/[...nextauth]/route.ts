import { authenticate } from "@/services/authService"
import NextAuth from "next-auth"
import type { AuthOptions } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"

export const authOptions: AuthOptions = {
  providers: [
    CredentialsProvider({
      id: "credentials",
      name: 'Credentials',
      credentials: {
        username: { label: "username", type: "text" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        if (typeof credentials !== "undefined") {
          const response = await authenticate(credentials.username, credentials.password)
          return response
        } else {
          return null
        }
      }
    })
  ],
  session: { strategy: "jwt" },
  callbacks : {
   async jwt({token, user}) {
    return {...token, ...user}
   },

   async session({session, token, user}) {
    session.user = token
    return session
   }
  }
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }