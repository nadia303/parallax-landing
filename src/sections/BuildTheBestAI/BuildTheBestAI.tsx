import classNames from "classnames";
import styles from "./BuildTheBestAI.module.scss";
import { Button } from "@/components/UI";

const BuildTheBestAI = () => {
  return (
    <section className={classNames(styles.buildTheBestAIContainer, "container")}>
      <h2 className={styles.buildTheBestAITitle}>
        Crowdsourcing our collective intelligence to build the best AI
      </h2>
      <p className={styles.buildTheBestAISubtitle}>
        Open source AIs have been lagging in development behind OpenAI with
        billions of dollars.We run competitions between AI models to find and
        pay for the best AI model. Users will be able to access the best AI
        models.
      </p>
      <Button variant="outline" size="small">
        Use the cutting edge AI
      </Button>
    </section>
  );
};

export default BuildTheBestAI;
