import { useLoaderData } from "@tanstack/react-router";
import VideoList from "../components/video_list/video_list";
import styles from "./home.module.css";

const Home = ({ data }: { data: any }) => {
  return (
    <section className={`${styles.grid} ${styles.content}`}>
      <VideoList videos={data} display="grid" search={undefined} channelImg={undefined} youtube={undefined} onVideoClick={undefined} />
    </section>
  );
};

export default Home;
