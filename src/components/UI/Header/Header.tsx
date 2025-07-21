"use client";

import classNames from "classnames";
import { useRef, useState } from "react";
import { motion, useMotionValueEvent, useScroll } from "motion/react";
import styles from "./Header.module.scss";
import Button from "../Button/Button";
import { useWindowSize } from "@/hooks/useWindowSize";

const Header = () => {
  const [isFixed, setIsFixed] = useState(true);
  const ref = useRef(null);
  const { scrollY } = useScroll();
  const { width } = useWindowSize();
  const isMobile = width < 550;

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (!isMobile) {
      setIsFixed(latest < 140);
    } else {
      setIsFixed(false);
    }
  });

  return (
    <motion.div
      ref={ref}
      className={classNames(
        styles.headerContainer,
        {
          [styles.fixed]: isFixed && !isMobile,
          [styles.absolute]: !isFixed || isMobile,
        },
        "container"
      )}
    >
      <Button size="medium">LLM Leaderboard</Button>
      <Button variant="outline" size="medium">
        Buy Spice AI
      </Button>
    </motion.div>
  );
};

export default Header;
