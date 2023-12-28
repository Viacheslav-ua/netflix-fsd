'use client'

import clsx from "clsx"
import { ReactNode, FC } from "react"
import Image from "next/image"
import { usePathname, useRouter } from "next/navigation"
import { ROUTES } from "../constants/routes"
import { UiButton } from "./ui-button"



enum NavbarLinks {
  HOME = 'Головна',
  MOVIES = 'Фільми',
  FAVORITES = 'Улюблені',

}

export type UiHeaderProps = {
  className?: string,
  isAuth?: boolean,
}

export const UiHeader: FC<UiHeaderProps> = ({ className, isAuth, }) => {

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

        {/* <button className="flex items-center bg-red-600 py-1 px-4 text-white hover:bg-red-700 transition" onClick={() => router.push(ROUTES.AUTH)}>Увійти</button> */}
        <UiButton variant="secondary">Увійти</UiButton>
      </div>
    </header>
  )
}