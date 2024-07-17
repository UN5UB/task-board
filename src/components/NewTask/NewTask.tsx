import React from "react";
import styles from "./NewTask.module.scss";

export const NewTask = ({ handleClick }) => {
  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <div className={styles.head}>
          <h2>New task</h2>
          <button onClick={handleClick}>
            {" "}
            <svg
              width="30px"
              height="30px"
              viewBox="0 0 512 512"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              fill="#000000"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0" />

              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              />

              <g id="SVGRepo_iconCarrier">
                {" "}
                <title>cancel</title>{" "}
                <g
                  id="Page-1"
                  stroke="none"
                  stroke-width="1"
                  fill="none"
                  fillRule="evenodd"
                >
                  {" "}
                  <g
                    id="work-case"
                    fill="#000000"
                    transform="translate(91.520000, 91.520000)"
                  >
                    {" "}
                    <polygon
                      id="Close"
                      points="328.96 30.2933333 298.666667 1.42108547e-14 164.48 134.4 30.2933333 1.42108547e-14 1.42108547e-14 30.2933333 134.4 164.48 1.42108547e-14 298.666667 30.2933333 328.96 164.48 194.56 298.666667 328.96 328.96 298.666667 194.56 164.48"
                    >
                      {" "}
                    </polygon>{" "}
                  </g>{" "}
                </g>{" "}
              </g>
            </svg>
          </button>
        </div>
        <h3>Title</h3>
        <input className={styles.title} />
        <h3>Description</h3>
        <textarea className={styles.description}></textarea>
        <h3>Due Date</h3>
        <input className={styles.date} type="date" />
        <button className={styles.save}>Save</button>
      </div>
    </div>
  );
};
