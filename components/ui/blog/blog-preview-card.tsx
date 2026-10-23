import { ROUTES } from "@/utils/routes";
import { Link } from "../link";
import { H6 } from "../typography/h";
import { P } from "../typography/p";
import { Tag } from "./tag";

export const BlogPreviewCard = (props: {
  slug: string;
  title: string;
  date: string;
  description?: string;
  tags: string[];
  draft: boolean;
}) => {
  return (
    <Link
      href={ROUTES.devLog.post(props.slug)}
      className="p-2 border border-border flex flex-col hover:border-accent hover:bg-muted/30"
    >
      <span className="text-xs text-muted-foreground">{props.date}</span>
      <H6>{props.title}</H6>
      {props.description && (
        <P className="text-muted-foreground">{props.description}</P>
      )}

      {props.tags.length > 0 && (
        <div className="mt-2 flex flex-row gap-2 flex-wrap">
          {props.tags.map((v) => (
            <Tag key={v} tag={v} />
          ))}
        </div>
      )}
    </Link>
  );
};
