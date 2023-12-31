import prisma from '@/shared/utils/prisma'
import { getCurrentUser } from '../session/actions'


export async function getBillboardVideo() {
  try {
    const movieCount = await prisma.movie.count()
    const randomIndex = Math.floor(Math.random() * movieCount)

    const randomMovie = await prisma.movie.findMany({
      take: 1,
      skip: randomIndex,
    })

    return randomMovie[0]

  } catch (error: any) {
    throw new Error(error)
  }
}

export async function getAllMovies() {
  try {
    return await prisma.movie.findMany()
    
    } catch (error: any) {
    throw new Error(error)
  }
}

export async function getAllFavorites() {
  try {
    const currentUser = await getCurrentUser()

    return await prisma.movie.findMany({
      where: {
        id: {
          in: currentUser?.favoriteIds
        }
      }
    })

    } catch (error: any) {
    throw new Error(error)
  }
}