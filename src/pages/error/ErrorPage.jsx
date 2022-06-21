import { Link } from "react-router-dom";

// styles
import styles from "./Error.module.scss";

const ErrorPage = () => {
  return (
    <div className={styles.error}>
      <h1 className={styles["error__heading"]}>Ooops! :(((</h1>
      <h3
        className={`${styles["error__heading"]} ${styles["error__heading--sub"]}`}
      >
        page not found
      </h3>
      <p className={styles["error__content"]}>
        We're sorry, the page you requested could not be found. <br />
        Please go back to the homepage.
      </p>
      <div className={styles["error__holder"]}>
        <Link className={styles["error__button"]} to="/">
          back to home
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
