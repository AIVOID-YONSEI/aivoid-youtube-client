import VideoItem from "../video_item/video_item.js";
import styles from "./video_list.module.css";
import { TChannel, TVideo } from "../../service/youtube.js";

const VideoList = ({ videos, channels, display }: { videos: TVideo[]; channels: TChannel[]; display: "list" | "grid" }) => {
  return (
    <ul className={`${styles.videos} ${display === "list" ? styles.list : styles.grid}`}>
      {videos.map((video, i) => (
        <VideoItem key={video.id} video={video} display={display} channel={channels[i]} />
      ))}
    </ul>
  );
};

export default VideoList;
