/* eslint-disable @typescript-eslint/no-unused-vars -- `node` is destructured out so the AST isn't spread onto DOM elements */
import { Components, MarkdownAsync } from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeShiki, { RehypeShikiOptions } from "@shikijs/rehype";
import { cn } from "cn";
import { ArrowSquareOutIcon } from "@phosphor-icons/react/ssr";
import { H2, H3, H4, H5 } from "@/components/ui/typography/h";
import { P } from "@/components/ui/typography/p";

// Headings shift down one level: the post title is the page's only h1.
const components: Components = {
  h1: ({ node: _, ...props }) => <H2 className="mt-12" {...props} />,
  h2: ({ node: _, ...props }) => <H3 className="mt-10" {...props} />,
  h3: ({ node: _, ...props }) => <H4 className="mt-8" {...props} />,
  h4: ({ node: _, ...props }) => <H5 className="mt-6" {...props} />,
  p: ({ node: _, ...props }) => <P className="text-lg" {...props} />,
  // Mirrors ExternalLink's styling, but children can be rich (e.g. **bold**).
  a: ({ node: _, href = "", children }) => (
    <a
      href={href}
      className="font-semibold text-accent hover:underline underline-offset-4"
      {...(href.startsWith("http") && {
        target: "_blank",
        rel: "noopener noreferrer",
      })}
    >
      {children}
      {href.startsWith("http") && (
        <ArrowSquareOutIcon className="inline ml-1" size={16} weight="fill" />
      )}
    </a>
  ),
  strong: ({ node: _, ...props }) => (
    <strong className="text-foreground font-semibold" {...props} />
  ),
  ul: ({ node: _, ...props }) => (
    <ul className="list-disc pl-6 space-y-2 text-lg font-light" {...props} />
  ),
  ol: ({ node: _, ...props }) => (
    <ol className="list-decimal pl-6 space-y-2 text-lg font-light" {...props} />
  ),
  blockquote: ({ node: _, ...props }) => (
    <blockquote
      className="border-l-2 border-accent pl-4 italic text-muted-foreground"
      {...props}
    />
  ),
  // Inline-code styles; `pre` resets them for fenced blocks.
  code: ({ node: _, className, ...props }) => (
    <code
      className={cn(
        "bg-muted rounded px-1.5 py-0.5 font-mono text-[0.9em]",
        className,
      )}
      {...props}
    />
  ),
  // Shiki passes its own classes and theme variables; token colours live in
  // globals.css so they follow the light/dark toggle.
  pre: ({ node: _, className, ...props }) => (
    <pre
      className={cn(
        "bg-muted border border-border rounded-md p-4 overflow-x-auto font-mono text-sm",
        "[&>code]:bg-transparent [&>code]:p-0 [&>code]:rounded-none [&>code]:text-[1em]",
        className,
      )}
      {...props}
    />
  ),
  hr: () => <hr className="border-border" />,
  img: ({ node: _, alt = "", ...props }) => (
    // eslint-disable-next-line @next/next/no-img-element
    <img alt={alt} className="rounded-md border border-border" {...props} />
  ),
  table: ({ node: _, ...props }) => (
    <div className="overflow-x-auto">
      <table className="w-full text-left border-collapse" {...props} />
    </div>
  ),
  th: ({ node: _, ...props }) => (
    <th className="border-b border-border py-2 pr-4 font-medium" {...props} />
  ),
  td: ({ node: _, ...props }) => (
    <td className="border-b border-border py-2 pr-4 font-light" {...props} />
  ),
};

const shikiOptions: RehypeShikiOptions = {
  themes: { light: "github-light", dark: "github-dark-default" },
  // Emit both themes as CSS variables instead of inline colours.
  defaultColor: false,
  // Load only the languages posts actually use.
  lazy: true,
  // Unknown languages render as plain text instead of failing the build.
  fallbackLanguage: "text",
};

// Async so Shiki can highlight on the server; no highlighter ships to the client.
export const Markdown = ({ children }: { children: string }) => (
  <div className="space-y-6">
    <MarkdownAsync
      remarkPlugins={[remarkGfm]}
      rehypePlugins={[[rehypeShiki, shikiOptions]]}
      components={components}
    >
      {children}
    </MarkdownAsync>
  </div>
);
