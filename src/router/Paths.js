import { LandingPage } from "../pages/LandingPage";
import { PageNotFound } from "../pages/PageNotFound";
import { UserPage } from "../pages/UserPage";

export const paths = [
  {
    id: 1,
    path: "/",
    element: LandingPage,
    text: "Home",
  },
  {
    id: 40,
    path: "/*",
    element: PageNotFound,
  },
];

export const protectedPaths = [
  {
    id: 1,
    path: "/user",
    element: UserPage,
    text: "My Page",
  },
];
