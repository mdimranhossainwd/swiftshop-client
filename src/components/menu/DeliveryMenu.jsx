import { NavLink } from "react-router-dom";

const DeliveryMenu = () => {
  return (
    <>
      <NavLink
        className={({ isActive }) => (isActive ? "text-[#128AED]" : "")}
        to="profile"
      >
        Dashboard Overview
      </NavLink>

      <NavLink
        className={({ isActive }) => (isActive ? "text-[#128AED]" : "")}
        to="assigned-order"
      >
        Assigned Orders
      </NavLink>

      {/* <NavLink
        className={({ isActive }) => (isActive ? "text-[#128AED]" : "")}
        to="delivery-history"
      >
        Delivery History
      </NavLink> */}

      <NavLink
        className={({ isActive }) => (isActive ? "text-[#128AED]" : "")}
        to="earning"
      >
        Earnings
      </NavLink>

      <NavLink
        className={({ isActive }) => (isActive ? "text-[#128AED]" : "")}
        to="profile-setting"
      >
        Profile Settings
      </NavLink>
    </>
  );
};

export default DeliveryMenu;
