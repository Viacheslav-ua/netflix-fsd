'use client'

import { RegisterForm } from "@/features/auth"
import { Header } from "@/features/header"
import { UiFormPageLayout } from "@/shared/ui/layouts/ui-form-page-layout"



export function RegisterPage() {
  return (
    <UiFormPageLayout 
    title="Реєстрація"
    header={<Header />}
    form={<RegisterForm />}
    />
  )
}