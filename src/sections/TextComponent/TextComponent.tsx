"use client";

import Image from "next/image";
import classNames from "classnames";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import styles from "./TextComponent.module.scss";
import Button from "@/components/UI/Button/Button";

const TextComponent = () => {
  const ref = useRef(null);

  const { scrollYProgress: yScrollProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const { scrollYProgress: opacityScrollProgress } = useScroll({
    target: ref,
    offset: ["start start", "end center"],
  });

  const y = useTransform(yScrollProgress, [0, 1], ["100%", "-20%"]);
  const opacity = useTransform(opacityScrollProgress, [0, 0.7, 1], [1, 1, 0.1]);

  return (
    <section
      className={classNames(styles.textComponentContainer, "smaller-container")}
      ref={ref}
    >
      <motion.div
        className={styles.textComponentContent}
        style={{ y, opacity }}
      >
        <div className={styles.textComponentLeftBlock}>
          <h2 className={styles.textComponentTitle}>Text here </h2>
          <p className={styles.textComponentSubtitle}>
            Every month, we run a competition between all the AI models
            submitted on a leaderboard. The best model will be featured and will
            earn tokens.
          </p>
          <Button variant="outline" size="small">
            Read Whitepaper
          </Button>
        </div>
        <Image
          src="/pictures/moon.webp"
          alt="Moon"
          width={400}
          height={400}
          className={styles.textComponentImage}
        />
      </motion.div>
    </section>
  );
};

export default TextComponent;
