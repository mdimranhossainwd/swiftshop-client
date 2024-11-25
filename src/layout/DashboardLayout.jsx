import { Outlet } from "react-router-dom";
import DashboardMenu from "../components/DashboardMenu";

const DashboardLayout = () => {
  return (
    <div>
      <div className="lg:flex h-screen overflow-hidden">
        <div className="h-full md:fixed bg-[#3f3f3f]">
          <DashboardMenu />
        </div>
        <div className="md:flex-1 ml-64 overflow-y-auto">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
