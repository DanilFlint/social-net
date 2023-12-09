import { Sun, Users2 } from "lucide-react";
import Image from "next/image";
import styles from "./Sidebar.module.scss";
import Link from "next/link";

export function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <Image src="/logo.svg" alt="" />
      <div>
        <Link href="/friends">
          <Users2 />
        </Link>

        <Link href="/friends">
          <Users2></Users2>
        </Link>
      </div>
      <div></div>
    </div>
  );
}
