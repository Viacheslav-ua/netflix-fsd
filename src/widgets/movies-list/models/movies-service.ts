import { getCurrentUser } from "@/entities/session/actions"
import { Movie } from "@prisma/client"

export const extendMovies = async (movies: Movie[]) => {

  const currentUser = await getCurrentUser()
  
  return movies.map(movie => {

    return {
      ...movie,
      isFavorite: currentUser?.favoriteIds ? currentUser?.favoriteIds.includes(movie.id) : false
    }
  })
}