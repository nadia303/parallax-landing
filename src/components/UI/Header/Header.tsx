"use client";

import classNames from "classnames";
import { useRef, useState } from "react";
import { motion, useMotionValueEvent, useScroll } from "motion/react";
import styles from "./Header.module.scss";
import Button from "../Button/Button";

const Header = () => {
  const [isFixed, setIsFixed] = useState(true);
  const ref = useRef(null);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsFixed(latest < 100);
  });

  return (
    <motion.div
      ref={ref}
      className={classNames(
        styles.headerContainer,
        {
          [styles.fixed]: isFixed,
          [styles.absolute]: !isFixed,
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
