import ReactDOM from "react-dom";
import { useDispatch } from "react-redux";
import { modalActions } from "../../features/modal/modalSlice";
import { cartActions } from "../../features/cart/cartSlice";

// styles
import styles from "./Modal.module.scss";

const Modal = () => {
  const dispatch = useDispatch();

  const closeModal = () => {
    dispatch(modalActions.hideModal());
  };

  const clearCart = () => {
    dispatch(modalActions.hideModal());
    dispatch(cartActions.clearCart());
  };

  return (
    <div className={styles.modal}>
      <div className={styles["modal__content"]}>
        <h4 className={styles["modal__heading"]}>
          Are you sure you would like to remove all items from the shopping
          cart?
        </h4>
        <div className={styles["modal__holder"]}>
          <button onClick={clearCart} className={styles["modal__button"]}>
            confirm
          </button>
          <button
            className={`${styles["modal__button"]} ${styles["modal__button--sub"]}`}
            onClick={closeModal}
          >
            cancel
          </button>
        </div>
      </div>
    </div>
  );
};

ReactDOM.createPortal(<Modal />, document.getElementById("modal"));

export default Modal;
