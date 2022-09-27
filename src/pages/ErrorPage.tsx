import styles from "./ErrorPage.module.scss";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className={styles.Container}>
      <p>Not Found</p>
      <Link to="/">Main Page</Link>
    </div>
  );
};

export { ErrorPage };
