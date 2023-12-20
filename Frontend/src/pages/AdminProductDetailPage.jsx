import React from "react";
import AdminProductDetail from "../features/admin/adminProductDetail";
import Navbar from "../features/navbar/Navbar";

const AdminProductDetailPage = () => {
  return (
    <div>
      <Navbar>
        <AdminProductDetail></AdminProductDetail>
      </Navbar>
    </div>
  );
};

export default AdminProductDetailPage;
