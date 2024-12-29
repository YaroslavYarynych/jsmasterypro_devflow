const ROUTES = {
  HOME: "/",
  SIGN_IN: "/sign-in",
  SIGN_UP: "sign-up",
  COMMUNITY: "/community",
  COLLECTIONS: "/collections",
  FIND_JOBS: "/jobs",
  TAGS: "/tags",
  TAG: (id: string) => `/tags/${id}`,
  COMMUNITIES: "/",
  QUESTIONS: "/questions",
  PROFILE: (id: string) => `/profile/${id}`,
};

export default ROUTES;
