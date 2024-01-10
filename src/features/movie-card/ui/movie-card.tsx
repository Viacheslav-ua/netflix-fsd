"use client"

import { FC } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import { Movie } from "@prisma/client"
import { BsFillPlayCircleFill as PlayIcon } from "react-icons/bs"
import { ROUTES } from "@/shared/constants/routes"
import { FavoriteButton } from "./favorite-button"

export type ExtendMovie = Movie & { isFavorite: boolean }

type MovieCardProps = {
  movieData: ExtendMovie
}

export const MovieCard: FC<MovieCardProps> = ({ movieData }) => {

  const router = useRouter()

  return (
    <>
      <div className="group bg-zinc-900 col-span-1 relative h-[12vw]" >

        <Image
          fill
          sizes="auto"
          src={movieData.thumbnailUrl}
          alt="Movie"
          draggable={false}
          className="object-cover transition duration-200 shadow-xl rounded-md group-hover:opacity-90 
        sm:group-hover:opacity-0 delay-300 w-full h-[12vh]"
        />

        <div
          className="opacity-0 absolute top-0 transition duration-500 z-10 invisible sm:visible 
          delay-100 w-full scale-0 group-hover:-translate-y-[6vh] group-hover:translate-x-[2vw] 
          group-hover:scale-110 group-hover:opacity-100"
        >
          <Image
            width={400}
            height={100}
            src={movieData.thumbnailUrl}
            alt="Movie"
            draggable={false}
            className="object-cover shadow-xl rounded-t-md w-full h-[12vh]"
          />
          <div className="z-10 bg-zinc-800 p-2 lg:p-4 absolute w-full transition shadow-md rounded-b-md">
            <div className="flex items-center gap-3">
              <PlayIcon
                onClick={() => router.push(ROUTES.WATCH + movieData.id)}
                className="cursor-pointer w-6 h-6 lg:w-10 lg:h-10 rounded-full flex justify-center
                items-center transition text-white hover:text-red-500"
              />
              <FavoriteButton movieId={movieData.id} isFavorite={movieData.isFavorite} />
            </div>
            <div className="flex mt-4 gap-2 items-center">
              Тривалість <p className="text-white text-[10px] lg:text-sm">{movieData.duration}</p>
            </div>
            <div className="flex mt-4 gap-2 items-center">
              Жанр <p className="text-white text-[10px] lg:text-sm">{movieData.genre}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
