import VideoList from "../components/video_list/video_list";
import styles from "./watch.module.css";
import VideoDetail from "../components/video_detail/video_detail";

const Watch = () => {
  return (
    <section className={`${styles.list} ${styles.content}`}>
      {/* <VideoDetail video={selectedVideo} /> */}
      <VideoList channelImg={false} youtube={undefined} videos={[]} onVideoClick={undefined} display="list" search={false} />
    </section>
  );
};

export default Watch;
