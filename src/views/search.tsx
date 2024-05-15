import VideoList from "../components/video_list/video_list";
import styles from "./search.module.css";
import Sidebar from "../components/sidebar/sidebar";

const Search = () => {
  return (
    <>
      <Sidebar />
      <section className={`${styles.list} ${styles.content} ${styles.search}`}>
        <VideoList youtube={undefined} videos={[]} onVideoClick={undefined} display="list" channelImg={true} search={true} />
      </section>
    </>
  );
};

export default Search;
