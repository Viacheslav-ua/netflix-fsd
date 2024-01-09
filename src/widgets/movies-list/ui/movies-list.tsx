import { MovieCard } from "@/features/movie-card"
import { extendMovies } from "../models/movies-service"

export const MoviesList = async ({title}: {title: string}) => {

   const moviesExtend = await extendMovies()

  return (
    <div className="px-4 md:px-12 mt-4 space-y-8">
      <p className="text-white md:text-xl lg:text-2xl font-semibold mb-4">{title}</p>
      <div className="grid grid-cols-4 gap-2">
        {moviesExtend.map(movie => (
          
          <MovieCard key={movie.id} movieData={movie} />
        ))}
      </div>
    </div>
  )
}
