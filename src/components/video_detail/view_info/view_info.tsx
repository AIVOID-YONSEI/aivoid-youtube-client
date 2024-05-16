import React, { useState, useEffect } from "react";
import styles from "./view_info.module.css";
import * as common from "../../../common";
import { TVideo } from "../../../service/youtube";

const ViewInfo = ({ video }: { video: TVideo }) => {
  const [smallViewCount, setSmallViewCount] = useState(false);

  // TODO fix type
  const screenChange = (event: any) => {
    event.matches ? setSmallViewCount(true) : setSmallViewCount(false);
  };

  useEffect(() => {
    let mql = window.matchMedia("screen and (max-width:570px)");
    mql.addEventListener("change", screenChange);
    return () => mql.removeEventListener("change", screenChange);
  }, []);

  return (
    <div className={styles.viewInfo}>
      {!smallViewCount ? (
        <p className={styles.viewCountAndDate}>
          {`조회수 ${common.numberWithCommas(video.statistics.viewCount)}회 • `}
          <span className={styles.date}>{common.dateConverter(video.snippet.publishedAt)}</span>
        </p>
      ) : (
        <p className={styles.viewCountAndDate}>{`조회수 ${common.countConverter(video.statistics.viewCount)}회`}</p>
      )}
      <div className={styles.btnContainer}>
        <button className={styles.btnBold}>
          <i className="fas fa-thumbs-up"></i>
          {common.countConverter(video.statistics.likeCount)}
        </button>
        <button>
          <i className="fas fa-share"></i>공유
        </button>
        <button>
          <i className="fas fa-folder-plus"></i>저장
        </button>
        <button>•••</button>
      </div>
    </div>
  );
};

export default ViewInfo;
