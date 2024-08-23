"use client";

import { useState, useEffect, useRef } from "react";
import { m, useSpring } from "framer-motion";
import Confetti from "react-dom-confetti";

import styles from "./sendEmailButton.module.scss";

export default function Page() {
  const [status, setStatus] = useState("idle");
  const ref = useRef(null);

  const handleClick = () => {
    setStatus("loading");
    setTimeout(() => setStatus("success"), 2000);
  };

  const variants = {
    initial: (custom) => ({
      opacity: custom === "idle" ? 1 : 0,
      rotate: 0,
    }),
    animate: (custom) => ({
      opacity: status === custom ? 1 : 0,
      scale: status === custom ? 1 : 0,
      rotate: status === "loading" ? 1500 : 0,
    }),
  };

  const transition = {
    duration: 0.3,
    ease: "easeOut",
    rotate: {
      duration: 5,
      ease: "linear",
    },
  };

  const width = useSpring(235, { damping: 15, stiffness: 200 });

  useEffect(() => {
    const element = ref.current?.getBoundingClientRect();
    width.set(element?.width + 100);
  }, [status]);

  const confettiConfig = {
    angle: "90",
    spread: "194",
    startVelocity: "10",
    elementCount: "21",
    dragFriction: "0.11",
    duration: "1600",
    stagger: "7",
    width: "8px",
    height: "8px",
    perspective: "511px",
    colors: ["#a864fd", "#29cdff", "#78ff44", "#ff718d", "#fdff6a"],
  };

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <Confetti
          active={status === "success"}
          className={styles.confettis}
          config={confettiConfig}
        />
        <m.button
          onClick={handleClick}
          className={`${styles.button} ${styles[status]}`}
          style={{ width }}
        >
          <div ref={ref} className={styles.wrapper}>
            <div className={styles.icon}>
              <m.svg
                className={styles.sendIcon}
                viewBox="0 0 512 512"
                variants={variants}
                initial="initial"
                animate="animate"
                custom="idle"
                transition={transition}
              >
                <path
                  style={{ fill: "#FE9923" }}
                  d="M120,339.226V496.99c0,14.374,18.38,20.499,26.997,8.994l77.065-102.729l23.492-12.037L501.919,31.57
	l4.731-27.966l-41.329,22.839L119.916,326.288L120,339.226z"
                />
                <path
                  style={{ fill: "#FEDB41" }}
                  d="M491.237,1.196C490.56,1.467,8.933,243.282,8.279,243.61c-10.503,5.251-11.149,20.024-1.157,26.191
	l112.866,69.463L506.638,3.642l0,0C502.707,0.236,497.062-1.218,491.237,1.196z"
                />
                <path
                  style={{ fill: "#FFCC33" }}
                  d="M507.165,4.34c-0.216-0.211-0.287-0.538-0.515-0.736l-2.935,4.16l-279.653,395.49l173.071,106.509
	c9.014,5.541,20.68,0.258,22.603-10.005l92.021-481.989C512.735,12.682,510.673,7.755,507.165,4.34z"
                />
              </m.svg>

              <svg width="100" height="100" viewBox="0 0 25 25">
                <m.path
                  d="M12 23C5.9 23 1 18.1 1 12c0-.6.4-1 1-1s1 .4 1 1c0 5 4 9 9 9s9-4 9-9-4-9-9-9c-.6 0-1-.4-1-1s.4-1 1-1c6.1 0 11 4.9 11 11s-4.9 11-11 11z"
                  fill="#000000"
                  variants={variants}
                  initial="initial"
                  animate="animate"
                  custom="loading"
                  transition={transition}
                ></m.path>
              </svg>
              <svg width="100" height="100" viewBox="0 0 20 23">
                <m.path
                  d="M20 6L9 17L4 12"
                  fill="none"
                  stroke="white"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{
                    pathLength: status === "success" ? 1 : 0,
                    opacity: status === "success" ? 1 : 0,
                  }}
                  transition={{
                    duration: 0.7,
                    ease: "easeInOut",
                  }}
                ></m.path>
              </svg>
            </div>
            <span className={styles.text}>
              {status === "idle"
                ? "Envoyer"
                : status === "loading"
                ? "Envoi en cours..."
                : "Email envoyé ! Merci 🙂"}
            </span>
          </div>
        </m.button>
      </div>
    </main>
  );
}
