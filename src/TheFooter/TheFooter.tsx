import styles from "./TheFooter.module.scss";
import { Link } from "react-router-dom";

const TheFooter = () => {
  return (
    <footer className={styles.Footer}>
      <Link to="/">
        <h2>CatWiki</h2>
      </Link>
      <p>created by Kajetan Szczepański</p>
    </footer>
  );
};

export { TheFooter };
