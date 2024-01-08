import clsx from "clsx";
import Link from "next/link"

export type UiLinkProps = {} & Parameters<typeof Link>[0];

export function UiLink({className, ...props}: UiLinkProps) {

  return (
  <Link {...props} className={clsx("p-1 text-teal-600 transition", className)} />
  );
}