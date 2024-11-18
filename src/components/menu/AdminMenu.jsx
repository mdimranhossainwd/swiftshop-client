import { NavLink } from "react-router-dom";

const AdminMenu = () => {
  return (
    <>
      <NavLink
        className={({ isActive }) => (isActive ? "text-[#128AED]" : "")}
        to="profile"
      >
        Admin Dashboard
      </NavLink>

      <NavLink
        className={({ isActive }) => (isActive ? "text-[#128AED]" : "")}
        to="all-users"
      >
        Manage User's
      </NavLink>

      <NavLink
        className={({ isActive }) => (isActive ? "text-[#128AED]" : "")}
        to="my-product"
      >
        Manage Products
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? "text-[#128AED]" : "")}
        to="my-product"
      >
        Add New Products
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? "text-[#128AED]" : "")}
        to="my-product"
      >
        Update Products
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? "text-[#128AED]" : "")}
        to="my-product"
      >
        All Orders
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? "text-[#128AED]" : "")}
        to="my-product"
      >
        Pending Orders
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? "text-[#128AED]" : "")}
        to="my-product"
      >
        Delivered Orders
      </NavLink>

      <NavLink
        className={({ isActive }) => (isActive ? "text-[#128AED]" : "")}
        to="my-product"
      >
        Revenue Analytics
      </NavLink>

      <NavLink
        className={({ isActive }) => (isActive ? "text-[#128AED]" : "")}
        to="review-queue"
      >
        Support Tickets
      </NavLink>

      <NavLink
        className={({ isActive }) => (isActive ? "text-[#128AED]" : "")}
        to="payment"
      >
        Promotions & Discounts
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

export default AdminMenu;
