import { connectMongo } from "@/app/lib/mongodb";
import { User } from "@/app/models/User";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";
import GoogleProvider from "next-auth/providers/google";
import { MongoDBAdapter } from "@auth/mongodb-adapter";
import clientPromise from "@/app/lib/mongoConnect";


export const authOptions = {
    secret: process.env.NEXTAUTH_SECRET,
    adapter: MongoDBAdapter(clientPromise),
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET
        }),
        CredentialsProvider({
            name: "Credentials",
            // Credentials: {},

            credentials: {
                username: {
                    label: String,
                    type: String,
                    placeholder: String
                },
                password: { label: String, type: String },
            },
            async authorize(credentials, req) {
                const email = credentials?.email;
                const password = credentials?.password;

                try {
                    await connectMongo();
                    const user = await User.findOne({ email });
                    const passwordOk = user && bcrypt.compareSync(password, user.password);
                    console.log({ passwordOk });

                    if (passwordOk) {
                        return user;
                    }

                    return null;

                } catch (error) {
                    console.log(error)
                }

            },
        }),
    ],
    session: {
        strategy: "jwt"
    }

}


const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };