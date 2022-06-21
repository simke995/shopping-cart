import { Link } from "react-router-dom";
import { GiMagnifyingGlass } from "react-icons/gi";

// styles
import styles from "./Product.module.scss";

const Product = ({ id, name, price, image }) => {
  const finalPrice = `${price.toFixed(2) / 100}`;

  return (
    <li className={styles.product}>
      <img className={styles["product__image"]} src={image} alt={name} />
      <Link className={styles["product__link"]} to={`/products-list/${id}`}>
        <GiMagnifyingGlass />
      </Link>
      <div className={styles["product__footer"]}>
        <h4 className={styles["product__title"]}>{name}</h4>
        <p className={styles["product__price"]}>${finalPrice}</p>
      </div>
      {/* <Link
        to={`/products-list/${id}`}
        className={`${styles["product__link"]} ${styles["product__link--sub"]}`}
      >
        more details
      </Link> */}
    </li>
  );
};

export default Product;
