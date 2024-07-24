"use client";

import { useRef } from "react";
import Image from "next/image";
import { m, useScroll, useTransform, useMotionValue } from "framer-motion";

import styles from "../../styles/textOpacity.module.scss";

export default function Page() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.7", "start 0.1"],
  });

  const x = useMotionValue(100);
  const input = [-200, 0, 200];
  const output = [0, 1, 0];
  const opacity = useTransform(x, input, output);

  console.log(x);

  return (
    <main className={styles.main}>
      <div style={{ height: "40vh" }} />
      <m.div drag="x" style={{ x, opacity }}>
        DRAG ME
      </m.div>
    </main>
  );
}
