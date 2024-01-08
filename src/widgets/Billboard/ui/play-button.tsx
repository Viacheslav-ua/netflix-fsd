"use client"

import { ROUTES } from "@/shared/constants/routes"
import { useRouter } from "next/navigation"
import { FaPlay as PlayIcon } from "react-icons/fa"


export const PlayButton = ({movieId}: {movieId: string}) => {

const router = useRouter()

  return (
    <button 
    onClick={() => router.push(ROUTES.WATCH + movieId)}
    className="bg-white rounded-md py-1 md:py-2 px-2 md:px-4 w-auto text-xs lg:text-lg font-semibold 
      flex items-center hover:bg-neutral-300 transition"
    >
      <PlayIcon className="w-4 md:w-7 text-black mr-1" /> Дивитись
    </button>
  )
}
