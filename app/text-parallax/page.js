"use client";

import { useRef } from "react";
import Image from "next/image";
import { m, useScroll, useTransform } from "framer-motion";

import styles from "../../styles/textParallax.module.scss";

export default function Page() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  return (
    <main>
      <div style={{ height: "90vh" }} />
      <div ref={containerRef}>
        <Slider
          src="/image1.jpg"
          left="-55%"
          progress={scrollYProgress}
          direction="left"
        />
        <Slider
          src="/image2.jpg"
          left="-35%"
          progress={scrollYProgress}
          direction="right"
        />
        <Slider
          src="/image3.jpg"
          left="-40%"
          progress={scrollYProgress}
          direction="left"
        />
      </div>
      <div style={{ height: "100vh" }} />
    </main>
  );
}

const Slider = ({ src, left, progress, direction }) => {
  const dir = direction === "left" ? -1 : 1;
  const x = useTransform(progress, [0, 1], [-350 * dir, 350 * dir]);

  return (
    <m.div className={styles.slider} style={{ left, x }}>
      {[...Array(3)].map((_, index) => (
        <Phrase key={index} src={src} />
      ))}
    </m.div>
  );
};

const Phrase = ({ src }) => {
  return (
    <div className={styles.phrase}>
      <p className={styles.text}>dahive agence digitale</p>
      <span className={styles.imageWrapper}>
        <Image src={src} width={200} height={150} alt="Image" />
      </span>
    </div>
  );
};
