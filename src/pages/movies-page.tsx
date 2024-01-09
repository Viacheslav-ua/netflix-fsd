import { MoviesList } from '@/widgets/movies-list'

export const MoviesPage = async () => {

  // const movies = await getAllMovies()

  return (
    <div className='pb-40 pt-72'>
      <MoviesList title="Фільми" />
    </div>
  )
}
