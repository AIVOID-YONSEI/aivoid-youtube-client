import VideoList from "../components/video_list/video_list";
import styles from "./watch.module.css";
import VideoDetail from "../components/video_detail/video_detail";
import { TChannel, TVideo } from "../service/youtube";

const Watch = ({ video, videos, channel, channels }: { video: TVideo; videos: TVideo[]; channel: TChannel; channels: TChannel[] }) => {
  return (
    <section className={`${styles.list} ${styles.content}`}>
      <VideoDetail video={video} channel={channel} />
      <VideoList videos={videos} channels={channels} display="list" />
    </section>
  );
};

export default Watch;
