import Link from "next/link";
import styles from "../styles/page.module.scss";

export default function Home() {
  return (
    <main className={styles.main}>
      <Link className={styles.link} href="/text-parallax">
        Texte parallax
      </Link>
      <Link className={styles.link} href="/text-marquee">
        Marquee parallax
      </Link>
      <Link className={styles.link} href="/text-path">
        Texte path
      </Link>
      <Link className={styles.link} href="/text-opacity">
        Texte opacité
      </Link>
      <Link className={styles.link} href="/text-zoom">
        Texte zoom
      </Link>
      <Link className={styles.link} href="/image-zoom">
        Image zoom
      </Link>
      <Link className={styles.link} href="/image-transition">
        Image transition
      </Link>
      <Link className={styles.link} href="/send-email-button">
        Bouton envoyer
      </Link>
    </main>
  );
}
