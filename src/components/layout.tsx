import { PropsWithChildren } from "react";
import styles from "./layout.module.css";
import SearchHeader from "./search_header/search_header";
import Sidebar from "./sidebar/sidebar";

export default function Layout({ children }: PropsWithChildren) {
  return (
    <div className={styles.app}>
      <SearchHeader onSearch={undefined} onLogoClick={undefined} />
      <section className={styles.sidebarAndContent}>
        <Sidebar />
        {children}
      </section>
    </div>
  );
}
