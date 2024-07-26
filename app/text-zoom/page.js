"use client";

import { useRef } from "react";
import { m, useScroll, useTransform } from "framer-motion";

import styles from "./textZoom.module.scss";

export default function Page() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.5", "end end"],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [2, 62]);
  const y = useTransform(scrollYProgress, [0, 1], [0, 750]);

  return (
    <main className={styles.main}>
      <div style={{ height: "100vh" }} />
      <div ref={containerRef} className={styles.wrapper}>
        <div className={styles.stickyWrapper}>
          <m.div style={{ scale, y }} className={styles.scaleWrapper}>
            <span>HELLO</span>
          </m.div>
        </div>
      </div>
      <div className={styles.bottom}>
        <h1>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
          tristique blandit nunc
        </h1>
      </div>
    </main>
  );
}
