import { getAllMovies } from '@/entities/movie'
import { ExtendMovie } from '@/features/movie-card'
import { MoviesList } from '@/widgets/movies-list'
import { extendMovies } from '@/widgets/movies-list'
import { Movie } from '@prisma/client'

const MoviesPage = async () => {
  
  const movies: Movie[] = await getAllMovies()
  const movieData: ExtendMovie[] = await extendMovies(movies)
  
  return (
    <div className='pb-40 pt-72'>
      <MoviesList title="Фільми" movieData={movieData} />
    </div>
  )
}

export default MoviesPage