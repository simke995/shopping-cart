import { FaPlus, FaMinus } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { cartActions } from "../../features/cart/cartSlice";

// styles
import styles from "./CartItem.module.scss";

const CartItem = ({ id, price, name, images, quantity, totalPrice }) => {
  const dispatch = useDispatch();
  const priceFinal = price.toFixed(2) / 10;
  const totalPriceFinal = totalPrice.toFixed(2) / 10;
  const imgSrc = images[0].thumbnails.large.url;

  const removeCartHandler = () => {
    dispatch(cartActions.removeFromCart({ id, quantity, totalPrice }));
  };

  const decreaseQuantityHandler = () => {
    dispatch(cartActions.decrease({ id }));
  };

  const increaseQuantityHandler = () => {
    dispatch(cartActions.increase({ id }));
  };

  return (
    <li className={styles["cart-item"]}>
      <div>
        <img className={styles["cart-item__image"]} src={imgSrc} alt={name} />
      </div>
      <div>
        <h4 className={styles["cart-item__name"]}>{name}</h4>
        <p className={styles["cart-item__price"]}>${priceFinal}</p>
        <button
          className={styles["cart-item__remove"]}
          onClick={removeCartHandler}
        >
          remove item
        </button>
      </div>
      <div className={styles["cart-item__holder"]}>
        <div>
          <FaMinus
            onClick={decreaseQuantityHandler}
            className={styles["cart-item__icon"]}
          />
          <span className={styles["cart-item__quantity"]}>{quantity}</span>
          <FaPlus
            className={styles["cart-item__icon"]}
            onClick={increaseQuantityHandler}
          />
        </div>
        <p className={styles["cart-item__total"]}>${totalPriceFinal}</p>
      </div>
    </li>
  );
};

export default CartItem;
