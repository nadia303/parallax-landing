"use client";

import classNames from "classnames";
import ReactLenis from "lenis/react";
import styles from "./page.module.scss";
import { Footer, Header } from "@/components/UI";
import { BuildTheBestAI, Hero, LeaderboardTable, Projects } from "@/sections";
import { useWindowSize } from "@/hooks/useWindowSize";

export default function Home() {
  const { width } = useWindowSize();
  const isMobile = width < 550;

  return (
    <div>
      <main>
        <ReactLenis
          root
          options={{
            touchMultiplier: 1.5,
            syncTouch: false,
          }}
        >
          <div className={classNames(styles.containerWithPlanet)}>
            <Header />
            {!isMobile && (
              <div
                className="container"
                style={{
                  position: "sticky",
                  top: 0,
                  height: "120vh",
                  width: "100%",
                  backgroundImage: "url(/pictures/background.png)",
                  backgroundPosition: "top right",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                }}
              ></div>
            )}
            <Hero />
            <Projects />
            <BuildTheBestAI />
          </div>
          <div>
            <LeaderboardTable />
          </div>
        </ReactLenis>
      </main>
      <Footer />
    </div>
  );
}
