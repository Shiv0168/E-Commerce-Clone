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
]);

const App = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectLoggedInUser);

  useEffect(() => {
    if (user) {
      dispatch(fetchItemByUserIdAsync(user.id));
    }
  }, [dispatch, user]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
