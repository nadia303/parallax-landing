import Image from "next/image";
import classNames from "classnames";
import styles from "./TextComponent.module.scss";
import Button from "@/components/UI/Button/Button";

const TextComponent = () => {
  return (
    <section
      className={classNames(styles.textComponentContainer, "smaller-container")}
    >
      <div className={styles.textComponentLeftBlock}>
        <h2 className={styles.textComponentTitle}>Text here </h2>
        <p className={styles.textComponentSubtitle}>
          Every month, we run a competition between all the AI models submitted
          on a leaderboard. The best model will be featured and will earn
          tokens.
        </p>
        <Button variant="outline" size="small">
          Read Whitepaper
        </Button>
      </div>
      <Image src="/pictures/moon.webp" alt="Moon" width={400} height={400} />
    </section>
  );
};

export default TextComponent;
