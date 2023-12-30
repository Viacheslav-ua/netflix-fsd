import { ROUTES } from "@/shared/constants/routes"
import { usePathname } from "next/navigation"


const NavbarLinks = {
  [ROUTES.HOME]: 'Головна',
  [ROUTES.MOVIES]: 'Фільми',
  [ROUTES.FAVORITES]: 'Улюблені',
}

export interface LinkNavbar {
  label: string
  path: string
  isActive: boolean
}

export const useNavbar = (): LinkNavbar[] => {

  const pathname = usePathname()

  const links = Object.entries(NavbarLinks).map(([path, label]) => ({
    label,
    path,
    isActive: path === pathname,
  }))

  return links
}