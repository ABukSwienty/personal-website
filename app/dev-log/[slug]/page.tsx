import type { Metadata } from "next";

import { notFound } from "next/navigation";
import { ArrowLeftIcon } from "@phosphor-icons/react/ssr";
import { Page } from "@/components/layouts/page";
import { Markdown } from "@/components/ui/markdown";
import { H1 } from "@/components/ui/typography/h";
import { P } from "@/components/ui/typography/p";
import { TagLink } from "@/components/ui/blog/tag";
import { getMd, getMdFiles } from "@/utils/md";
import { DEV_LOG_DIR } from "../constants";
import { Link } from "@/components/ui/link";
import { ROUTES } from "@/utils/routes";

// Prerenders every visible entry. Unknown slugs and production drafts 404 via
// getMd → notFound(). Not using `dynamicParams = false`: `next dev` caches these
// params, so entries added while the server runs would 404 until a restart.
export async function generateStaticParams() {
  return (await getMdFiles(DEV_LOG_DIR)).map(({ slug }) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/dev-log/[slug]">): Promise<Metadata> {
  const blog = await getMd((await params).slug, DEV_LOG_DIR);
  return {
    title: `${blog?.title} — Alexander Buk-Swienty`,
    description: blog?.description,
  };
}

export default async function Blog({ params }: PageProps<"/dev-log/[slug]">) {
  const blog = await getMd((await params).slug, DEV_LOG_DIR);
  if (!blog) notFound();

  return (
    <Page className="space-y-12">
      <Link
        href={ROUTES.devLog.index}
        variant="buttonLike"
        className="inline-flex items-center gap-2 w-fit"
      >
        <ArrowLeftIcon weight="bold" /> Dev log
      </Link>
      <header className="space-y-4">
        <P className="text-muted-foreground">
          {blog.date}
          {blog.draft && <span className="text-tertiary"> · Draft</span>}
        </P>
        <H1 className="md:text-6xl text-5xl">{blog.title}</H1>
        {blog.tags.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {blog.tags.map((tag) => (
              <TagLink key={tag} tag={tag} />
            ))}
          </div>
        )}
      </header>
      <article>
        <Markdown>{blog.content}</Markdown>
      </article>
    </Page>
  );
}
