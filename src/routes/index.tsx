import { createFileRoute } from "@tanstack/react-router";
import Home from "../views/home";
import { youtube } from "../service/youtube";
import HomePending from "../views/home-pending";
import { z } from "zod";

export const Route = createFileRoute("/")({
  validateSearch: z.object({
    filter: z
      .preprocess((val) => {
        if (typeof val === "string") {
          return parseInt(val, 10);
        }

        return val;
      }, z.number())
      .optional(),
  }),
  loaderDeps: ({ search: { filter } }) => ({ filter: filter ?? 0 }),
  loader: async ({ deps: { filter } }) => {
    const populars = await youtube.getMostPopular();
    const allDatas = await Promise.all(
      populars.map(async ({ id, snippet: { channelId } }) => {
        const [video, channel] = await youtube.getAllData(id, channelId);
        return { video, channel };
      }),
    );

    return {
      videos: allDatas.map(({ video }) => video),
      channels: allDatas.map(({ channel }) => channel),
    };
  },
  component: function HomeComponent() {
    const { videos, channels } = Route.useLoaderData();
    const { filter } = Route.useSearch();

    return <Home videos={videos} channels={channels} filter={filter ?? 0} />;
  },
  pendingComponent: function HomePendingComponent() {
    const { filter } = Route.useSearch();
    return <HomePending filter={filter ?? 0} />;
  },
});
