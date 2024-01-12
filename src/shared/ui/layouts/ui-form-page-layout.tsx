import { ReactNode } from "react";

export function UiFormPageLayout({ form, title }: { header?: ReactNode, form?: ReactNode, title: string }) {

  return (
    <>
      <main className="flex flex-col pt-24 min-h-screen">
        <div className="rounded-xl bg-black/70 px-14 py-8 pb-16 w-full max-w-[400px] self-center">
          <h1 className="text-2xl text-white mb-6">{title}</h1>
          {form}
        </div>
      </main>
    </>
  )
}