import React from "react";
import AdminProductDetail from "../features/admin/adminProductDetail";
import Navbar from "../features/navbar/Navbar";
import Footer from "../features/common/Footer";

const AdminProductDetailPage = () => {
  return (
    <div>
      <Navbar>
        <AdminProductDetail></AdminProductDetail>
      </Navbar>
      <Footer></Footer>
    </div>
  );
};

export default AdminProductDetailPage;
