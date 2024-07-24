"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { m, useScroll, useTransform } from "framer-motion";

import styles from "../../styles/textMarquee.module.scss";

export default function Page() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  return (
    <main className={styles.main}>
      <div style={{ height: "80vh" }} />
      <div ref={containerRef}>
        <Slider
          src="/image1.jpg"
          left="-55%"
          progress={scrollYProgress}
          direction="left"
        />
        <Slider
          src="/image2.jpg"
          left="-150%"
          progress={scrollYProgress}
          direction="right"
          duration={25}
        />
        <Slider
          src="/image3.jpg"
          left="-40%"
          progress={scrollYProgress}
          direction="left"
          duration={6}
        />
      </div>
      <div style={{ height: "90vh" }} />
    </main>
  );
}

const Slider = ({ src, left, progress, direction, duration = 9 }) => {
  const [width, setWidth] = useState(0);
  const phraseRef = useRef(null);
  const dir = direction === "left" ? -1 : 1;
  const x = useTransform(progress, [0, 1], [-350 * dir, 350 * dir]);

  useEffect(() => {
    setWidth(phraseRef?.current?.offsetWidth + 50);
  }, []);

  const marqueeVariants = {
    animate: {
      x: [0, width * dir],
      transition: {
        x: {
          repeat: Infinity,
          duration,
          ease: "linear",
        },
      },
    },
  };

  return (
    <m.div
      className={styles.sliderWrapper}
      variants={marqueeVariants}
      animate="animate"
    >
      <m.div className={styles.slider} style={{ left, x }}>
        {[...Array(3)].map((_, index) => (
          <div
            key={index}
            ref={index === 0 ? phraseRef : null}
            className={styles.phrase}
          >
            <p className={styles.text}>dahive agence digitale</p>
            <span className={styles.imageWrapper}>
              <Image src={src} width={200} height={150} alt="Image" />
            </span>
          </div>
        ))}
      </m.div>
    </m.div>
  );
};
