import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials";
import prisma from "@lib/prisma";

const handler = NextAuth({
  // Configure one or more authentication providers
  providers: [
    CredentialsProvider({
        name: "Credentials",
        credentials: {},

        async authorize(credentials, req) {
          
            const { username, password } = credentials
            
            if (!username || !password) {
                throw new Error("Missing username or password");
            }

            const user = await prisma.user.findUnique({ where: {name: username}})
            console.log(user)
            if (!user || !(password === user.password)) {
                throw new Error("Invalid username or password");
            }
            return user;
        }
      })
  ],
  callbacks: {
    async session({ session }) {
      const sessionUser = await prisma.user.findUnique({
        where: {
          email: session.user.email
        }
      })
      session.user.id = sessionUser.id.toString()
      return session
  },
  },
  secret: process.env.NEXTAUTH_SECRET,
})

export { handler as GET, handler as POST }