import useAuth from "../hooks/useAuth";
import useRole from "../hooks/useRole";
import AdminMenu from "./menu/AdminMenu";
import CustomerMenu from "./menu/CustomerMenu";
import DeliveryMenu from "./menu/DeliveryMenu";

const DashboardMenu = () => {
  const { user } = useAuth();
  const [role] = useRole();
  console.log(role);

  const menu = (
    <>
      {role === "customer" && <CustomerMenu />}
      {role === "delivery" && <DeliveryMenu />}
      {role === "admin" && <AdminMenu />}
    </>
  );

  return (
    <div>
      <aside className="md:w-64 min-h-screen bg-[#3f3f3f] p-4">
        <div className="flex items-center mb-6">
          <h3 className="text-2xl text-center flex items-center justify-center font-josefin mt-5 bg-gradient-to-r from-blue-700 via-blue-400 to-blue-300 bg-clip-text text-transparent font-bold ">
            DevSpotLight
          </h3>
        </div>
        <div className="divider"></div>

        <nav className="space-y-4 text-white pt-4 items-center justify-center grid grid-cols-1 font-josefin">
          {menu}
        </nav>
      </aside>
    </div>
  );
};

export default DashboardMenu;
