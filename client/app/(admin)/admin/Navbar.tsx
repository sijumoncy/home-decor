"use client";

import MobNavIcon from "@/components/Admin/navbar/MobNavIcon";
import NavMenu from "@/components/Admin/navbar/NavMenu";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { FaRegUser, FaOpencart } from "react-icons/fa";
import { signOut, useSession } from "next-auth/react";
import useAdminContext from "@/context/adminContext";

function Navbar() {
  const [sticky, setSticky] = useState(false);

  const handleScroll = (event: Event) => {
    const currentScollY = event.currentTarget?.scrollY;
    if (currentScollY > 50) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };

  const { currentMenu, setCurrentMenu } = useAdminContext();
  const { data: session } = useSession();
  

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={`nav__container ${sticky && "sticky"}`}>
      <div className="wrapper">
        <div className="logo">
          <Image
            src="/Assets/Logo.svg"
            alt="HomeDecor"
            width={30}
            height={40}
          />
          <NavMenu />
        </div>
        <div className="icons">
          <CiSearch style={{ strokeWidth: "2" }} className="icon" />
          {!session && (
            <Link
              href="/login"
              className={`icon-link ${
                currentMenu === "login/register" && "active"
              }`}
              onClick={() => setCurrentMenu("login/register")}
            >
              <FaRegUser className="icon" />
            </Link>
          )}
          <FaOpencart className="icon" />
          <MobNavIcon />

          {session && (
            <div className="logout-section">
              <button onClick={() => signOut()}>Logout</button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
