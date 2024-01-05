import bcrypt from 'bcrypt'

import prisma from '@/shared/utils/prisma'

export async function authorizeUser(credentials:  Record<"email" | "password", string> | undefined) {

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

  const isCorrectPassword = await bcrypt.compare(credentials!.password, user.hashedPassword)

  if(!isCorrectPassword) {
    throw new Error('Invalid credentials')
  }
  
  return user
}
