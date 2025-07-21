"use client";

import classNames from "classnames";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/UI";
import styles from "./Hero.module.scss";
import { useWindowSize } from "@/hooks/useWindowSize";

const Hero = () => {
  const ref = useRef(null);
  const contentRef = useRef(null);
  const { width } = useWindowSize();
  const isMobile = width < 550;

  const { scrollYProgress: scrollYButton } = useScroll({
    target: contentRef,
    offset: ["start center", "end start"],
  });

  const { scrollYProgress: scrollYProgressTitle, scrollY: scrollYTitle } =
    useScroll({
      target: ref,
      offset: ["start start", "end start"],
    });

  const textY = useTransform(scrollYTitle, [0, 180], ["0%", "-15%"]);
  const textScale = useTransform(scrollYTitle, [0, 180], ["1", "0.95"]);
  const button1Range = isMobile ? [0.3, 0.4] : [0.225, 0.4];
  const button2Range = isMobile ? [0.4, 0.5] : [0.25, 0.425];
  const button3Range = isMobile ? [0.5, 0.6] : [0.375, 0.45];
  const button1Y = useTransform(scrollYButton, button1Range, ["400%", "-80%"]);
  const button2Y = useTransform(scrollYButton, button2Range, ["450%", "-80%"]);
  const button3Y = useTransform(scrollYButton, button3Range, ["500%", "-80%"]);

  const titleColor =
    "linear-gradient(109.22deg, #b53ea4 3.07%, #fc6f32 47.61%, #ff4a59 93.05%)";
  const titleColorAnimated =
    "linear-gradient(0deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2)), linear-gradient(106.2deg, #FFD6F9 -12.33%, #FFCBB4 50.28%, #FFBEC3 114.17%)";
  const color = useTransform(
    scrollYProgressTitle,
    [0, 1],
    [titleColor, titleColorAnimated]
  );

  const textClip = useTransform(scrollYProgressTitle, [0, 1], ["text", "text"]);

  return (
    <section
      ref={ref}
      className={classNames(styles.heroContainer, "container")}
      style={{ position: isMobile ? "relative" : "absolute" }}
    >
      <motion.div
        className={styles.heroInfo}
        style={{ y: textY }}
        ref={contentRef}
      >
        <motion.h1
          className={styles.title}
          transition={{
            ease: "easeOut",
            duration: 1,
          }}
          style={{
            background: color,
            backgroundClip: textClip,
            WebkitBackgroundClip: "text",
            color: "transparent",
            scale: textScale,
          }}
        >
          A new economic primitive for funding decentralized AI
        </motion.h1>
        <p className={styles.subtitle}>
          We track, rank and pay for the best open source decentralized LLMs to
          compete against OpenAI
        </p>
        <div className={styles.buttonsContainer}>
          <Button variant="outline">Buy Spice AI</Button>
          <Button>Try Now</Button>
        </div>
      </motion.div>
      <div className={styles.heroNumbers}>
        <motion.div
          className={styles.infoCardContainer}
          style={{ y: button1Y }}
        >
          <p className={styles.infoCardNumber}>10,873</p>
          <p className={styles.infoCardText}>LLM models</p>
        </motion.div>
        <motion.div
          className={styles.infoCardContainer}
          style={{ y: button2Y }}
        >
          <p className={styles.infoCardNumber}>$72,470,728</p>
          <p className={styles.infoCardText}>paid to data scientists</p>
        </motion.div>
        <motion.div
          className={styles.infoCardContainer}
          style={{ y: button3Y }}
        >
          <p className={styles.infoCardNumber}>6,557</p>
          <p className={styles.infoCardText}>members</p>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
