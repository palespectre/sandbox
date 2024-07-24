"use client";

import { useEffect, useRef } from "react";
import { m, useScroll, useTransform } from "framer-motion";

import styles from "../../styles/textPath.module.scss";

export default function Page() {
  const containerRef = useRef(null);
  const textsRef = useRef([]);
  const contactsRef = useRef([]);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  useEffect(() => {
    const handleChange = (e) => {
      textsRef.current.forEach((text, i) => {
        text.setAttribute("startOffset", -50 + i * 17 + e * 30 + "%");
      });
      contactsRef.current.forEach((text, i) => {
        text.setAttribute("startOffset", -15 + i * 25 + e * 40 + "%");
      });
    };

    scrollYProgress.on("change", handleChange);
  }, []);

  return (
    <main>
      <div style={{ height: "50vh" }} />
      <div ref={containerRef} className={styles.path}>
        <svg className={styles.svg} viewBox="0 0 1336 415" fill="none">
          <path
            id="curve"
            d="M0.5 347.5C0.5 347.5 279.386 465.095 315.5 347.5C346.319 247.145 151.5 246 151.5 134.5C151.5 23.0001 317.628 14.2346 441 6.50009C575.469 -1.93012 744.412 -16.1522 768 116.5C788.779 233.355 520.098 240.046 570.5 347.5C620.584 454.276 775.593 414.72 872.5 347.5C961.365 285.859 890.775 148.824 984 94.0001C1129.89 8.20644 1335.5 347.5 1335.5 347.5"
          />
          <text className={styles.text}>
            {[...Array(10)].map((_, i) => (
              <textPath
                ref={(ref) => (textsRef.current[i] = ref)}
                key={i}
                href="#curve"
                className={styles.textPath}
              >
                dahive agence digitale
              </textPath>
            ))}
          </text>
        </svg>
        <svg
          className={`${styles.svg} ${styles.svgCircle}`}
          viewBox="0 0 319 319"
          fill="none"
        >
          <path
            id="circle"
            d="M 100, 100 m 30, 0 a 30,30 0 1,0 -60,0 a 30,30 0 1,0  60,0"
          />
          <text className={styles.text}>
            {[...Array(4)].map((_, i) => (
              <textPath
                ref={(ref) => (contactsRef.current[i] = ref)}
                key={i}
                href="#circle"
                className={styles.textPath}
              >
                CONTACT
              </textPath>
            ))}
          </text>
        </svg>
      </div>
    </main>
  );
}
