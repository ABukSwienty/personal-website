import fs from "node:fs/promises";
import path from "node:path";
import matter from "gray-matter";

export type MarkdownData = {
  slug: string;
  title: string;
  date: string;
  description?: string;
  tags: string[];
  draft: boolean;
};

export type Blog = MarkdownData & { content: string };

const toMeta = (slug: string, data: Record<string, unknown>): MarkdownData => ({
  slug,
  title: String(data.title ?? slug),
  // gray-matter parses unquoted YAML dates into Date objects
  date:
    data.date instanceof Date
      ? data.date.toISOString().slice(0, 10)
      : String(data.date ?? ""),
  description: data.description ? String(data.description) : undefined,
  // Accepts both `tags: [a, b]` and `tags: a, b`
  tags: (Array.isArray(data.tags)
    ? data.tags.map(String)
    : String(data.tags ?? "").split(",")
  )
    .map((tag) => tag.trim().toLowerCase())
    .filter(Boolean),
  draft: data.draft === true,
});

// Drafts are hidden unless previewing locally with SHOW_DRAFTS=true (e.g. in
// .env.local). Production builds never show them, even with the flag set.
const showDrafts =
  process.env.SHOW_DRAFTS === "true" && process.env.NODE_ENV !== "production";

const isVisible = (meta: MarkdownData) => !meta.draft || showDrafts;

// "My Post (Draft) Æble.md" → "my-post-draft-aeble". Danish/German letters
// that don't decompose are spelled out; other accents are stripped.
const toSlug = (fileName: string) =>
  fileName
    .replace(/\.md$/i, "")
    .toLowerCase()
    .replace(/æ/g, "ae")
    .replace(/ø/g, "oe")
    .replace(/ß/g, "ss")
    .normalize("NFKD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

// Maps URL slug → filename. A missing directory means no posts: git doesn't
// keep empty folders.
const getMdFileMap = async (mdDirPath: string) => {
  const files = (await fs.readdir(mdDirPath).catch(() => [])).filter((file) =>
    /\.md$/i.test(file),
  );
  const map = new Map<string, string>();
  for (const file of files) {
    const slug = toSlug(file);
    if (!slug) throw new Error(`"${file}" has no usable characters for a URL.`);
    const existing = map.get(slug);
    if (existing)
      throw new Error(
        `"${existing}" and "${file}" both map to /${slug}. Rename one of them.`,
      );
    map.set(slug, file);
  }
  return map;
};

const readBlog = async (file: string, mdDirPath: string) =>
  matter(await fs.readFile(path.join(mdDirPath, file), "utf8"));

export const getMd = async (
  slug: string,
  mdDirPath: string,
): Promise<Blog | null> => {
  const file = (await getMdFileMap(mdDirPath)).get(slug);
  if (!file) return null;
  const { data, content } = await readBlog(file, mdDirPath);
  const meta = toMeta(slug, data);
  return isVisible(meta) ? { ...meta, content } : null;
};

export const getMdFiles = async (
  mdDirPath: string,
): Promise<MarkdownData[]> => {
  const fileMap = await getMdFileMap(mdDirPath);
  const blogs = await Promise.all(
    [...fileMap].map(async ([slug, file]) =>
      toMeta(slug, (await readBlog(file, mdDirPath)).data),
    ),
  );
  return blogs
    .filter(isVisible)
    .sort((a, b) => b.date.localeCompare(a.date));
};
