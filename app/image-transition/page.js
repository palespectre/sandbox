"use client";

import Link from "next/link";
import { useRef } from "react";
import Image from "next/image";
import { m, useScroll, useTransform } from "framer-motion";

import styles from "./imageTransition.module.scss";

export default function Page() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });
  const scale1 = useTransform(scrollYProgress, [0.1, 0.5], [0, 10]);
  const scale2 = useTransform(scrollYProgress, [0.5, 1], [0, 10]);
  const opacity1 = useTransform(scrollYProgress, [0.1, 0.2], [1, 0]);
  const opacity2 = useTransform(
    scrollYProgress,
    [0.25, 0.3, 0.5, 0.6],
    [0, 1, 1, 0]
  );
  const opacity3 = useTransform(scrollYProgress, [0.7, 0.75, 1], [0, 1, 1]);

  return (
    <main className={styles.main}>
      <div className={styles.links}>
        <Link href="/image-transition">Bubbles</Link>
        <Link href="/image-transition/waves">Waves</Link>
      </div>
      <div style={{ height: "80vh" }} />
      <div ref={containerRef} className={styles.wrapper}>
        <div className={styles.images}>
          <div className={styles.imageWrapper}>
            <Image src="/image4.jpg" width={4000} height={3000} alt="Image" />
          </div>
          <div className={`${styles.imageWrapper} ${styles.imageWrapper2}`}>
            <Image src="/image5.jpg" width={4000} height={3000} alt="Image" />
          </div>
          <div className={`${styles.imageWrapper} ${styles.imageWrapper3}`}>
            <Image src="/image6.jpg" width={4000} height={3000} alt="Image" />
          </div>
          <svg className={styles.bubbles}>
            <defs>
              <mask id="mask2">
                <m.circle
                  style={{ scale: scale1 }}
                  id="Oval"
                  fill="#FFFFFF"
                  cx="30%"
                  cy="10%"
                  r="67"
                ></m.circle>
                <m.circle
                  style={{ scale: scale1 }}
                  id="Oval"
                  fill="#FFFFFF"
                  cx="70%"
                  cy="20%"
                  r="56"
                ></m.circle>
                <m.circle
                  style={{ scale: scale1 }}
                  id="Oval"
                  fill="#FFFFFF"
                  cx="53"
                  cy="40%"
                  r="81"
                ></m.circle>
                <m.circle
                  style={{ scale: scale1 }}
                  id="Oval"
                  fill="#FFFFFF"
                  cx="50%"
                  cy="55%"
                  r="70"
                ></m.circle>
                <m.circle
                  style={{ scale: scale1 }}
                  id="Oval"
                  fill="#FFFFFF"
                  cx="80%"
                  cy="70%"
                  r="56"
                ></m.circle>
                <m.circle
                  style={{ scale: scale1 }}
                  id="Oval"
                  fill="#FFFFFF"
                  cx="20%"
                  cy="85%"
                  r="76"
                ></m.circle>
              </mask>
              <mask id="mask3">
                <m.circle
                  style={{ scale: scale2 }}
                  id="Oval"
                  fill="#FFFFFF"
                  cx="30%"
                  cy="10%"
                  r="67"
                ></m.circle>
                <m.circle
                  style={{ scale: scale2 }}
                  id="Oval"
                  fill="#FFFFFF"
                  cx="70%"
                  cy="20%"
                  r="56"
                ></m.circle>
                <m.circle
                  style={{ scale: scale2 }}
                  id="Oval"
                  fill="#FFFFFF"
                  cx="53"
                  cy="40%"
                  r="81"
                ></m.circle>
                <m.circle
                  style={{ scale: scale2 }}
                  id="Oval"
                  fill="#FFFFFF"
                  cx="50%"
                  cy="55%"
                  r="70"
                ></m.circle>
                <m.circle
                  style={{ scale: scale2 }}
                  id="Oval"
                  fill="#FFFFFF"
                  cx="80%"
                  cy="70%"
                  r="56"
                ></m.circle>
                <m.circle
                  style={{ scale: scale2 }}
                  id="Oval"
                  fill="#FFFFFF"
                  cx="20%"
                  cy="85%"
                  r="76"
                ></m.circle>
              </mask>
            </defs>
          </svg>
        </div>
        <div className={styles.texts}>
          <m.p style={{ opacity: opacity1 }} className={styles.text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
            mollis magna quis est rhoncus mattis.
          </m.p>
          <m.p style={{ opacity: opacity2 }} className={styles.text}>
            Phasellus est enim, vulputate eu purus ac, lacinia lacinia dolor.
            Fusce hendrerit felis eu nisi porttitor porta et et orci.
          </m.p>
          <m.p style={{ opacity: opacity3 }} className={styles.text}>
            Quisque vel arcu in leo malesuada consequat sed vel risus.
          </m.p>
        </div>
      </div>
      <div style={{ height: "80vh" }} />
    </main>
  );
}
