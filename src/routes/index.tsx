import { createFileRoute } from "@tanstack/react-router";
import Home from "../views/home";
import { youtube } from "../service/youtube";

export const Route = createFileRoute("/")({
  loader: async () => {
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

    return <Home videos={videos} channels={channels} />;
  },
});
