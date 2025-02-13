import { NavLink } from "react-router-dom";

const CustomerMenu = () => {
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
        to="cart"
      >
        My Orders
      </NavLink>

      <NavLink
        className={({ isActive }) => (isActive ? "text-[#128AED]" : "")}
        to="track-product"
      >
        Track Order
      </NavLink>

      {/* <NavLink
        className={({ isActive }) => (isActive ? "text-[#128AED]" : "")}
        to="review-queue"
      >
        Cart
      </NavLink> */}

      <NavLink
        className={({ isActive }) => (isActive ? "text-[#128AED]" : "")}
        to="payment"
      >
        Payment History
      </NavLink>

      <NavLink
        className={({ isActive }) => (isActive ? "text-[#128AED]" : "")}
        to="profile-setting"
      >
        Account Settings
      </NavLink>
    </>
  );
};

export default CustomerMenu;
