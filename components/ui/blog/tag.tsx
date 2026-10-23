import { Link } from "@/components/ui/link";
import { ROUTES } from "@/utils/routes";
import { cn } from "cn";

const baseClasses =
  "p-0.5 px-1 border text-xs border-tertiary/50 text-muted-foreground";

const interactiveClasses =
  "select-none outline-none hover:border-accent focus-visible:border-accent";

const activeClasses = "border-accent text-accent";

type Props = { tag: string };

export const Tag = ({
  tag,
  className,
  ...props
}: React.ComponentPropsWithRef<"span"> & Props) => (
  <span {...props} className={cn(baseClasses, className)}>
    {tag}
  </span>
);

export const TagLink = (props: Props) => (
  <Link
    href={ROUTES.devLog.tag(props.tag)}
    className={cn(baseClasses, interactiveClasses)}
  >
    {props.tag}
  </Link>
);

export const TagButton = ({
  tag,
  active,
  className,
  ...props
}: React.ComponentPropsWithRef<"button"> & Props & { active?: boolean }) => (
  <button
    type="button"
    aria-pressed={active}
    {...props}
    className={cn(
      baseClasses,
      interactiveClasses,
      active && activeClasses,
      className,
    )}
  >
    {tag}
  </button>
);
