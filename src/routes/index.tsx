import { createFileRoute } from "@tanstack/react-router";
import Home from "../views/home";
import { youtube } from "../service/youtube";

export const Route = createFileRoute("/")({
  loader: async () => {
    const populars = await youtube.getMostPopular();
    return Promise.all(populars.map(({ id, snippet: { channelId } }) => youtube.getAllData(id, channelId)));
  },
  component: () => {
    const data = Route.useLoaderData();

    return <Home data={data} />;
  },
});
