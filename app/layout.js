"use client";

import Link from "next/link";
import { useEffect } from "react";
import { LazyMotion, domAnimation } from "framer-motion";
import { Inter } from "next/font/google";
import "./globals.scss";
import Lenis from "lenis";

const inter = Inter({ subsets: ["latin"] });

import styles from "../styles/page.module.scss";

export default function RootLayout({ children }) {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);

  return (
    <html lang="en">
      <body className={inter.className}>
        <Link className={styles.home} href="/">
          HOME
        </Link>
        <LazyMotion features={domAnimation}>{children}</LazyMotion>
      </body>
    </html>
  );
}
