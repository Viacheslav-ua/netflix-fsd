import { getAllMovies } from "@/entities/movie/actions"
import { getCurrentUser } from "@/entities/session/actions"

export const extendMovies = async () => {

  const currentUser = await getCurrentUser()
  const movies = await getAllMovies()

  return movies.map(movie => {

    return {
      ...movie,
      isFavorite: currentUser?.favoriteIds ? currentUser?.favoriteIds.includes(movie.id) : false
    }
  })
}