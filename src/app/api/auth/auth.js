import NextAuth from "next-auth"
import Sendgrid from "next-auth/providers/sendgrid"
 
export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [Sendgrid],
})