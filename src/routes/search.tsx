import { createFileRoute } from "@tanstack/react-router";
import Search from "../views/search";

export const Route = createFileRoute("/search")({
  component: () => <Search />,
});
