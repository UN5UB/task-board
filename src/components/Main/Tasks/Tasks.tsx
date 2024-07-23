import styles from "./Tasks.module.scss";

interface Props {
  handleClick: () => void;
}

export const Tasks: React.FC<Props> = ({ handleClick }) => {
  return (
    <div className={styles.tasks}>
      <h2>Tasks</h2>
      <div className={styles.tools}>
        <button onClick={handleClick} className={styles.add}>
          New task <img src="icons/Tools/plus.svg" alt="plus" />
        </button>
      </div>
    </div>
  );
};
