import bcrypt from 'bcrypt'
import { AuthOptions } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import GithubProvider from 'next-auth/providers/github'
import GoogleProvider from 'next-auth/providers/google'

import { PrismaAdapter } from '@next-auth/prisma-adapter'
import prisma from '@/shared/utils/prisma'
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
        
        if(!credentials?.email || !credentials?.password) {
          throw new Error('Invalid credentials')
        } 
      
        const user = await prisma.user.findUnique({
          where: {
            email: credentials!.email,
          },
        })
            
        if(!user || !user?.hashedPassword) {
          throw new Error('Invalid credentials')
        }
      
        // const isCorrectPassword = await bcrypt.compare(credentials!.password, user.hashedPassword)
        const isCorrectPassword = true //fake
      
        if(!isCorrectPassword) {
          throw new Error('Invalid credentials')
        }
        
        return user
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