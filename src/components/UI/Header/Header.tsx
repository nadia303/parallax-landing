import styles from "./Header.module.scss";
import Button from "../Button/Button";
import classNames from "classnames";

const Header = () => {
  return (
    <header className={classNames(styles.headerContainer, "container")}>
      <Button>LLM Leaderboard</Button>
      <Button variant="outline">Buy Spice AI</Button>
    </header>
  );
};

export default Header;
