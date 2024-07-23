import { Nav } from "./Nav/Nav";
import { Login } from "./LogIn/Login";
import styles from "./Aside.module.scss";

export const Aside = () => {
  return (
    <aside className={styles.aside}>
      <Nav />
      <Login />
    </aside>
  );
};
