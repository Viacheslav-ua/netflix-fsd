import React, { FC } from 'react'
import clsx from "clsx"


type UiBgMainProps = {
  children: React.ReactNode,
  className?: string,
  removeBgOnMobile?: boolean,
}

export const UiBgMain: FC<UiBgMainProps> = ({children, className, removeBgOnMobile}) => {
  return (
    <div className={'h-full w-full bg-[url("/images/main-bg.jpg")] bg-no-repeat bg-center bg-fixed bg-cover'}>
      <div className={clsx("bg-black h-full w-full", removeBgOnMobile ? "lg:bg-opacity-50" : "bg-opacity-70", className)}>

       {children}
      </div>
    </div>
  )
}