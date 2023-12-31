'use client'

import { useRouter } from "next/navigation"
import { useForm } from "react-hook-form"


export const useLoginForm = () => {

  const router = useRouter()
  const { register, handleSubmit } = useForm<{email: string, username: string, password: string}>()

  return {
    register,
    handleSubmit,
    errorMessage: '',
    isPending: false,
  }

}