import Product from "./Product";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../features/products/productsSlice";

import { Audio } from "react-loader-spinner";

// styles
import styles from "./ProductsList.module.scss";

const ProductsList = () => {
  const { products, isLoading } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <>
      {isLoading && (
        <div className="loader-container">
          <Audio color="rgb(100, 139, 139)" />
        </div>
      )}
      {!isLoading && (
        <>
          {/* <p>{products.length} products found</p> */}
          <ul className={styles["products-container"]}>
            {products.map((product) => (
              <Product
                key={product.id}
                id={product.id}
                name={product.name}
                price={product.price}
                image={product.image}
              />
            ))}
          </ul>
        </>
      )}
    </>
  );
};

export default ProductsList;
