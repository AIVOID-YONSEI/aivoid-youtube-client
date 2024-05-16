import React, { useRef } from "react";
import styles from "./video_detail.module.css";
import * as common from "../../common";
import ViewInfo from "./view_info/view_info";
import ChannelContainer from "./channel_container/channel_container";
import DescriptionBox from "./description_box/description_box";
import { Tooltip } from "antd";
import { CheckCircleTwoTone, WarningTwoTone } from "@ant-design/icons";
import { TChannel, TVideo } from "../../service/youtube";

const VideoDetail = ({ video, channel }: { video: TVideo; channel: TChannel }) => {
  const aiVoicePercentage = useRef(Math.random());
  const isAIVoiceIncluded = useRef(aiVoicePercentage.current > 0.5 ? true : false);

  return (
    <div className={styles.playVideoBox}>
      <div className={styles.iframeBox}>
        <iframe
          src={`https://www.youtube.com/embed/${video.id}`}
          title="youtube video"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          frameBorder="0"
        ></iframe>
      </div>
      <div className={styles.videoContainer}>
        <p className={styles.tags}>{common.tagMaker(video.snippet.tags ?? [])}</p>
        <h2 className={styles.title}>
          {video.snippet.title}
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
        </h2>
        <ViewInfo video={video} />
        <ChannelContainer channel={channel} />
        <DescriptionBox video={video} />
      </div>
      <span className={styles.comments1}>댓글 {common.numberWithCommas(video.statistics.commentCount)}개</span>
    </div>
  );
};

export default VideoDetail;