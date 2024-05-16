import "./index.css";
import { createRoot } from "react-dom/client";
import { RouterProvider, createRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";

const $root = document.querySelector("#root")!;

/**
 * router
 */
const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}
createRoot($root).render(<RouterProvider router={router} defaultPendingMs={1} defaultPendingMinMs={1000} />);
