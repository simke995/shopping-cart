import { Routes, Route } from "react-router-dom";

import { useSelector } from "react-redux";

// components
import Home from "./pages/home/Home";
import SingleProduct from "./pages/single-product/SingleProduct";
import About from "./pages/about/About";
import ErrorPage from "./pages/error/ErrorPage";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Cart from "./pages/cart/Cart";
import ProductsList from "./pages/products/ProductsList";
import Modal from "./components/modal/Modal";

// loader
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

const App = () => {
  const { showModal } = useSelector((state) => state.modal);

  return (
    <>
      {showModal && <Modal />}
      <>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products-list" element={<ProductsList />} />
            <Route
              path="/products-list/:productId"
              element={<SingleProduct />}
            />
            <Route path="/cart" element={<Cart />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </main>
        <Footer />
      </>
    </>
  );
};

export default App;
