"use client";

import { useRef } from "react";
import Image from "next/image";
import { m, useScroll, useTransform } from "framer-motion";

import styles from "./imageZoom.module.scss";

export default function Page() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.4", "end end"],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [1, 4]);

  return (
    <main className={styles.main}>
      <div style={{ height: "80vh" }} />
      <div ref={containerRef} className={styles.wrapper}>
        <div className={styles.stickyWrapper}>
          <m.div style={{ scale }} className={styles.scaleWrapper}>
            <div className={styles.imageWrapper}>
              <Image src="/image4.jpg" width={4000} height={3000} alt="Image" />
            </div>
          </m.div>
        </div>
      </div>
      <div style={{ height: "100vh" }} />
    </main>
  );
}
