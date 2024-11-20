import { createBrowserRouter } from "react-router-dom";
import Login from "../components/authentications/Login";
import Register from "../components/authentications/Register";
import AddProductForm from "../components/form/AddProductForm";
import DashboardLayout from "../layout/DashboardLayout";
import MainLayout from "../layout/MainLayout";
import AllOrderPages from "../pages/AllOrderPages";
import AllUsersPages from "../pages/AllUsersPages";
import BlogDetailsPage from "../pages/BlogDetailsPage";
import ContactPages from "../pages/ContactPages";
import Homepages from "../pages/Homepages";
import MyCartPages from "../pages/MyCartPages";
import ProductDetail from "../pages/ProductDetail";
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
