"use client";

import classNames from "classnames";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import styles from "./BuildTheBestAI.module.scss";
import { Button } from "@/components/UI";
import Star from "../../../public/icons/buildAI/star.svg";

const BuildTheBestAI = () => {
  const ref = useRef(null);
  const contentRef = useRef(null);
  const isInView = useInView(contentRef, {});

  const { scrollYProgress: yScrollProgress } = useScroll({
    target: ref,
    offset: ["start start", "end center"],
  });

  const { scrollYProgress: opacityScrollProgress } = useScroll({
    target: ref,
    offset: ["start start", "end center"],
  });

  const y = useTransform(yScrollProgress, [0, 0.3, 1], ["100%", "0%", "-20%"]);
  const opacity = useTransform(opacityScrollProgress, [0, 0.7, 1], [1, 1, 0.1]);

  return (
    <motion.section
      className={classNames(styles.buildTheBestAIContainer, "container")}
      style={{ opacity }}
      ref={ref}
    >
      <motion.div
        initial={{ x: "-1500px", y: "-1500px", opacity: 0 }}
        animate={
          isInView
            ? {
                x: "5000px",
                y: "5000px",
                opacity: 1,
              }
            : {}
        }
        transition={{
          x: { duration: 1, ease: "easeOut", delay: 0.2 },
          y: { duration: 1, ease: "easeOut", delay: 0.2 },
          opacity: {
            duration: 0.4,
            ease: "easeOut",
          },
        }}
        className={styles.fallingStar}
      >
        <Star />
      </motion.div>
      <motion.div
        className={styles.buildTheBestAIContent}
        style={{ y }}
        ref={contentRef}
      >
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
