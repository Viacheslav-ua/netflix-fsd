'use client'

import { UiTextField } from "@/shared/ui/ui-text-field"
import { useLoginForm } from "@/features/auth/model/use-login-form"
import { ROUTES } from "@/shared/constants/routes"
import { UiButton } from "@/shared/ui/ui-button"
import { UiLink } from "@/shared/ui/ui-link"

import { FaGoogle, FaGithub } from 'react-icons/fa'



export const RegisterForm = () => {

  const { register, handleSubmit, isPending, errorMessage } =  useLoginForm()

  return (
    <form className="flex flex-col gap-2 justify-center" /*onSubmit={handleSubmit}*/>
      <UiTextField inputProps={{type: "text", ...register("email", {required: true})}} labelProps={{className: "text-white"}} className="mb-2" label="Ім'я" />
      <UiTextField inputProps={{type: "email", ...register("email", {required: true})}} labelProps={{className: "text-white"}} className="mb-2" label="Електронна пошта" />
      <UiTextField inputProps={{type: "password", ...register("password", {required: true})}} labelProps={{className: "text-white"}} className="mb-8" label="Пароль" />
    
      <UiButton disabled={isPending} variant="secondary">Зареєструватись</UiButton>
      
      {errorMessage && <div className="text-rose-500">{errorMessage}</div>}

      {/* account */}
      {/* <div className="flex items-center justify-center py-6 gap-4">
        <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center pr-[1px]
         cursor-pointer hover:opacity-50 transition"
         onClick={() => console.log('Google sign-in')}
         >
          <FaGoogle size={32} />
        </div>

        <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center pl-[1px] pb-[1px]
         cursor-pointer hover:opacity-50 transition"
         onClick={() => console.log('GitHub sign-in')}
         >
          <FaGithub size={32} />
        </div>
      </div> */}
      <p className="text-slate-400 text-sm">
        Вже зареєструвались? 
          <UiLink href={ROUTES.LOGIN} className="text-white">Увійти</UiLink>
        </p>
        
    </form>
  )
}
