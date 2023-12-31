'use client'

import { UiTextField } from "@/shared/ui/ui-text-field"
import { useLoginForm } from "@/features/auth/model/use-login-form"
import { ROUTES } from "@/shared/constants/routes"
import { UiButton } from "@/shared/ui/ui-button"
import { UiLink } from "@/shared/ui/ui-link"

import { FaGoogle, FaGithub } from 'react-icons/fa'



export const LoginForm = () => {

  const { register, handleSubmit, isPending, errorMessage } =  useLoginForm()

  return (
    <form className="flex flex-col gap-2" /*onSubmit={handleSubmit}*/>
      <UiTextField inputProps={{type: "text", ...register("email", {required: true})}} label="Ім'я" />
      <UiTextField inputProps={{type: "email", ...register("email", {required: true})}} className="mb-2" label="Email" />
      <UiTextField inputProps={{type: "password", ...register("password", {required: true})}} className="mb-2" label="Пароль" />
    
      <UiButton disabled={isPending} variant="secondary">Увійти</UiButton>
      <UiLink href={ROUTES.REGISTER} className="font-bold">Зареєструватись</UiLink>

      {errorMessage && <div className="text-rose-500">{errorMessage}</div>}

      {/* account */}
      <div className="flex-row items-center gap-4">
        <div className="w-10 h-10 bg-white">
          <FaGoogle size={32} />
        </div>
      </div>
    </form>
  )
}
