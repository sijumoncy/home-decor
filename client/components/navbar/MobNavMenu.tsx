"use client";

import { menuLinks } from "@/constants/navMenu";
import Link from "next/link";
import React, { useState } from "react";
import { RiMenu3Fill } from "react-icons/ri";

function MobNavMenu() {
  const [open, setOpen] = useState(false);

  console.log({ open });

  const handleToggle = () => {  
    setOpen((prev:boolean) => !prev);
  };

  return (
    <>
      <div className="mobile-nav">
        <div className="icon" onClick={handleToggle}>
          <RiMenu3Fill />
        </div>
        {/* <div className={`toggle-nav-section ${open ? "active" : '' }`}>
          {menuLinks.map((link) => (
            <Link key={link.id} href={link.link}>
              {link.name}
            </Link>
          ))}
        </div> */}
      </div>
    </>
  );
}

export default MobNavMenu;
