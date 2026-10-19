import { ArrowSquareOutIcon } from "@phosphor-icons/react/ssr";
import { cn } from "cn";
import { ComponentProps } from "react";

export const ExternalLink = ({
  label,
  hasIcon = true,
  icon: Icon,
  ...props
}: Omit<ComponentProps<"a">, "children"> & {
  icon?: React.ReactNode;
  href: string;
  label: string;
  hasIcon?: boolean;
}) => (
  <a
    {...props}
    className={cn(
      "inline font-semibold text-accent hover:underline underline-offset-4",
      props.className,
    )}
    href={props.href}
    {...(props.href.startsWith("http") && {
      target: "_blank",
      rel: "noopener noreferrer",
    })}
  >
    {Icon && Icon}
    <span className={cn(hasIcon && "mr-1")}>{label}</span>
    {hasIcon && (
      <ArrowSquareOutIcon className="inline" size={16} weight="fill" />
    )}
  </a>
);
