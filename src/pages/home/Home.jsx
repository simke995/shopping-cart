import Hero from "../../components/hero/Hero";

// styles
import styles from "./Home.module.scss";

const Home = () => {
  return (
    <div className={styles.home}>
      <Hero />
    </div>
  );
};

export default Home;
