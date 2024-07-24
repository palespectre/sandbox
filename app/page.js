import Link from "next/link";
import styles from "../styles/page.module.scss";

export default function Home() {
  return (
    <main className={styles.main}>
      <Link className={styles.link} href="/text-parallax">
        Text parallax
      </Link>
      <Link className={styles.link} href="/text-marquee">
        Text marquee + parallax
      </Link>
      <Link className={styles.link} href="/text-path">
        Text path
      </Link>
      <Link className={styles.link} href="/text-opacity">
        Text opacity
      </Link>
      <Link className={styles.link} href="/text-zoom">
        Text zoom
      </Link>
      <Link className={styles.link} href="/image-zoom">
        Image zoom
      </Link>
    </main>
  );
}
