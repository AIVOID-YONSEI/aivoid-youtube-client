import SkeletonImpl, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function Skeleton({ count = 1 }: { count?: number }) {
  return (
    <SkeletonTheme baseColor="#202020" highlightColor="#444">
      <p>
        <SkeletonImpl count={count} style={{ height: "30px", marginTop: "20px" }} />
      </p>
    </SkeletonTheme>
  );
}
