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

export async function getMovieById(movieId: string) {
  try {
    return await prisma.movie.findUnique({
      where:{
        id: movieId
      }
    })
  } catch {
    return null
  }
} 

export async function addMovieToFavorite(email: string, movieId: string) {
  try {

    const movie = await getMovieById(movieId)
    if(!movie) throw new Error("Movie not found")

    return await prisma.user.update({
      where: {
        email: email,
      },

      data: {
        favoriteIds:{
          push: movieId,
        }
      }
    })

  } catch (error: any){

    return new Error(error)

  }
} 