import React from "react";
import UserOrders from "../features/user/components/UserOrders";
import Navbar from "../features/navbar/Navbar";
import Footer from "../features/common/Footer";

const UserOrdersPage = () => {
  return (
    <div>
      <Navbar>
        <UserOrders></UserOrders>
      </Navbar>
      <Footer></Footer>
    </div>
  );
};

export default UserOrdersPage;
