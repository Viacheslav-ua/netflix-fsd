import NextAuth from 'next-auth'
import { authOptions } from '@/shared/options/auth-options'

const handler = NextAuth(authOptions)
export {handler as GET, handler as POST}