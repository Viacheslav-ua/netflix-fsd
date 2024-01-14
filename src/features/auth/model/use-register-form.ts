'use client'

import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'

import axios from 'axios'
import { login } from './use-login-form'
import { ENDPOINTS } from '@/shared/constants/endpoints'



export type RegisterFormData = {
  email: string
  password: string
  name: string
}


export const useRegisterForm = () => {

  const router = useRouter()
  const { register, handleSubmit } = useForm<RegisterFormData>()

  const registerUser = async(data: RegisterFormData) => {
    try {
      await axios.post(ENDPOINTS.REGISTER, data)
      const {name, ...loginData} = data

      login(loginData)
      
    } catch (error) {
      console.log('register error', error);
      
    }
  }

  return {
    register,
    handleSubmit: handleSubmit(data => registerUser(data)),
    errorMessage: '',
    isPending: false,
  }

}