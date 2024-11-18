import { Outlet } from "react-router-dom";
import DashboardMenu from "../components/DashboardMenu";

const DashboardLayout = () => {
  return (
    <div>
      <div className="lg:flex">
        <div className="min-h-full bg-[#3f3f3f]">
          <DashboardMenu />
        </div>
        <div className="md:flex-1">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
