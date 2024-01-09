import { getAllFavorites } from '@/entities/movie/actions'

export const FavoritesPage = async () => {

  const favorites = await getAllFavorites()

  return (
    <div className='pb-40 pt-72'>
      <MoviesList title="Улюблені Фільми" movies={favorites} />
    </div>
  )
}