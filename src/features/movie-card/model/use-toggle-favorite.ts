import { ENDPOINTS } from "@/shared/constants/endpoints"
import axios from "axios"
import { useState } from "react"

export const useToggleFavorite = (movieId: string, isFavorite: boolean) => {

  const [isFavoriteMovie, setIsFavoriteMovie] = useState(isFavorite)

  const toggleFavorite = async () => {
    if(isFavorite) {
      const response = await axios.delete(ENDPOINTS.FAVORITES, { data: movieId })

    }
    const response = await axios.post(ENDPOINTS.FAVORITES, { data: movieId })

    if(response.status === 200) {
      setIsFavoriteMovie((prevIsFavoriteMovie) => !prevIsFavoriteMovie)
    }
    
  }
  
  return { isFavoriteMovie, toggleFavorite }
}
