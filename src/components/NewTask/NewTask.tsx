import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../../redux/slices/taskSlice";
import styles from "./NewTask.module.scss";

interface NewTaskProps {
  handleClick: () => void;
}

export const NewTask: React.FC<NewTaskProps> = ({ handleClick }) => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSave = () => {
    if (title && description) {
      dispatch(addTask(title, description));
      handleClick();
    } else {
      alert("Title and description cannot be empty");
    }
  };

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <div className={styles.head}>
          <h2>New task</h2>
          <button onClick={handleClick}>
            <svg
              width="30px"
              height="30px"
              viewBox="0 0 512 512"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <title>cancel</title>
                <g id="work-case" fill="#000000">
                  <polygon
                    id="Close"
                    points="328.96 30.2933333 298.666667 0 164.48 134.4 30.2933333 0 0 30.2933333 134.4 164.48 0 298.666667 30.2933333 328.96 164.48 194.56 298.666667 328.96 328.96 298.666667 194.56 164.48"
                  />
                </g>
              </g>
            </svg>
          </button>
        </div>
        <h3>Title</h3>
        <input
          className={styles.title}
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <h3>Description</h3>
        <textarea
          className={styles.description}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
        <button className={styles.save} onClick={handleSave}>
          Save
        </button>
      </div>
    </div>
  );
};
