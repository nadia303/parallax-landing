import Image from "next/image";
import styles from "./page.module.scss";
import { Footer, Header } from "@/components/UI";
import { BuildTheBestAI, Hero, LeaderboardTable, Projects, TextComponent } from "@/sections";

export default function Home() {
  return (
    <div>
      <Header />
      <main>
        <div className={styles.containerWithPlanet}>
          <Image
            src="/pictures/planet.webp"
            alt="Planet Image"
            width={776}
            height={776}
            className={styles.stickyImage}
          />
          <Hero />
          <BuildTheBestAI />
          <Projects />
          <LeaderboardTable />
        </div>
        <TextComponent />
      </main>
      <Footer />
    </div>
  );
}
