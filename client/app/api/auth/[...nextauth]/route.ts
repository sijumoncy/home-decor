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
        email: { label: "email", type: "email" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        if (typeof credentials !== "undefined") {
          const response = await authenticate(credentials.email, credentials.password)
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