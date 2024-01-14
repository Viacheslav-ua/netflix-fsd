'use client'

import { RegisterForm } from "@/features/auth"
import { UiFormPageLayout } from "@/shared/ui/layouts/ui-form-page-layout"

function RegisterPage() {
  return (
    <UiFormPageLayout 
    title="Реєстрація"
    form={<RegisterForm />}
    />
  )
}

export default RegisterPage