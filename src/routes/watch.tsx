import { createFileRoute } from "@tanstack/react-router";
import Watch from "../views/watch";

export const Route = createFileRoute("/watch")({
  component: () => <Watch />,
});
