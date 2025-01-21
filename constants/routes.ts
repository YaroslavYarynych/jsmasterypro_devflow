const ROUTES = {
  HOME: "/",
  SIGN_IN: "/sign-in",
  SIGN_UP: "sign-up",
  COMMUNITY: "/community",
  COLLECTIONS: "/collections",
  FIND_JOBS: "/jobs",
  TAGS: "/tags",
  ASK_QUESTION: "/ask-question",
  TAG: (id: string) => `/tags/${id}`,
  COMMUNITIES: "/",
  QUESTIONS: "/questions",
  QUESTION: (id: string) => `/question/${id}`,
  PROFILE: (id: string) => `/profile/${id}`,
};

export default ROUTES;
