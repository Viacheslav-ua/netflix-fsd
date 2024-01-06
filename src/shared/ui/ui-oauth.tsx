import React, { FC, HTMLAttributes } from 'react'
import clsx from "clsx"


type UiOauthProps = {
  children: React.ReactNode,
  className?: string,
  removeBgOnMobile?: boolean,
}

export type UiOAuthProps = {} & HTMLAttributes<HTMLDivElement>

export const UiOAuth: FC<UiOAuthProps> = ({className, ...props}) => {
  return (
    
      <div {...props} className={clsx("w-10 h-10 bg-white rounded-full flex items-center", 
      "justify-center cursor-pointer hover:opacity-50 transition", className)} />

  
  )
}