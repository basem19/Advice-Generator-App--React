import { useAdvice } from "../../hooks/useAdvice";
import diceIcon from "../../assets/icon-dice.svg";
import styles from "./AdviceCard.module.css";
import Divider from "./Divider";

const AdviceCard = () => {
  const { data, error, isFetching, isLoading, refetch } = useAdvice();

  const advice = data?.slip.advice;
  const id = data?.slip.id;

  return (
    <main className={styles.page}>
      <div className={styles.card}>

        <p className={styles.adviceId}>
          ADVICE #{isLoading ? "..." : id}
        </p>

        <h1 className={styles.adviceText}>
          {error ? "Failed to load advice." : `${advice ? `“${advice}”` : "Loading..."}`}
        </h1>

        <Divider />
        <button
          onClick={() => refetch()}
          disabled={isFetching || isLoading}
          className={styles.diceBtn}
        >
          <img src={diceIcon} alt="generate advice" />
        </button>
      </div>
    </main>
  );
};

export default AdviceCard;
