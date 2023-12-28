import clsx from "clsx"
import { ButtonHTMLAttributes, FC } from "react"

type UiButtonVariant = "primary" | "secondary" | "outlined"

export type UiButtonProps = {
  variant: UiButtonVariant;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const UiButton: FC<UiButtonProps> = ({ className, variant, ...props }) => {
  return (
    <button {...props} className={clsx(className, "px-4 h-9 rounded cursor-pointer flex gap-2 items-center justify-center transition-all", {
      primary: "text-white bg-teal-500 hover:bg-teal-600 disabled:opacity-50 shadow-teal-500/30",
      secondary: "text-white bg-rose-600 hover:bg-rose-700 disabled:opacity-50 shadow-rose-500/30",
      outlined: "border border-slate-300 bg-slate-200 shadow-md hover:border-slate-400 disabled:opacity-50"
    }[variant])} />
  );
}
