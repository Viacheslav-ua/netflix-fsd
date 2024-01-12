import { getMovieById } from '@/entities/movie'
import { UiGoBack } from '@/shared/ui/ui-go-back'

type WatchParams = {
  movieId: string

}

export const Watch = async ({params}: {params: WatchParams}) => {

  const movie = await getMovieById(params.movieId)
  if(!movie) throw new Error("Movie not found")

  return (
    <div className="h-screen w-screen bg-black ">
      <nav className="fixed w-full p-4 z-10 flex items-center gap-8 bg-black bg-opacity-70">
        <UiGoBack />
        <p className="text-white text-xl md:text-3xl font-bold">
          <span className="font-light ">
            Перегляд: 
          </span>
          {movie?.title}
        </p>
      </nav>
      <video 
      src={movie?.videoUrl}
      className="w-full h-full"
      autoPlay
      controls
      ></video>
    </div>
  )
}