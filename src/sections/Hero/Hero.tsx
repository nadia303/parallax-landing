"use client";

import classNames from "classnames";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/UI";
import styles from "./Hero.module.scss";

const Hero = () => {
  const ref = useRef(null);

  const { scrollY: scrollYButton } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const { scrollYProgress: scrollYProgressTitle, scrollY: scrollYTitle } =
    useScroll({
      target: ref,
      offset: ["start start", "end start"],
    });

  const textY = useTransform(scrollYTitle, [0, 180], ["0%", "-15%"]);
  const textScale = useTransform(scrollYTitle, [0, 180], ["1", "0.98"]);
  const button1Y = useTransform(scrollYButton, [0, 120], ["50%", "-120%"]);
  const button2Y = useTransform(scrollYButton, [0, 120], ["100%", "-120%"]);
  const button3Y = useTransform(scrollYButton, [0, 120], ["150%", "-120%"]);

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
    >
      <motion.div className={styles.heroInfo} style={{ y: textY }}>
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
          <p className={styles.infoCardNumber}>10,873</p>
          <p className={styles.infoCardText}>LLM models</p>
        </motion.div>
        <motion.div
          className={styles.infoCardContainer}
          style={{ y: button3Y }}
        >
          <p className={styles.infoCardNumber}>10,873</p>
          <p className={styles.infoCardText}>LLM models</p>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
