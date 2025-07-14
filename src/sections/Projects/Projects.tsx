import classNames from "classnames";
import styles from "./Projects.module.scss";
import Solana from "../../../public/icons/projects/solana.svg";
import Arweave from "../../../public/icons/projects/arweave.svg";
import Bittensor from "../../../public/icons/projects/bittensor.svg";
import Start from "../../../public/icons/projects/start.svg";
import Telegram from "../../../public/icons/projects/telegram.svg";

const Projects = () => {
  return (
    <section className={classNames(styles.projectsContainer, "full-width")}>
      <h2 className={styles.projectsTitle}>
        Projects integrated into the Arrakis AI Ecosystem
      </h2>
      <div className={styles.projectsIconsContainer}>
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
      </div>
    </section>
  );
};

export default Projects;
