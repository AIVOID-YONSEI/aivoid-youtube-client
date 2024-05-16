import VideoList from "../components/video_list/video_list";
import styles from "./home.module.css";
import { TVideo, TChannel } from "../service/youtube";

const Home = ({ videos, channels }: { videos: TVideo[]; channels: TChannel[] }) => {
  return (
    <section className={`${styles.grid} ${styles.content}`}>
      <VideoList videos={videos} channels={channels} display="grid" />
    </section>
  );
};

export default Home;
