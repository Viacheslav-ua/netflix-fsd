'use client'

import clsx from "clsx"
import { FC } from "react"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { ROUTES } from "@/shared/constants/routes"
import { UiButton } from "@/shared/ui/ui-button"
import { Navbar } from "./navbar"

export type AppHeaderProps = {
  className?: string,
  isAuth?: boolean,
}

export const Header: FC<AppHeaderProps> = ({ className, isAuth, }) => {

  const router = useRouter()

  const handleNavClick = (newPath: string) => {
    console.log('newPath', newPath);

  }


  return (
    // <header className={clsx("px-4 md:px-16 py-4 h-[80px] border-b border-slate-300 bg-white flex justify-between items-center", className)}>
    <header className={clsx("w-full fixed z-20", className)}>
      <div className="px-4 md:px-16 flex items-center justify-between transition duration-500">
        <Image
          src={'/images/logo.svg'}
          width={100}
          height={100}
          className={clsx("h-24 w-36", isAuth && "cursor-pointer")}
          alt="logo" />

        <Navbar />

        <div className="flex-row ml-auto gap-7 items-center">
          <div>
            <Image
              src={'/images/devbro.png'}
              width={30}
              height={30}
              alt="avatar" />
          </div>
        </div>

        {isAuth && <UiButton variant="secondary" onClick={() => { }}>Вийти</UiButton>}
        {!isAuth && <UiButton variant="secondary" onClick={() => router.push(ROUTES.AUTH)}>Увійти</UiButton>}
      </div>
    </header>
  )
}