'use client'

import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { signIn } from 'next-auth/react'

import { ROUTES } from '@/shared/constants/routes'



 export type LoginFormData = {
  email: string
  password: string
}

export const login = async(data: LoginFormData) => {
  try {
    await signIn('credentials', {
      ...data, 
      redirect: true,
      callbackUrl: ROUTES.HOME,
    })
  } catch (error) {
    console.log('login error', error);
    
  }
}


export const useLoginForm = () => {

  const router = useRouter()
  const { register, handleSubmit } = useForm<LoginFormData>()

  return {
    register,
    handleSubmit: handleSubmit(data => login(data)),
    errorMessage: '',
    isPending: false,
  }

}