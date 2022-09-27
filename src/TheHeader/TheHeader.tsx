import styles from "./TheHeader.module.scss";
import { Link } from "react-router-dom";

const TheHeader = () => {
  return (
    <header className={styles.Header}>
      <Link to="/">
        <p>CatWiki</p>
      </Link>
    </header>
  );
};

export { TheHeader };
