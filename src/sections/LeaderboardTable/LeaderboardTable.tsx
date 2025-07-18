"use client";

import { useRef } from "react";
import classNames from "classnames";
import { useScroll, useTransform, motion } from "motion/react";

import { leaderboardHeaders, LeaderboardRow, leaderboardRows } from "./data";
import styles from "./LeaderboardTable.module.scss";
import ArrowUp from "../../../public/icons/table/arrow-up.svg";
import ArrowDown from "../../../public/icons/table/arrow-down.svg";
import Same from "../../../public/icons/table/minus.svg";
import { Button } from "@/components/UI";

const LeaderboardTable = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center end"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [400, 0]);

  return (
    <motion.section
      ref={ref}
      className={classNames(styles.leaderboardTableContainer, "container")}
    >
      <motion.div className={styles.leaderBoardTable} style={{ y }}>
        <div className={styles.leaderBoardTitleContainer}>
          <h2 className={styles.leaderBoardTitle}>LLM Leaderboard</h2>
          <Button variant="outline" size="small">
            Submit your model
          </Button>
        </div>
        <p className={styles.leaderBoardSubtitle}>
          We evaluate LLMs on key benchmarks using the Eleuther AI, a framework
          to test LLMs on a large number of different evaluation tasks. The
          higher the score, the better the LLM.
        </p>
        <table className={styles.table}>
          <thead>
            <tr>
              {leaderboardHeaders.map((header, index) => (
                <th key={index} className={styles.tableHeaderCell}>
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {leaderboardRows.slice(0, 8).map((row: LeaderboardRow, index) => (
              <tr key={index}>
                <td>
                  {row.trend === "up" && <ArrowUp />}
                  {row.trend === "down" && <ArrowDown />}
                  {row.trend === "same" && <Same />}
                </td>
                <td>{index + 1}</td>
                <td>{row.name}</td>
                <td>{row.average}</td>
                <td>{row.arc}</td>
                <td>{row.hellaswag}</td>
                <td>{row.mmlu}</td>
                <td>{row.truthqa}</td>
                <td>{row.winogrande}</td>
                <td>{row.gsm8k}</td>
                <td>{row.earnings}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </motion.div>
    </motion.section>
  );
};

export default LeaderboardTable;
