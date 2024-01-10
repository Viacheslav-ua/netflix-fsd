import React, { FC } from 'react'
import {AiOutlineCheck, AiOutlinePause} from 'react-icons/ai/'
import { useToggleFavorite } from '../model/use-toggle-favorite'

type FavoriteButton = {
  movieId: string
  isFavorite: boolean
}
 
export const FavoriteButton: FC<FavoriteButton> = ({movieId, isFavorite}) => {

  const {isFavoriteMovie, toggleFavorite} = useToggleFavorite(movieId, isFavorite)
  const Icon = isFavoriteMovie ? AiOutlineCheck : AiOutlinePause



  return (
    <div className="cursor-pointer group/item w-6 h-6 lg:w-10 lg:h-10 bg-white rounded-full 
    flex items-center justify-center hover:bg-green-500" onClick={toggleFavorite}>
      <Icon className="text-black text-2xl"/>
    </div>
  )
}
