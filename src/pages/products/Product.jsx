import { Link } from "react-router-dom";
import { GiMagnifyingGlass } from "react-icons/gi";
import { useDispatch } from "react-redux";
import { cartActions } from "../../features/cart/cartSlice";

// styles
import styles from "./Product.module.scss";

const Product = ({ id, name, price, image }) => {
  const finalPrice = `${price.toFixed(2) / 100}`;
  const dispatch = useDispatch();

  const addCartHandler = (item) => {
    dispatch(
      cartActions.addToCart({
        ...item,
        quantity: 1,
        totalPrice: price,
      })
    );
  };

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
      <button onClick={() => addCartHandler({ id, name, price, image })}>
        add to cart
      </button>
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
