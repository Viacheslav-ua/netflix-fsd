import clsx from "clsx";
import {InputHTMLAttributes, PropsWithRef, useId} from "react";

export type UiTextFieldProps = {
  className?: string
  label?: string
  error?: string
  inputProps?: PropsWithRef<InputHTMLAttributes<HTMLInputElement>>
}

export function UiTextField({className, error, label, inputProps} : UiTextFieldProps) {

  const id = useId()

  return (
    <div className={clsx(className, "flex flex-col gap-1")}>
      {label && <label className="block" htmlFor={id}>{label}</label>}
      <input {...inputProps} id={id} className={clsx(
        inputProps?.className, 
        "rounded border px-2 h-10 border-slate-300 focus:border-t-teal-600 outline-none",
      )} />
      {error && <div className="text-rose-400 text-sm">{error}</div>}
      
    </div>
  );
}