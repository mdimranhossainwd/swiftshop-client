import { createBrowserRouter } from "react-router-dom";
import Login from "../components/authentications/Login";
import Register from "../components/authentications/Register";
import MainLayout from "../layout/MainLayout";
import Homepages from "../pages/Homepages";
import ProductDetail from "../pages/ProductDetail";

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
