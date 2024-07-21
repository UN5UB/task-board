import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { removeTask, updateTask } from "../../../redux/slices/taskSlice";
import styles from "./Card.module.scss";
import { Todo as TodoType } from "../../../redux/slices/taskSlice";

interface CardProps {
  task: TodoType;
}

export const Card: React.FC<CardProps> = ({ task }) => {
  const dispatch = useDispatch();

  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(task.title);
  const [description, setDescription] = useState(task.description);

  const handleSave = () => {
    dispatch(updateTask({ ...task, title, description }));
    setIsEditing(false);
  };

  const handleDelete = () => {
    dispatch(removeTask(task.id));
  };

  return (
    <div className={styles.card}>
      {isEditing ? (
        <>
          <div className={styles.inputs}>
            <input
              className={styles.title}
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <textarea
              className={styles.description}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <button className={styles.save} onClick={handleSave}>
            Save
          </button>
        </>
      ) : (
        <>
          <div className={styles.header}>
            <svg
              width="44px"
              height="44px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM15 9C15 10.6569 13.6569 12 12 12C10.3431 12 9 10.6569 9 9C9 7.34315 10.3431 6 12 6C13.6569 6 15 7.34315 15 9ZM12 20.5C13.784 20.5 15.4397 19.9504 16.8069 19.0112C17.4108 18.5964 17.6688 17.8062 17.3178 17.1632C16.59 15.8303 15.0902 15 11.9999 15C8.90969 15 7.40997 15.8302 6.68214 17.1632C6.33105 17.8062 6.5891 18.5963 7.19296 19.0111C8.56018 19.9503 10.2159 20.5 12 20.5Z"
                  fill="#2563dc"
                ></path>
              </g>
            </svg>
            <h4>{task.title}</h4>
            <div className={styles.tools}>
              <button onClick={() => setIsEditing(true)}>
                <img src="icons/Tools/edit.svg" alt="edit" />
              </button>
              <button onClick={handleDelete}>
                <img src="icons/Tools/delete.svg" alt="delete" />
              </button>
            </div>
          </div>
          <div className={styles.description}>
            <p>{task.description}</p>
          </div>
        </>
      )}
    </div>
  );
};
