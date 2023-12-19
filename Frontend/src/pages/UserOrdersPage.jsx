import React from "react";
import UserOrders from "../features/user/components/UserOrders";
import Navbar from "../features/navbar/Navbar";

const UserOrdersPage = () => {
  return (
    <div>
      <Navbar>
        <UserOrders></UserOrders>
      </Navbar>
    </div>
  );
};

export default UserOrdersPage;
