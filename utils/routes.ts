export const ROUTES = {
  home: "/",
  devLog: {
    index: "/dev-log",
    post: (slug: string) => `/dev-log/${slug}`,
    tag: (tag: string) => `/dev-log?tag=${encodeURIComponent(tag)}`,
  },
} as const;
