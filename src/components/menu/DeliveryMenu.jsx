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

      <NavLink
        className={({ isActive }) => (isActive ? "text-[#128AED]" : "")}
        to="delivery-history"
      >
        Delivery History
      </NavLink>

      <NavLink
        className={({ isActive }) => (isActive ? "text-[#128AED]" : "")}
        to="my-product"
      >
        Earnings
      </NavLink>

      <NavLink
        className={({ isActive }) => (isActive ? "text-[#128AED]" : "")}
        to="review-queue"
      >
        Profile Settings
      </NavLink>

      <NavLink
        className={({ isActive }) => (isActive ? "text-[#128AED]" : "")}
        to="payment"
      >
        Notifications
      </NavLink>

      <NavLink
        className={({ isActive }) => (isActive ? "text-[#128AED]" : "")}
        to="payment"
      >
        Support
      </NavLink>
    </>
  );
};

export default DeliveryMenu;
