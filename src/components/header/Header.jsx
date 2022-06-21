import { NavLink, Link } from "react-router-dom";
import { useSelector } from "react-redux";

import { FiShoppingCart } from "react-icons/fi";

// styles
import styles from "./Header.module.scss";

const Header = () => {
  const { totalQuantity } = useSelector((state) => state.cart);
  return (
    <header className={styles.header}>
      <h2 className={styles["header__logo"]}>
        <Link to="/">Shopping Cart</Link>
      </h2>
      <ul className={styles["header__navigation"]}>
        <li className={styles["header__item"]}>
          <NavLink className={styles["header__link"]} to="/">
            Home
          </NavLink>
        </li>
        <li className={styles["header__item"]}>
          <NavLink className={styles["header__link"]} to="/about">
            About
          </NavLink>
        </li>
        <li className={`${styles["header__item"]}`}>
          <NavLink className={styles["header__link"]} to="/products-list">
            Products
          </NavLink>
        </li>
        <li>
          <Link to="/cart" className={styles["header__button"]}>
            <span>Cart</span>
            <FiShoppingCart className={styles["header__icon"]} />
            <span className={styles["header__amount"]}>{totalQuantity}</span>
          </Link>
        </li>
      </ul>

      {/* <BiMenuAltRight className={styles["header__hamburger"]} />
      <CgClose className={styles["header__close"]} /> */}
    </header>
  );
};

export default Header;
