"use client"

import { useRouter } from 'next/navigation'
import { BsFillArrowLeftSquareFill } from 'react-icons/bs'

export const UiGoBack = () => {
  const router = useRouter()

  return <BsFillArrowLeftSquareFill 
            onClick={() => router.back()} 
            className="text-white w-4 md:w-10 text-4xl cursor-pointer hover:opacity-80 transition"
            />
}
