import Link from "next/link";
import styles from "./Footer.module.scss";
import classNames from "classnames";

const Footer = () => {
  return (
    <footer className={classNames(styles.footerContainer, "full-width")}>
      <div className={classNames(styles.footerContentContainer, "container")}>
          <nav className={styles.footerCenter}>
            <Link href="/">Home</Link>
            <Link href="/leaderboard">Leaderboard</Link>
            <Link href="/about">About</Link>
          </nav>
        <div className={styles.footerDivider}></div>
        <div className={styles.footerBottom}>
        <div className={styles.footerLeft}>
          <span className={styles.dot}></span>
          <span className={styles.dot}></span>
          <span className={styles.dot}></span>
        </div>
        <div className={styles.footerRight}>
          <Link href="#">Terms of Use</Link>
          <Link href="#">Privacy Policy</Link>
          <Link href="#">Cookie Policy</Link>
        </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
