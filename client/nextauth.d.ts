import NextAuth from "next-auth/next";

interface IAPIUserResp {
    accessToken : string,
    email : string,
    username : string;
    name : string;
    _id : string;
    isAdmin : string;   
}

declare module "next-auth"{
    interface Session extends DefaultSession {
        user? : IAPIUserResp
    }
}