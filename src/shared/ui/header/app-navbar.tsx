import React from 'react'
import { ROUTES } from "@/shared/constants/routes"
import { UiLink } from '@/shared/ui/ui-link'

const NavbarLinks = {
  [ROUTES.HOME]: 'Головна',
  [ROUTES.MOVIES]: 'Фільми',
  [ROUTES.FAVORITES]: 'Улюблені',
}

export const AppNavbar = () => {
  return (
    <nav className="flex-row ml-8 gap-6 hidden lg:flex">
          {Object.entries(NavbarLinks).map(([path, name]) => (
            <UiLink href={path} key={path}>{name}</UiLink>
          ))}
    </nav>
  )
}

