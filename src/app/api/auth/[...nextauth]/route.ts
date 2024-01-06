import NextAuth, { AuthOptions } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import GithubProvider from 'next-auth/providers/github'
import GoogleProvider from 'next-auth/providers/google'
import { PrismaAdapter } from '@next-auth/prisma-adapter'

import prisma from '@/shared/utils/prisma'
import { authorizeUser } from '../service'
import { ENDPOINTS } from '@/shared/constants/endpoints'

export const authOptions: AuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    GithubProvider({
      clientId: process.env.NEXT_AUTH_GITHUB_ID as string,
      clientSecret: process.env.NEXT_AUTH_GITHUB_SECRET as string,
    }),
    GoogleProvider({
      clientId: process.env.NEXT_AUTH_GOOGLE_ID as string,
      clientSecret: process.env.NEXT_AUTH_GOOGLE_SECRET as string,
    }),
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        email:{label: 'email', type: 'email' },
        password:{label: 'password', type: 'password' },
      },
      async authorize(credentials) {
        return await authorizeUser(credentials)
      },
    }),
  ],

  pages: {
    signIn: ENDPOINTS.AUTH, 
  },

  session: { strategy: 'jwt' },
  jwt: { secret: process.env.NEXT_AUTH_JWT_SECRET },
  secret: process.env.NEXT_AUTH_SECRET
}

const handler = NextAuth(authOptions)
export {handler as GET, handler as POST}