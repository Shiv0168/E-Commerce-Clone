import React, { useEffect } from "react";
import Home from "./pages/Home";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CartPage from "./pages/CartPage";
import Checkout from "./pages/Checkout";
import ProductDetailPage from "./pages/ProductDetailPage";
import Protected from "./features/auth/components/Protected";
import { useDispatch, useSelector } from "react-redux";
import { selectLoggedInUser } from "./features/auth/authSlice";
import { fetchItemByUserIdAsync } from "./features/cart/cartSlice";
import PageNotFound from "./pages/404";
import OrderSuccessPage from "./pages/OrderSuccessPage";
import UserOrdersPage from "./pages/UserOrdersPage";
import UserProfilepage from "./pages/UserProfilepage";
import { fetchLoggedInUserAsync } from "./features/user/userSlice";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Protected>
          <Home></Home>
        </Protected>
      </>
    ),
  },
  {
    path: "/product-detail/:id",
    element: (
      <>
        <Protected>
          <ProductDetailPage></ProductDetailPage>
        </Protected>
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
        <Protected>
          <CartPage></CartPage>
        </Protected>
      </>
    ),
  },

  {
    path: "/checkout",
    element: (
      <>
        <Protected>
          <Checkout></Checkout>
        </Protected>
      </>
    ),
  },
  {
    path: "/order-success/:id",
    element: (
      <>
        <Protected>
          <OrderSuccessPage></OrderSuccessPage>,
        </Protected>
      </>
    ),
  },
  {
    path: "/orders",
    element: (
      <>
        <Protected>
          <UserOrdersPage></UserOrdersPage>
        </Protected>
      </>
    ),
  },
  {
    path: "/profile",
    element: (
      <>
        <Protected>
          <UserProfilepage></UserProfilepage>
        </Protected>
      </>
    ),
  },
  {
    path: "/*",
    element: (
      <>
        <PageNotFound></PageNotFound>
      </>
    ),
  },
]);

const App = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectLoggedInUser);

  useEffect(() => {
    if (user) {
      dispatch(fetchItemByUserIdAsync(user.id));
      dispatch(fetchLoggedInUserAsync(user.id));
    }
  }, [dispatch, user]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
