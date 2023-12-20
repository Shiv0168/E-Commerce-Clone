import React from "react";
import AdminOrders from "../features/admin/AdminOrders";
import Navbar from "../features/navbar/Navbar";

const AdminOrdersPage = () => {
  return (
    <div>
      <Navbar>
        <AdminOrders></AdminOrders>
      </Navbar>
    </div>
  );
};

export default AdminOrdersPage;
