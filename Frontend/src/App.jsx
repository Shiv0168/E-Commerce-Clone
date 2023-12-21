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
import Logout from "./features/auth/components/Logout";
import ForgotPasswordPage from "./pages/ForgotPasswordPage";
import AdminProductDetailPage from "./pages/AdminProductDetailPage";
import AdminProductFormPage from "./pages/AdminProductFormPage";
import ProtectedAdmin from "./features/auth/components/ProtectedAdmin";
import AdminHome from "./pages/AdminHome";
import AdminOrdersPage from "./pages/AdminOrdersPage";
import { transitions, positions, Provider as AlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";

const options = {
  // you can also just use 'bottom center'
  position: positions.BOTTOM_CENTER,
  timeout: 2000,
  offset: "30px",
  // you can also just use 'scale'
  transition: transitions.SCALE,
};
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
    path: "/admin",
    element: (
      <>
        <ProtectedAdmin>
          <AdminHome></AdminHome>
        </ProtectedAdmin>
      </>
    ),
  },
  {
    path: "/admin/product-detail/:id",
    element: (
      <>
        <ProtectedAdmin>
          <AdminProductDetailPage></AdminProductDetailPage>
        </ProtectedAdmin>
      </>
    ),
  },
  {
    path: "/admin/product-form",
    element: (
      <>
        <ProtectedAdmin>
          <AdminProductFormPage></AdminProductFormPage>
        </ProtectedAdmin>
      </>
    ),
  },
  {
    path: "/admin/product-form/edit/:id",
    element: (
      <>
        <ProtectedAdmin>
          <AdminProductFormPage></AdminProductFormPage>
        </ProtectedAdmin>
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
    path: "/admin/orders",
    element: (
      <ProtectedAdmin>
        <AdminOrdersPage></AdminOrdersPage>
      </ProtectedAdmin>
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
    path: "/logout",
    element: (
      <>
        <Logout></Logout>
      </>
    ),
  },
  {
    path: "/forgot-password",
    element: <ForgotPasswordPage></ForgotPasswordPage>,
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
      <AlertProvider template={AlertTemplate} {...options}>
        <RouterProvider router={router} />
      </AlertProvider>
    </>
  );
};

export default App;
