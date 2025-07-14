import { Button, InfoCard } from "@/components/UI";
import styles from "./Hero.module.scss";
import { heroData, HeroDataItem } from "./data";
import classNames from "classnames";

const Hero = () => {
  return (
    <section className={classNames(styles.heroContainer, "container")}>
      <div className={styles.heroInfo}>
        <h1 className={styles.title}>
          A new economic primitive for funding decentralized AI
        </h1>
        <p className={styles.subtitle}>
          We track, rank and pay for the best open source decentralized LLMs to
          compete against OpenAI
        </p>
        <Button variant="outline">Buy Spice AI</Button>
      </div>
      <div className={styles.heroNumbers}>
        {heroData.map((el: HeroDataItem) => (
          <InfoCard key={el.id} number={el.number} text={el.text} />
        ))}
      </div>
    </section>
  );
};

export default Hero;
