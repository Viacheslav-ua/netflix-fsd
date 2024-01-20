import { FC } from "react"
import { ExtendMovie, MovieCard } from "@/features/movie-card"
import { revalidatePath } from "next/cache"
import { ROUTES } from "@/shared/constants/routes"

type MovieListProps = {
  title:string
  movieData: ExtendMovie[]
}

export const MoviesList: FC<MovieListProps> = async ({title, movieData}) => {

  const revalidateFavorites = async () => {
    "use server"
    revalidatePath(ROUTES.FAVORITES)
  }

  return (
    <div className="px-4 md:px-12 mt-4 space-y-8">
      <p className="text-white md:text-xl lg:text-2xl font-semibold mb-4">{title}</p>
      <div className="grid grid-cols-4 gap-2">
        {movieData.map(movie => (
          
          <MovieCard 
            key={movie.id} 
            movieData={movie}
            revalidateFavorites={revalidateFavorites} 
          />
        ))}
      </div>
    </div>
  )
}
