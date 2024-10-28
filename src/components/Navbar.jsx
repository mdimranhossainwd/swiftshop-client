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
      <NavLink>Contact</NavLink>
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

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem className="flex gap-8 ">{navMenuItems}</NavbarItem>
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
