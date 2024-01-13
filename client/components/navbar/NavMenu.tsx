"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { menuLinks } from "@/constants/navMenu";
import useAppContext from "@/context/appContext";
import CartPage from "../cart/CartPage";

function NavMenu() {
  const { currentMenu, mobNavOpen, setCurrentMenu, setMobNavOpen } =
    useAppContext();

  useEffect(() => {
    if (!currentMenu) {
      setCurrentMenu(menuLinks[0].name);
    }
  }, []);

  const handleClickMenuItem = (linkName: string) => {
    setCurrentMenu(linkName);
    setMobNavOpen(false);
  };

  return (
    <>
      <div className={`nav__menu ${mobNavOpen && "open"}`}>
        <div className="mob-header font-medium">
          Main Menu
          <div className="line" />
        </div>
        {menuLinks.map((link) => (
          <Link
            className={`${currentMenu === link.name && "active"}`}
            key={link.id}
            href={link.link}
            onClick={() => handleClickMenuItem(link.name)}
          >
            {link.name}
          </Link>
        ))}
      </div>
      <CartPage />
    </>
  );
}

export default NavMenu;
