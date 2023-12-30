import React, { FC } from 'react'


type UiBgMainProps = {
  children: React.ReactNode,
  removeBgOnMobile?: boolean,
}

export const UiBgMain: FC<UiBgMainProps> = ({children, removeBgOnMobile}) => {
  return (
    <div className='h-full w-full bg-[url("/images/main-bg.jpg")] bg-no-repeat bg-center bg-fixed bg-cover'>
      <div className={`bg-black h-full w-full ${removeBgOnMobile ? "lg:bg-opacity-50" : "bg-opacity-70"}`}>

       {children}
      </div>
    </div>
  )
}