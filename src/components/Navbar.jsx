import {
  Avatar,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuToggle,
} from "@nextui-org/react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const HeaderMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, logOut } = useAuth();

  const handleLogOut = async () => {
    await logOut();
  };

  const navMenuItems = (
    <>
      <NavLink>Home</NavLink>
      <NavLink>Product</NavLink>
      <NavLink>Shop</NavLink>
      <NavLink>Menu</NavLink>
      <NavLink>Blog</NavLink>
      <NavLink to="/contact">Contact</NavLink>
      <NavLink to="/wishlists" className="flex gap-4 items-center">
        <div className="relative inline-block">
          {/* Heart Icon */}
          <div className="bg-white rounded-full p-3 shadow-md">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide w-4 lucide-heart"
            >
              <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
            </svg>
          </div>

          {/* Notification Badge */}
          <span className="absolute top-0 right-0 inline-flex items-center justify-center h-5 w-5 text-xs font-bold text-white bg-blue-500 rounded-full">
            2
          </span>
        </div>
        <span>Wishlists</span>
      </NavLink>
      {!user && <NavLink to="/login">Account</NavLink>}
    </>
  );

  return (
    <Navbar className="bg-gray-100" onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <p className="font-bold text-xl text-[#128AED]">SwiftShop</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex  gap-4" justify="center">
        <NavbarItem className="flex items-center gap-6 ">
          {navMenuItems}
        </NavbarItem>
      </NavbarContent>
      {user && (
        <NavbarContent as="div" justify="end">
          <Dropdown placement="bottom-end">
            <DropdownTrigger>
              <Avatar
                isBordered
                as="button"
                className="transition-transform"
                color=""
                size="sm"
                src={user?.photoURL}
              />
            </DropdownTrigger>

            <DropdownMenu aria-label="Profile Actions" variant="flat">
              <DropdownItem key="profile" className="h-14 gap-2">
                <p className="font-semibold">Signed in as</p>
                <p className="font-semibold">{user?.email}</p>
              </DropdownItem>

              <DropdownItem key="settings">{user?.displayName}</DropdownItem>
              <DropdownItem>
                <NavLink className="flex items-center gap-3">Dashboard</NavLink>
              </DropdownItem>

              <DropdownItem onClick={handleLogOut} key="logout" color="danger">
                Log Out
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </NavbarContent>
      )}
      <NavbarMenu>{navMenuItems}</NavbarMenu>
    </Navbar>
  );
};

export default HeaderMenu;
