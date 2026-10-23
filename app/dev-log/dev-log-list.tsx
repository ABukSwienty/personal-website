"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { MagnifyingGlassIcon } from "@phosphor-icons/react";
import { Input } from "@/components/ui/input";
import { TagButton } from "@/components/ui/blog/tag";
import { P } from "@/components/ui/typography/p";
import type { MarkdownData } from "@/utils/md";

import { BlogPreviewCard } from "@/components/ui/blog/blog-preview-card";

type ViewProps = {
  entries: MarkdownData[];
  query: string;
  selectedTags: string[];
  onQueryChange: (query: string) => void;
  onTagToggle: (tag: string) => void;
};

const DevLogView = ({
  entries,
  query,
  selectedTags,
  onQueryChange,
  onTagToggle,
}: ViewProps) => {
  const allTags = [...new Set(entries.flatMap((entry) => entry.tags))].sort();

  // Searches metadata only; entry bodies aren't sent to the client.
  const terms = query.toLowerCase().split(/\s+/).filter(Boolean);
  const filtered = entries.filter((entry) => {
    const haystack = [entry.title, entry.description, ...entry.tags]
      .join(" ")
      .toLowerCase();
    return (
      selectedTags.every((tag) => entry.tags.includes(tag)) &&
      terms.every((term) => haystack.includes(term))
    );
  });

  const renderTag = (tag: string) => (
    <TagButton
      key={tag}
      tag={tag}
      active={selectedTags.includes(tag)}
      onClick={() => onTagToggle(tag)}
    />
  );

  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <Input
          type="search"
          value={query}
          onValueChange={onQueryChange}
          placeholder="Search"
          aria-label="Search dev log"
          icon={<MagnifyingGlassIcon weight="bold" />}
        />
        {allTags.length > 0 && (
          <div className="flex flex-wrap gap-2">{allTags.map(renderTag)}</div>
        )}
      </div>

      {filtered.length === 0 ? (
        <P className="text-muted-foreground">
          {entries.length === 0 ? "No posts yet." : "No posts match."}
        </P>
      ) : (
        <ul className="space-y-8">
          {filtered.map((entry) => (
            <li key={entry.slug}>
              <BlogPreviewCard {...entry} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

// Prerendered stand-in until search params are known on the client.
export const DevLogListFallback = ({
  entries,
}: {
  entries: MarkdownData[];
}) => (
  <DevLogView
    entries={entries}
    query=""
    selectedTags={[]}
    onQueryChange={() => {}}
    onTagToggle={() => {}}
  />
);

// Filters live in the URL: /dev-log?q=search+terms&tag=a&tag=b
export const DevLogList = ({ entries }: { entries: MarkdownData[] }) => {
  const searchParams = useSearchParams();
  const selectedTags = searchParams.getAll("tag");
  // Kept locally so typing isn't tied to the URL update cycle.
  const [query, setQuery] = useState(searchParams.get("q") ?? "");

  // replaceState syncs with useSearchParams without a server round-trip, and
  // doesn't add a history entry per keystroke.
  const updateUrl = (update: (params: URLSearchParams) => void) => {
    const params = new URLSearchParams(window.location.search);
    update(params);
    const search = params.toString();
    window.history.replaceState(
      null,
      "",
      search ? `?${search}` : window.location.pathname,
    );
  };

  const onQueryChange = (value: string) => {
    setQuery(value);
    updateUrl((params) =>
      value ? params.set("q", value) : params.delete("q"),
    );
  };

  const onTagToggle = (tag: string) =>
    updateUrl((params) =>
      selectedTags.includes(tag)
        ? params.delete("tag", tag)
        : params.append("tag", tag),
    );

  return (
    <DevLogView
      entries={entries}
      query={query}
      selectedTags={selectedTags}
      onQueryChange={onQueryChange}
      onTagToggle={onTagToggle}
    />
  );
};
