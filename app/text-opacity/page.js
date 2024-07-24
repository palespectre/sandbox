"use client";

import { useRef } from "react";
import Image from "next/image";
import { m, useScroll, useTransform } from "framer-motion";

import styles from "../../styles/textOpacity.module.scss";

export default function Page() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.7", "start 0.1"],
  });

  const paragraph =
    "Besoin d'une stratégie digitale mais vous ne savez pas encore quels leviers utiliser ou comment les activer ensemble ? Chez dahive, vous avez l’assurance d’un accompagnement sur-mesure de A à Z";

  const words = paragraph.split(" ");

  return (
    <main className={styles.main}>
      <div style={{ height: "80vh" }} />
      <p ref={containerRef} className={styles.paragraph}>
        {words.map((word, index) => {
          const start = index / words.length;
          const end = start + 10 / words.length;

          return (
            <Word
              key={index}
              word={word}
              progress={scrollYProgress}
              // range={[start, end > 1 ? 1 : end]}
              range={[start, end > 1 ? 1 : end]}
            />
          );
        })}
      </p>
      <div style={{ height: "90vh" }} />
    </main>
  );
}

const Word = ({ word, progress, range }) => {
  const opacity = useTransform(progress, range, [0, 1]);

  return (
    <span className={styles.word}>
      {/* <span className={styles.shadow}>{word}</span> */}
      <m.span style={{ opacity }}>{word}</m.span>
    </span>
  );
};
