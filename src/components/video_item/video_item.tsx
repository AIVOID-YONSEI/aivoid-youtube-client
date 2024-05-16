import { useRef } from "react";
import styles from "./video_item.module.css";
import * as common from "../../common";
import { Tooltip } from "antd";
import { CheckCircleTwoTone, WarningTwoTone } from "@ant-design/icons";
import { TChannel, TVideo } from "../../service/youtube";
import { useNavigate } from "@tanstack/react-router";

const VideoItem = ({ video, channel, display }: { video: TVideo; channel: TChannel; display: "list" | "grid" }) => {
  const aiVoicePercentage = useRef(Math.random());
  const isAIVoiceIncluded = useRef(aiVoicePercentage.current > 0.5 ? true : false);
  const navigate = useNavigate();

  const onClickLink = () => {
    localStorage.setItem("video", JSON.stringify(video));
    navigate({
      to: "/watch/$videoId",
      params: {
        videoId: video.id,
      },
    });
  };

  return (
    <li className={`${styles.video} ${display === "list" ? styles.list : styles.grid}`} onClick={onClickLink}>
      <img src={video.snippet.thumbnails.medium.url} className={styles.thumbnail} alt="thumbnail"></img>
      <div className={styles.metadata}>
        <img src={channel.snippet.thumbnails.default.url} className={styles.channelImg} alt="channel" />
        <div className={styles.infoBox}>
          <p className={styles.videoTitle}>
            {video.snippet.title.slice(0, 40)}
            {isAIVoiceIncluded.current ? (
              <Tooltip placement="topLeft" title={"해당 영상은 AI 음성이 포함되어 있지 않습니다."} color="blue">
                <CheckCircleTwoTone style={{ fontSize: "1rem", marginLeft: "5px" }} twoToneColor="blue" />
              </Tooltip>
            ) : (
              <Tooltip
                placement="topLeft"
                title={`해당 영상은 AI 음성이 ${`${Math.ceil(aiVoicePercentage.current * 100)}%`} 포함되어 있습니다.`}
                color="red"
              >
                <WarningTwoTone style={{ fontSize: "1rem", marginLeft: "5px" }} twoToneColor="red" />
              </Tooltip>
            )}
          </p>
          <p className={styles.viewCountAndDate}>
            {`조회수 ${common.countConverter(video.statistics.viewCount)}회 • `}
            <span className={styles.date}>{common.agoConverter(video.snippet.publishedAt)}</span>
          </p>
        </div>
      </div>
    </li>
  );
};

export default VideoItem;
