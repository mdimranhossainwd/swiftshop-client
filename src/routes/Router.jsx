import { createBrowserRouter } from "react-router-dom";
import Login from "../components/authentications/Login";
import Register from "../components/authentications/Register";
import MainLayout from "../layout/MainLayout";
import BlogDetailsPage from "../pages/BlogDetailsPage";
import Homepages from "../pages/Homepages";
import ProductDetail from "../pages/ProductDetail";
import WishlistsPage from "../pages/WishlistsPage";

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
        element: <ProductDetail />,
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
        element: <WishlistsPage />,
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
