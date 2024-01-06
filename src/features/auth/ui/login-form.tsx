'use client'
import { signIn } from 'next-auth/react'
import { FaGoogle, FaGithub } from 'react-icons/fa'

import { UiTextField } from "@/shared/ui/ui-text-field"
import { useLoginForm } from "@/features/auth/model/use-login-form"
import { ROUTES } from "@/shared/constants/routes"
import { UiButton } from "@/shared/ui/ui-button"
import { UiLink } from "@/shared/ui/ui-link"
import { UiOAuth } from "@/shared/ui/ui-oauth"


export const LoginForm = () => {
  // const router = useRouter()

  const { register, handleSubmit, isPending, errorMessage } =  useLoginForm()

  // const signInGoogle = async () => {
  //   await signIn('github', {callbackUrl: "/home"})
  // }

  // const signInGoogle = async () => {
  //   await signIn('github', {callbackUrl: "/home"})
  // }

  return (
    <form className="flex flex-col gap-2 justify-center" onSubmit={handleSubmit}>
      <UiTextField inputProps={{type: "email", ...register("email", {required: true})}} className="mb-2" label="Електронна пошта" />
      <UiTextField inputProps={{type: "password", ...register("password", {required: true})}} className="mb-8" label="Пароль" />
    
      <UiButton disabled={isPending} variant="secondary">Увійти</UiButton>
      
      {errorMessage && <div className="text-rose-500">{errorMessage}</div>}

      {/* account */}
      <div className="flex items-center justify-center py-6 gap-4">
        <UiOAuth onClick={() => signIn('google', {callbackUrl: ROUTES.HOME})}>
          <FaGoogle size={32} />
        </UiOAuth>

        <UiOAuth onClick={() => signIn('github', {callbackUrl: ROUTES.HOME})}>
          <FaGithub size={32} />
        </UiOAuth>
      </div>

      <p className="text-slate-400 text-sm">
        В перше на Netflix? 
          <UiLink href={ROUTES.REGISTER} className="text-white">Зареєструватись</UiLink>
        </p>
        
    </form>
  )
}
