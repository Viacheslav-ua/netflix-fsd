import React, { FC } from 'react'
import {AiOutlineCheck, AiOutlinePause} from 'react-icons/ai/'
import { useToggleFavorite } from '../model/use-toggle-favorite'

type FavoriteButton = {
  movieId: string
  isFavorite: boolean,
  revalidateFavorites: () => Promise<void>
}
 
export const FavoriteButton: FC<FavoriteButton> = ({movieId, isFavorite, revalidateFavorites}) => {

  const {isFavoriteMovie, toggleFavorite} = useToggleFavorite(movieId, isFavorite)
  const Icon = isFavoriteMovie ? AiOutlineCheck : AiOutlinePause

  const handleOnClick = () => {
    toggleFavorite()
    revalidateFavorites()
  }

  return (
    <div className="cursor-pointer group/item w-6 h-6 lg:w-10 lg:h-10 bg-white rounded-full 
    flex items-center justify-center hover:bg-green-500" onClick={handleOnClick}>
      <Icon className="text-black text-2xl"/>
    </div>
  )
}
