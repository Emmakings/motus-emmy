import NextAuth from "next-auth";
import { MongoDBAdapter } from "@auth/mongodb-adapter";
import clientPromise from "@/library/mongo";
import CredentialsProvider from "next-auth/providers/credentials";
import { verifyPassword } from "@/library/encryption";

const connectToDb = async ( email ) => {
  const client = await clientPromise;
  const MONGO_DB = process.env.MONGO_DB;
  const db = client.db(MONGO_DB);
  const userCollection = db.collection("user");
  const user = await userCollection.findOne({email:email})
  return user
};

const handler = NextAuth({
  adapter: MongoDBAdapter(clientPromise),

  providers: [
    CredentialsProvider({
      name: "Sign In to Motus",

      async authorize(credentials, req) {
      const user = await connectToDb(credentials.email)
      
      const isValid = await verifyPassword(credentials.password, user.password)

      if (!isValid) {
        console.log("Invalid Credential");
      }

      if (!user) {
        console.log("User Not found");
      }

      return user
      },
    }),
  ],

  secret: process.env.NEXTAUTH_SECRET,
//  { callbacks: {
//     async signIn({ user, account, profile, email, credentials }) {
//       return true
//     },
//     async redirect({ url, baseUrl }) {
//       return baseUrl
//     },
//     async session({ session, user, token }) {
//       return session
//     },
//     async jwt({ token, user, account }) {
//       return token
//     }
//   }}
});

export { handler as GET, handler as POST }