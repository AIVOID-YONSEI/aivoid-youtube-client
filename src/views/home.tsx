import VideoList from "../components/video_list/video_list";
import styles from "./home.module.css";
import Sidebar from "../components/sidebar/sidebar";

const Home = () => {
  return (
    <>
      <Sidebar />
      <section className={`${styles.grid} ${styles.content}`}>
        <VideoList videos={[]} display="grid" channelImg={true} search={false} youtube={undefined} onVideoClick={undefined} />
      </section>
    </>
  );
};

export default Home;
