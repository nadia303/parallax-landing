import styles from "./InfoCard.module.scss";

interface InfoCardProps {
  number: string;
  text: string;
}

const InfoCard = ({ number, text }: InfoCardProps) => {
  return (
    <div className={styles.infoCardContainer}>
      <p className={styles.infoCardNumber}>{number}</p>
      <p className={styles.infoCardText}>{text}</p>
    </div>
  );
};

export default InfoCard;
