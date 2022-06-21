import { Fragment } from "react";
import { Link } from "react-router-dom";

import CartItem from "../../components/cart/CartItem";
import { useSelector, useDispatch } from "react-redux";
import { modalActions } from "../../features/modal/modalSlice";

// styles
import styles from "./Cart.module.scss";

const Cart = () => {
  const { cartItems, totalAmount } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const fixedTotalAmount = `${totalAmount.toFixed(2) / 10}`;

  if (cartItems.length === 0) {
    return (
      <div className={styles["empty-cart"]}>
        <h1 className={styles["empty-cart__heading"]}>
          Unfortunately, your cart is empty
        </h1>
        <p className={styles["empty-cart__content"]}>
          Please add something in your cart
        </p>
        <Link to="/products-list" className={styles["cart__button"]}>
          shop now
        </Link>
      </div>
    );
  } else {
    return (
      <Fragment>
        <ul className={styles.cart}>
          {cartItems &&
            cartItems.map((cart) => {
              return <CartItem key={cart.id} {...cart} />;
            })}
          <hr className={styles["cart__hr"]} />
          <p className={styles["cart__total"]}>
            Total price: <span>${fixedTotalAmount}</span>
          </p>
          <div className={styles["cart__holder"]}>
            <Link to="/products-list" className={`${styles["cart__button"]}`}>
              continue shopping
            </Link>
            <button
              className={`${styles["cart__button"]} ${styles["cart__button--sub"]}`}
              onClick={() => dispatch(modalActions.showModal())}
            >
              Clear cart
            </button>
          </div>
        </ul>
      </Fragment>
    );
  }
};

export default Cart;
