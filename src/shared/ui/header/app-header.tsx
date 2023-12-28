'use client'

import clsx from "clsx"
import { ReactNode, FC } from "react"
import Image from "next/image"
import { usePathname, useRouter } from "next/navigation"
import { ROUTES } from "@/shared/constants/routes"
import { UiButton } from "@/shared/ui/ui-button"
import { AppNavbar } from "./app-navbar"



// enum NavbarLinks {
//   [ROUTES.HOME] = 'Головна',
//   MOVIES = 'Фільми',
//   FAVORITES = 'Улюблені',

// }



export type AppHeaderProps = {
  className?: string,
  isAuth?: boolean,
}

export const AppHeader: FC<AppHeaderProps> = ({ className, isAuth, }) => {

  const pathname = usePathname()
  const router = useRouter()

  const handleNavClick = (newPath: string) => {
    console.log('newPath', newPath);

  }


  return (
    // <header className={clsx("px-4 md:px-16 py-4 h-[80px] border-b border-slate-300 bg-white flex justify-between items-center", className)}>
    <header className={clsx("w-full fixed z-20", className)}>
      <div className="px-4 md:px-16 flex items-center justify-between transition duration-500">
        <Image
          src={'./images/logo.svg'}
          width={100}
          height={100}
          className={clsx("h-24 w-36", isAuth && "cursor-pointer")}
          alt="logo" />

        <AppNavbar />

        <UiButton variant="secondary" onClick={() => router.push(ROUTES.AUTH)}>Увійти</UiButton>
      </div>
    </header>
  )
}