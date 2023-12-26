"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { menuLinks } from "@/constants/navMenu";
import useAppContext from "@/context/appContext";

function NavMenu() {
  const { currentMenu, mobNavOpen, setCurrentMenu } = useAppContext();

  useEffect(() => {
    if (!currentMenu) {
      setCurrentMenu(menuLinks[0].name);
    }
  }, []);

  return (
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
          onClick={() => setCurrentMenu(link.name)}
        >
          {link.name}
        </Link>
      ))}
    </div>
  );
}

export default NavMenu;
