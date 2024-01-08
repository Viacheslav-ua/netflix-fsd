'use client'

import {signOut} from 'next-auth/react'
import clsx from "clsx"
import { FC } from "react"
import Image from "next/image"
import { usePathname, useRouter } from "next/navigation"
import { ROUTES } from "@/shared/constants/routes"
import { UiButton } from "@/shared/ui/ui-button"
import { Navbar } from "./navbar"
import { UiLogo } from "@/shared/ui/ui-logo"

export type AppHeaderProps = {
  className?: string,
  isAuth?: boolean,
}

export const Header: FC<AppHeaderProps> = ({ className, isAuth, }) => {

  const router = useRouter()
  const pathname = usePathname()
  const isLending = pathname === ROUTES.LANDING

  return (
    <header className={clsx("w-full fixed z-20", className)}>
      <div className="px-4 md:px-16 flex items-center justify-between transition duration-500">
        <UiLogo />
                  
        {isAuth && <Navbar />}

        <div className="flex ml-auto gap-3 items-center">
        {isAuth && <div className="flex gap-3 items-center">
            <Image
              src={'/images/account.svg'}
              width={100}
              height={100}
              className="h-8 w-8 cursor-pointer text-green-500 mr-4"
              alt="avatar" />

            <UiButton variant="secondary" onClick={() => signOut({callbackUrl: ROUTES.LANDING})}>Вийти</UiButton>
          </div>}

          {!isAuth && isLending &&  <UiButton variant="secondary" onClick={() => router.push(ROUTES.LOGIN)}>Увійти</UiButton>}
        </div>


      </div>
    </header>
  )
}