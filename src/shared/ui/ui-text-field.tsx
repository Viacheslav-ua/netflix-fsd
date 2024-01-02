import clsx from "clsx";
import {InputHTMLAttributes, PropsWithRef, useId} from "react";

export type UiTextFieldProps = {
  className?: string
  label?: string
  error?: string
  inputProps?: PropsWithRef<InputHTMLAttributes<HTMLInputElement>>
  labelProps?: PropsWithRef<InputHTMLAttributes<HTMLLabelElement>>
}

export function UiTextField({className, error, label, inputProps, labelProps} : UiTextFieldProps) {

  const id = useId()

  return (
    <div className={clsx(className, "flex flex-col gap-1")}>
      {label && <label {...labelProps} className={clsx(
        "text-zinc-200", 
        labelProps?.className
        )} htmlFor={id}>{label}</label>}

      <input {...inputProps} id={id} className={clsx(
        inputProps?.className, 
        "rounded border px-2 h-9 border-slate-300",
      )} />
      {error && <div className="text-rose-400 text-sm">{error}</div>}
      
    </div>
  );
}