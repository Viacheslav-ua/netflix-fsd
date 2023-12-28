import React, { FC } from 'react'


type AppBgMainProps = {
  children: React.ReactNode,
  removeBgOnMobile?: boolean,
}

export const AppBgMain: FC<AppBgMainProps> = ({children, removeBgOnMobile}) => {
  return (
    <div className='h-full w-full bg-[url("/images/main-bg.jpg")] bg-no-repeat bg-center bg-fixed bg-cover'>
      <div className={`bg-black h-full w-full ${removeBgOnMobile ? "lg:bg-opacity-50" : "bg-opacity-70"}`}>

       {children}
      </div>
    </div>
  )
}