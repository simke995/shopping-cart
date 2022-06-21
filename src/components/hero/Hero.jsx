import { Link } from "react-router-dom";

import heroBg from "../../assets/hero-bcg.jpeg";

// styles
import styles from "./Hero.module.scss";

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div>
        <h2
          className={`${styles["hero__heading"]} ${styles["hero__heading--sub"]}`}
        >
          Online
        </h2>
        <h1 className={styles["hero__heading"]}>shopping</h1>
        <p className={styles["hero__content"]}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus,
          natus. Dicta incidunt, pariatur reprehenderit deserunt aut asperiores
          animi veritatis maxime beatae, id esse blanditiis saepe accusantium
          labore fuga a nihil.
        </p>
        <Link className={styles["hero__button"]} to="/products-list">
          get started
        </Link>
      </div>

      <img className={styles["hero__image"]} src={heroBg} alt="hero" />
    </section>
  );
};

export default Hero;
