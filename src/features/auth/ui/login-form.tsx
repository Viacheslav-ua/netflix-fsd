'use client'

import { UiTextField } from "@/shared/ui/ui-text-field"
import { useLoginForm } from "../model/use-login-form"



export const LoginForm = () => {

  const { register } =  useLoginForm()

  return (
    <form className="flex flex-col gap-2">
      <UiTextField inputProps={{type: "text", ...register("email", {required: true})}} label="Ім'я" />
      <UiTextField inputProps={{type: "email", ...register("email", {required: true})}} className="mb-2" label="Email" />
      <UiTextField inputProps={{type: "password", ...register("password", {required: true})}} className="mb-2" label="Пароль" />
    </form>
  )
}
