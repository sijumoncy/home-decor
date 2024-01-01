"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { adminMenuLinks } from "@/constants/adminNavmenu";
import useAdminContext from "@/context/adminContext";

function NavMenu() {
  const { currentMenu, mobNavOpen, setCurrentMenu, setMobNavOpen } = useAdminContext();

  useEffect(() => {
    if (!currentMenu) {
      setCurrentMenu(adminMenuLinks[0].name);
    }
  }, []);

  const handleClickMenuItem = (linkName:string) => {
    setCurrentMenu(linkName)
    setMobNavOpen(false)
  }

  return (
    <div className={`nav__menu ${mobNavOpen && "open"}`}>
      <div className="mob-header font-medium">
        Main Menu
        <div className="line" />
      </div>
      {adminMenuLinks.map((link) => (
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
  );
}

export default NavMenu;
