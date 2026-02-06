import clsx from "clsx";
import type {
  ButtonHTMLAttributes,
} from "react";

export type Variant = "primary" | "outlined"

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
};

const variantClasses: Record<Variant, string> = {
  primary: "bg-white hover:bg-gray-300 text-black",
  outlined: "hover:bg-white/10 text-gray-100 outline outline-white/20",
};

function Button({ variant = "primary", children, className = "" }: Props) {
  return (
    <button className={clsx(
      "px-3 py-2 rounded cursor-pointer duration-200",
      variantClasses[variant],
      className,
    )}>
      {children}
    </button>
  );
}

export default Button;
