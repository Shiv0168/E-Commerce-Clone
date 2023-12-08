import React from "react";
import Home from "./pages/Home";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CartPage from "./pages/CartPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Home></Home>
      </>
    ),
  },
  {
    path: "/login",
    element: (
      <>
        <LoginPage></LoginPage>
      </>
    ),
  },
  {
    path: "/signup",
    element: (
      <>
        <SignupPage></SignupPage>
      </>
    ),
  },
  {
    path: "/cart",
    element: (
      <>
        <CartPage></CartPage>
      </>
    ),
  },
]);

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
