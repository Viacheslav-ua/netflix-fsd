'use client'

import { LoginForm } from "@/features/auth"
import { Header } from "@/features/header"
import { UiFormPageLayout } from "@/shared/ui/layouts/ui-form-page-layout"



export function LoginPage() {
  return (
    <UiFormPageLayout 
    title="Увійти"
    header={<Header />}
    form={<LoginForm />}
    />
  )
}