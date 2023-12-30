import { ROUTES } from "@/shared/constants/routes"
import { usePathname } from "next/navigation"


const NavbarLinks = {
  [ROUTES.HOME]: 'Головна',
  [ROUTES.MOVIES]: 'Фільми',
  [ROUTES.FAVORITES]: 'Улюблені',
}

export interface LinkNavbar {
  name: string
  path: string
  isActive: boolean
}

export const useNavbar = (): LinkNavbar[] => {

  const pathname = usePathname()

  const links = Object.entries(NavbarLinks).map(([path, name]) => ({
    name,
    path,
    isActive: path === pathname,
  }))

  return links
}