import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getSingleProduct } from "../../features/products/singleProductSlice";
import { cartActions } from "../../features/cart/cartSlice";

import { Audio } from "react-loader-spinner";

// styles
import styles from "./SingleProduct.module.scss";

const SingleProduct = () => {
  const dispatch = useDispatch();
  const { productId } = useParams();

  const { singleProduct, isLoading } = useSelector(
    (state) => state.singleProduct
  );

  useEffect(() => {
    dispatch(getSingleProduct(productId));
  }, [dispatch, productId]);

  const { category, id, price, name, images, description, stock, company } =
    singleProduct;

  const addCartHandler = (item) => {
    dispatch(
      cartActions.addToCart({ ...item, quantity: 1, totalPrice: price })
    );
  };

  if (isLoading) {
    return (
      <div className="loader-container">
        <Audio color="rgb(100, 139, 139)" />
      </div>
    );
  } else {
    return (
      <div className={styles["single-product"]}>
        <Link className={styles["single-product__button"]} to="/products-list">
          back to products
        </Link>
        <div className={styles["single-product__holder"]}>
          {images && (
            <img
              className={styles["single-product__image"]}
              src={images[0].url}
              alt={name}
            />
          )}

          <div className={styles["single-product__content"]}>
            <h1 className={styles["single-product__title"]}>{name}</h1>
            <p className={styles["single-product__price"]}>
              ${price && price.toFixed(2) / 100}
            </p>
            <p className={styles["single-product__description"]}>
              {description}
            </p>
            <div className={styles["single-product__footer"]}>
              <p>
                <span>category:</span>
                {category}
              </p>
              <p>
                <span>company:</span>
                {company}
              </p>
            </div>
            {stock > 0 ? (
              <button
                className={styles["single-product__button"]}
                onClick={() => addCartHandler({ id, price, name, images })}
              >
                Add to cart
              </button>
            ) : (
              <button
                disabled
                className={`${styles["single-product__button"]} ${styles["single-product__button--sub"]}`}
              >
                unavailable
              </button>
            )}
          </div>
        </div>
      </div>
    );
  }
};

export default SingleProduct;
