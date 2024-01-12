import { ROUTES } from "@/shared/constants/routes"
import { usePathname } from "next/navigation"


export function useBgMain() {

  const pathname = usePathname()
  const isMoviesPath = pathname === ROUTES.MOVIES
  const isFavoritesPath = pathname === ROUTES.FAVORITES

  return  isMoviesPath || isFavoritesPath
}