import { getAllFavorites } from '@/entities/movie'
import { ExtendMovie } from '@/features/movie-card'
import { MoviesList, extendMovies } from '@/widgets/movies-list'
import { Movie } from '@prisma/client'

export const FavoritesPage = async () => {

  const movies: Movie[] = await getAllFavorites()
  const movieData: ExtendMovie[] = await extendMovies(movies)

  return (
    <div className='pb-40 pt-72'>
      <MoviesList title="Улюблені Фільми" movieData={movieData} />
    </div>
  )
}