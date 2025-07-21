"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import classNames from "classnames";
import styles from "./Projects.module.scss";
import Solana from "../../../public/icons/projects/solana.svg";
import Arweave from "../../../public/icons/projects/arweave.svg";
import Bittensor from "../../../public/icons/projects/bittensor.svg";
import Start from "../../../public/icons/projects/start.svg";
import Telegram from "../../../public/icons/projects/telegram.svg";
import { useWindowSize } from "@/hooks/useWindowSize";

const Projects = () => {
  const ref = useRef(null);
  const { width } = useWindowSize();
  const isMobile = width < 550;

  const mobileYProgress = isMobile ? "start center" : "start start";

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: [mobileYProgress, "end center"],
  });

  const { scrollYProgress: scrollYProgressX } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const mobileYProgressY = isMobile
    ? ["300px", "0px", "-20px"]
    : ["100%", "0%", "-20%"];

  const x = useTransform(scrollYProgressX, [0, 1], ["0%", "-30%"]);
  const y = useTransform(scrollYProgress, [0, 0.4, 1], mobileYProgressY);

  return (
    <section
      ref={ref}
      className={classNames(styles.projectsContainer, "container")}
    >
      <motion.div className={styles.projectsContent} style={{ y }}>
        <h2 className={styles.projectsTitle}>
          Projects integrated into the Arrakis AI Ecosystem
        </h2>
        <motion.div className={styles.projectsIconsContainer} style={{ x }}>
          <Solana />
          <Arweave />
          <Bittensor />
          <Start />
          <Telegram />
          <Solana />
          <Arweave />
          <Bittensor />
          <Start />
          <Telegram />
          <Solana />
          <Arweave />
          <Bittensor />
          <Start />
          <Telegram />
          <Solana />
          <Arweave />
          <Bittensor />
          <Start />
          <Telegram />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Projects;
