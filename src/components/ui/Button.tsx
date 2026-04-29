import type { ButtonHTMLAttributes, ReactNode } from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/cn";

type Variant = "primary" | "outline" | "ghost";

interface BaseProps {
  variant?: Variant;
  children: ReactNode;
  className?: string;
}

interface LinkButtonProps extends BaseProps {
  to: string;
  href?: never;
  type?: never;
  onClick?: () => void;
}
interface AnchorButtonProps extends BaseProps {
  href: string;
  to?: never;
  type?: never;
  target?: string;
  rel?: string;
  onClick?: () => void;
}
interface NativeButtonProps
  extends BaseProps,
    Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className" | "children"> {
  to?: never;
  href?: never;
}

export type ButtonProps = LinkButtonProps | AnchorButtonProps | NativeButtonProps;

const variantClass: Record<Variant, string> = {
  primary: "btn btn-primary",
  outline: "btn btn-outline",
  ghost: "btn btn-ghost",
};

export function Button(props: ButtonProps) {
  const variant: Variant = props.variant ?? "primary";
  const className = cn(variantClass[variant], props.className);

  if ("to" in props && props.to) {
    return (
      <Link to={props.to} className={className} onClick={props.onClick}>
        {props.children}
      </Link>
    );
  }
  if ("href" in props && props.href) {
    return (
      <a
        href={props.href}
        className={className}
        target={props.target}
        rel={props.rel}
        onClick={props.onClick}
      >
        {props.children}
      </a>
    );
  }
  const { variant: _v, className: _c, children, ...rest } = props as NativeButtonProps;
  void _v;
  void _c;
  return (
    <button {...rest} className={className}>
      {children}
    </button>
  );
}
