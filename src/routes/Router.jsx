import { createBrowserRouter } from "react-router-dom";
import Register from "../components/authentications/Register";
import MainLayout from "../layout/MainLayout";
import Homepages from "../pages/Homepages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Homepages />,
      },
    ],
  },
  {
    path: "/register",
    element: <Register />,
  },
]);

export default router;
