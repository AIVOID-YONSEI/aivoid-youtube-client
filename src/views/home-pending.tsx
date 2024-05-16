import Skeleton from "../components/skeleton";
import styles from "./home-pending.module.css";
import { VectorSparkle } from "../assets";
import { ConfigProvider, Flex, Slider } from "antd";
import { useNavigate } from "@tanstack/react-router";

export default function HomePending({ filter }: { filter: number }) {
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
            disabled
          />
        </ConfigProvider>
      </Flex>
      <Skeleton count={10} />
    </section>
  );
}
