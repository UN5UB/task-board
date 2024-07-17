import React from "react";
import styles from "./Tasks.module.scss";

export const Tasks = ({ handleClick }) => {
  return (
    <div className={styles.tasks}>
      <h2>Tasks</h2>
      <div className={styles.tools}>
        <button>
          <img src="icons/Tools/arrow-left.svg" alt="left" />
        </button>
        <button>
          <img src="icons/Tools/arrow-right.svg" alt="right" />
        </button>

        <button>
          <img src="icons/Tools/users.svg" alt="users" />
        </button>
        <button>
          <img src="icons/Tools/filter.svg" alt="right" />
        </button>
        <button onClick={handleClick} className={styles.add}>
          New task <img src="icons/Tools/plus.svg" alt="plus" />
        </button>
      </div>
    </div>
  );
};
