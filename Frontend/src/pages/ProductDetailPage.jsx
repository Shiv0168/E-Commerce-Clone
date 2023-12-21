import React from "react";
import Navbar from "../features/navbar/Navbar";
import ProductDetail from "../features/product/components/ProductDetail";
import Footer from "../features/common/Footer";

const ProductDetailPage = () => {
  return (
    <>
      <Navbar>
        <ProductDetail></ProductDetail>
      </Navbar>
      <Footer></Footer>
    </>
  );
};

export default ProductDetailPage;
