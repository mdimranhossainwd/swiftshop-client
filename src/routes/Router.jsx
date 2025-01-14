import { createBrowserRouter } from "react-router-dom";
import Login from "../components/authentications/Login";
import Register from "../components/authentications/Register";
import AddProductForm from "../components/form/AddProductForm";
import UpdateProductForm from "../components/form/UpdateProductForm";
import ProfileSetting from "../components/ProfileSetting";
import DashboardLayout from "../layout/DashboardLayout";
import MainLayout from "../layout/MainLayout";
import AllOrderPages from "../pages/AllOrderPages";
import AllProductPages from "../pages/AllProductPages";
import AllUsersPages from "../pages/AllUsersPages";
import AssignOrderPages from "../pages/AssignOrderPages";
import BlogDetailsPage from "../pages/BlogDetailsPage";
import BlogsPages from "../pages/BlogsPages";
import ContactPages from "../pages/ContactPages";
import DeliveryHistoryPages from "../pages/DeliveryHistoryPages";
import DeliveryOrderPages from "../pages/DeliveryOrderPages";
import Homepages from "../pages/Homepages";
import MyCartPages from "../pages/MyCartPages";
import OrderPendingPage from "../pages/OrderPendingPage";
import PaymentHistoryPages from "../pages/PaymentHistoryPages";
import ProductDetail from "../pages/ProductDetail";
import ProductsPages from "../pages/ProductsPages";
import TrackOrderPages from "../pages/TrackOrderPages";
import WishlistsPage from "../pages/WishlistsPage";
import Profile from "../shared/Profile";
import PrivateRouter from "./PrivateRouter";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Homepages />,
      },
      {
        path: "/product/:id",
        element: (
          <PrivateRouter>
            <ProductDetail />
          </PrivateRouter>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/swiftshop/api/v1/features/${params.id}`),
      },
      {
        path: "/blogs/:id",
        element: <BlogDetailsPage />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/swiftshop/api/v1/blogs/${params.id}`),
      },
      {
        path: "/wishlists",
        element: (
          <PrivateRouter>
            <WishlistsPage />,
          </PrivateRouter>
        ),
      },
      {
        path: "/all-products",
        element: <ProductsPages />,
      },
      {
        path: "/blogs",
        element: <BlogsPages />,
      },
      // {
      //   path: "/mycart",
      //   element: (
      //     <PrivateRouter>
      //       <MyCartPages />
      //     </PrivateRouter>
      //   ),
      // },
      {
        path: "/contact",
        element: <ContactPages />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        path: "profile",
        element: <Profile />,
      },
      {
        path: "cart",
        element: <MyCartPages />,
      },
      {
        path: "track-product",
        element: <TrackOrderPages />,
      },
      {
        path: "payment",
        element: <PaymentHistoryPages />,
      },
      {
        path: "profile-setting",
        element: <ProfileSetting />,
      },

      // Delivery Routes Below
      {
        path: "assigned-order",
        element: <AssignOrderPages />,
      },
      {
        path: "delivery-history",
        element: <DeliveryHistoryPages />,
      },

      // Admin Routes Below
      {
        path: "all-users",
        element: <AllUsersPages />,
      },
      {
        path: "add-product",
        element: <AddProductForm />,
      },
      {
        path: "all-orders",
        element: <AllOrderPages />,
      },
      {
        path: "pending-product",
        element: <OrderPendingPage />,
      },
      {
        path: "manage-product",
        element: <AllProductPages />,
      },
      {
        path: "/dashboard/edit-product/:id",
        element: <UpdateProductForm />,
      },
      {
        path: "delivery-product-history",
        element: <AssignOrderPages />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);

export default router;
