'use client'

import { LoginForm } from "@/features/auth"
import { UiFormPageLayout } from "@/shared/ui/layouts/ui-form-page-layout"

export function LoginPage() {
  return (
    <UiFormPageLayout 
    title="Увійти"
    form={<LoginForm />}
    />
  )
}