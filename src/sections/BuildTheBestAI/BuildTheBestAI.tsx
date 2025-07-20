"use client";

import classNames from "classnames";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import styles from "./BuildTheBestAI.module.scss";
import { Button } from "@/components/UI";
import Star from "../../../public/icons/buildAI/star.svg";

const BuildTheBestAI = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  const { scrollYProgress: yScrollProgress } = useScroll({
    target: ref,
    offset: ["start end", "end center"],
  });

  const { scrollYProgress: opacityScrollProgress } = useScroll({
    target: ref,
    offset: ["start center", "end center"],
  });

  const y = useTransform(yScrollProgress, [0, 1], ["100%", "-50%"]);
  const opacity = useTransform(
    opacityScrollProgress,
    [0, 0.8, 1],
    [1, 0.5, 0.1]
  );

  return (
    <motion.section
      className={classNames(styles.buildTheBestAIContainer, "container")}
      style={{ opacity }}
      ref={ref}
    >
      <motion.div
        initial={{ x: "-100px", y: "-100px", opacity: 1 }}
        animate={
          isInView
            ? {
                x: "300px",
                y: "300px",
                opacity: 0,
              }
            : {}
        }
        transition={{ duration: 1, ease: "easeInOut" }}
        className={styles.fallingStar}
      >
        <Star />
      </motion.div>
      <motion.div className={styles.buildTheBestAIContent} style={{ y }}>
        <h2 className={styles.buildTheBestAITitle}>
          Crowdsourcing our collective intelligence to build the best AI
        </h2>
        <p className={styles.buildTheBestAISubtitle}>
          Open source AIs have been lagging in development behind OpenAI with
          billions of dollars. We run competitions between AI models to find and
          pay for the best AI model. Users will be able to access the best AI
          models.
        </p>
        <Button variant="outline" size="small">
          Use the cutting edge AI
        </Button>
      </motion.div>
    </motion.section>
  );
};

export default BuildTheBestAI;
