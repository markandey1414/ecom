import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'

export default NextAuth({
  providers: [
    // OAuth authentication providers...
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,      // add variable into .env files
      clientSecret: process.env.GOOGLE_SECRET
    }),
  ]
})