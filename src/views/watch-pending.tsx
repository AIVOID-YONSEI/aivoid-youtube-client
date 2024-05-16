import Skeleton from "../components/skeleton";
import styles from "./watch-pending.module.css";

export default function WatchPending() {
  return (
    <section className={`${styles.grid} ${styles.content}`}>
      <Skeleton count={10} />
    </section>
  );
}
