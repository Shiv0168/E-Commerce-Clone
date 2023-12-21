import React from "react";
import Navbar from "../features/navbar/Navbar";
import UserProfile from "../features/user/components/UserProfile";
import Footer from "../features/common/Footer";

const UserProfilepage = () => {
  return (
    <div>
      <Navbar>
        <h1 className="mx-auto text-2xl">My Profile</h1>
        <UserProfile></UserProfile>
      </Navbar>
      <Footer></Footer>
    </div>
  );
};

export default UserProfilepage;
