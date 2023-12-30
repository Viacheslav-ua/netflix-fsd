'use client'

import React from 'react'
import { UiLink } from '@/shared/ui/ui-link'
import { LinkNavbar, useNavbar } from '../model/useNavbar'

export const Navbar = () => {

  const links: LinkNavbar[] = useNavbar()

  return (
    <nav className="flex-row ml-8 gap-6 hidden lg:flex">
          {links.map(link => (
            <UiLink className={link.isActive ? "text-red-500" : "text-green-500"} href={link.path} key={link.path}>
              {link.name}
            </UiLink>
          ))}
    </nav>
  )
}