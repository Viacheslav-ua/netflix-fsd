import { getServerSession } from 'next-auth/next'
import prisma from '@/shared/utils/prisma'

import { authOptions } from '@/shared/options/auth-options'

export async function getSession() {
  return await getServerSession(authOptions)
}

export async function getCurrentUser() {
  try {
    const session = await getSession()

    if(!session?.user?.email) {
      return null
    }

    const currentUser = await prisma.user.findUnique({
      where: {
        email: session.user.email
      }
    })

    if(!currentUser) {
      return null
    }

    return {
      ...currentUser,
      createdAt: currentUser.createdAt.toISOString(),
      updatedAt: currentUser.updatedAt.toISOString(),
      emailVerified: currentUser?.emailVerified?.toISOString() || null,
    }

  } catch (error: any) {
    throw new Error(error)
  }
}