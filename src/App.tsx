import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleOpen } from "./redux/slices/openSlice";
import { RootState } from "./redux/store";
import styles from "./App.module.scss";
// import { Aside } from "./components/Aside/Aside";
import { Header } from "./components/Header/Header";
import { Main } from "./components/Main/Main";
import { NewTask } from "./components/NewTask/NewTask";

function App() {
  const dispatch = useDispatch();
  const { isOpen } = useSelector((state: RootState) => state.modal);

  const handleClick = (e?: React.MouseEvent<HTMLButtonElement>) => {
    if (e) {
      e.preventDefault();
    }
    dispatch(toggleOpen(!isOpen));
  };

  const [searchValue, setSearchValue] = useState<string>("");

  return (
    <div className={styles.wrapper}>
      <Header searchValue={searchValue} setSearchValue={setSearchValue} />
      <div className={styles.container}>
        {/* <Aside /> */}
        <Main searchValue={searchValue} handleClick={handleClick} />
        {isOpen && <NewTask handleClick={handleClick} />}
      </div>
    </div>
  );
}

export default App;
