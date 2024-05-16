import VideoList from "../components/video_list/video_list";
import styles from "./home.module.css";
import { TVideo, TChannel } from "../service/youtube";
import { ConfigProvider, Flex, Slider } from "antd";
import { VectorSparkle } from "../assets";
import { useNavigate } from "@tanstack/react-router";

const Home = ({ videos, channels, filter }: { videos: TVideo[]; channels: TChannel[]; filter: number }) => {
  const navigate = useNavigate();

  return (
    <section className={`${styles.grid} ${styles.content}`}>
      <Flex align="center" gap={20} className={styles.sliderWrap}>
        <div className={styles.filter}>
          <img src={VectorSparkle} alt="sparkle" />
          <span>AI 필터</span>
        </div>
        <ConfigProvider
          theme={{
            components: {
              Slider: {
                dotActiveBorderColor: "#e1503f",
                handleActiveColor: "#e1503f",
                handleColor: "#e1503f",
                trackBg: "#e1503f",
                trackHoverBg: "#e1503f",
                railBg: "#eee",
                colorPrimaryBorderHover: "#e1503f",
              },
            },
          }}
        >
          <Slider
            step={20}
            className={styles.slider}
            value={filter}
            onChange={(val) => navigate({ search: { filter: val } })}
            tooltip={{ formatter: (val) => `${val}%` }}
          />
        </ConfigProvider>
      </Flex>
      <VideoList videos={videos} channels={channels} display="grid" />
    </section>
  );
};

export default Home;