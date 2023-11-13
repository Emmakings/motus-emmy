import NextAuth from "next-auth";
import { MongoDBAdapter } from "@auth/mongodb-adapter";
import clientPromise from "@/library/mongo";
import CredentialsProvider from "next-auth/providers/credentials";

// For more information on each option (and a full list of options) go to
// https://authjs.dev/reference/providers/oauth
export default NextAuth({
  adapter: MongoDBAdapter(clientPromise),

  providers: [
    CredentialsProvider({
      name: "Sign In to Motus",
      credentials: {
        username: { label: "email", type: "text", placeholder: "Enter your email" },
        password: { label: "Password", type: "password" },
      },
      
      async authorize(credentials, req) {
        const res = await fetch("/users", {
          method: "POST",
          body: JSON.stringify(credentials),
          headers: { "Content-Type": "application/json" },
        });
        const user = await res.json();
        if (res.ok && user) {
          return user;
        }
        return null;
      },
    }),
  ],
});
