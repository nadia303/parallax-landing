import classNames from "classnames";
import ReactLenis from "lenis/react";
import styles from "./page.module.scss";
import { Footer, Header } from "@/components/UI";
import { BuildTheBestAI, Hero, LeaderboardTable, Projects } from "@/sections";

export default function Home() {
  return (
    <div>
      <main>
        <ReactLenis root>
          <div className={classNames(styles.containerWithPlanet)}>
            <Header />
            <div
              className="container"
              style={{
                position: "sticky",
                top: 0,
                height: "120vh",
                width: "100%",
                backgroundImage: "url(/pictures/background.webp)",
                backgroundPosition: "top right",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
            ></div>
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
