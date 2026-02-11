const ROUTES = [
  {
    type: "static",
    path: "/",
  },

  // streamed pages
  {
    type: "ppr",
    path: "/fact/cat",
  },
  {
    type: "ppr",
    path: "/fact/dog",
  },

  // cached pages
  {
    type: "static",
    path: "/books/harry-potter",
    revalidate: "30d",
    expire: "1y",
  },
  {
    type: "static",
    path: "/books/percy-jackson",
    revalidate: "30d",
    expire: "1y",
  },

  // partial streamed pages
  {
    type: "ppr",
    path: "/random/fact",
  },
  {
    type: "ppr",
    path: "/random/user",
  },
  {
    type: "dynamic",
    path: "/api/random-user",
  },

  // partial streamed and cached pages
  {
    type: "ppr",
    path: "/dashboard",
    expire: "1m",
    revalidate: "1y",
  },
  {
    type: "ppr",
    path: "/shop",
    expire: "15m",
    revalidate: "1y",
  },
  {
    type: "dynamic",
    path: "/api/dashboard/user-stats",
  },
  {
    type: "dynamic",
    path: "/api/shop/profile",
  },
  {
    type: "dynamic",
    path: "/api/shop/recommendation",
  },

  {
    type: "static",
    path: "/_not-found",
  },
]
  .sort((a, b) => a.path.localeCompare(b.path));

export async function getBuildRoutes() {
  return ROUTES;
};
