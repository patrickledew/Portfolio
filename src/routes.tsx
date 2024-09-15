import {
  createRootRoute,
  createRoute,
  createRouter,
} from "@tanstack/react-router";
import App from "./components/App";
import Home from "./pages/Home";
import { BlogPost } from "./pages/BlogPost";

const rootRoute = createRootRoute({
  component: () => <App />,
});

const homeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: Home,
});

const blogPostRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/blog/$slug",
  component: BlogPost,
});

const routeTree = rootRoute.addChildren([homeRoute, blogPostRoute]);

export const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}
