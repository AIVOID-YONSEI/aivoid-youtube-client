import * as common from "../../../common";
import styles from "./channel_container.module.css";
import { TChannel } from "../../../service/youtube";

const ChannelContainer = ({ channel }: { channel: TChannel }) => (
  <div className={styles.channelContainer}>
    <div className={styles.channelStart}>
      <img src={channel.snippet.thumbnails.default.url} alt="Channel" className={styles.channelImg} />
      <div className={styles.channelInfo}>
        <h4 className={styles.channelName}>{channel.snippet.title}</h4>
        <div className={styles.subscribers}>구독자 {common.countConverter(channel.statistics.subscriberCount)}명</div>
      </div>
    </div>
    <button className={styles.subscribe}>구독</button>
  </div>
);

export default ChannelContainer;
