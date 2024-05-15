import { PropsWithChildren } from "react";
import styles from "./layout.module.css";
import SearchHeader from "./search_header/search_header";

export default function Layout({ children }: PropsWithChildren) {
  return (
    <div className={styles.app}>
      <SearchHeader onSearch={undefined} onLogoClick={undefined} />
      <section className={styles.sidebarAndContent}>{children}</section>
    </div>
  );
}
