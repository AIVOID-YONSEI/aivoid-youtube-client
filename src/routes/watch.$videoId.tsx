import { createFileRoute, redirect } from "@tanstack/react-router";
import Watch from "../views/watch";
import { TVideo, youtube } from "../service/youtube";

export const Route = createFileRoute("/watch/$videoId")({
  loader: async ({ params: { videoId } }) => {
    try {
      const _video = localStorage.getItem("video");

      if (!_video) {
        throw redirect({
          to: "/",
        });
      }

      const recommendedVideos = await youtube.getRcmData(videoId);
      const video = JSON.parse(_video) as TVideo;
      const videosAndChannels = await Promise.all(recommendedVideos.map((video) => youtube.getAllData(video.id.videoId, video.snippet.channelId)));

      return {
        video,
        videos: videosAndChannels.map(([video]) => video),
        channel: await youtube.fetchChannelData(video.snippet.channelId),
        channels: videosAndChannels.map(([_, channel]) => channel),
      };
    } catch (e) {
      console.log(e);
      throw redirect({
        to: "/",
      });
    }
  },
  component: function WatchComponent() {
    const { video, videos, channel, channels } = Route.useLoaderData();
    return <Watch video={video} videos={videos} channel={channel} channels={channels} />;
  },
});
