import NextAuth from "next-auth/next";

declare module "next-auth"{
    interface session {
        user : {
            // properties from apis response
            
        }
    }
}