'use client'

import { UiTextField } from "@/shared/ui/ui-text-field"
import { useRegisterForm } from "../model/use-register-form"
import { ROUTES } from "@/shared/constants/routes"
import { UiButton } from "@/shared/ui/ui-button"
import { UiLink } from "@/shared/ui/ui-link"


export const RegisterForm = () => {

  const { register, handleSubmit, isPending, errorMessage } =  useRegisterForm()

  return (
    <form className="flex flex-col gap-2 justify-center" onSubmit={handleSubmit}>
      <UiTextField inputProps={{type: "text", ...register("name", {required: true})}} labelProps={{className: "text-white"}} className="mb-2" label="Ім'я" />
      <UiTextField inputProps={{type: "email", ...register("email", {required: true})}} labelProps={{className: "text-white"}} className="mb-2" label="Електронна пошта" />
      <UiTextField inputProps={{type: "password", ...register("password", {required: true})}} labelProps={{className: "text-white"}} className="mb-8" label="Пароль" />
    
      <UiButton disabled={isPending} variant="secondary">Зареєструватись</UiButton>
      
      {errorMessage && <div className="text-rose-500">{errorMessage}</div>}

      <p className="text-slate-400 text-sm">
        Вже зареєструвались? 
          <UiLink href={ROUTES.LOGIN} className="text-white">Увійти</UiLink>
        </p>
        
    </form>
  )
}
