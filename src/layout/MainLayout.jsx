import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import HeaderMenu from "../components/Navbar";

const MainLayout = () => {
  return (
    <div>
      <HeaderMenu />
      <div>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
