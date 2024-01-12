"use client"

import React, { FC } from 'react'
import clsx from "clsx"
import { useBgMain } from '../model/use-bg-main'


type BgMainProps = {
  children: React.ReactNode,
  className?: string,
}

export const BgMain: FC<BgMainProps> = ({ children, className }) => {
  
  const darkBg = useBgMain()

  return (
    <div className={'h-full w-full bg-[url("/images/main-bg.jpg")] bg-no-repeat bg-center bg-fixed bg-cover'}>
      <div className={clsx("bg-black h-full w-full", darkBg ? "lg:bg-opacity-90" : "bg-opacity-60", className)}>

       {children}
      </div>
    </div>
  )
}