import MobNavMenu from "@/components/MobNavMenu";
import NavMenu from "@/components/NavMenu";
import Image from "next/image";
import React from "react";
import {CiSearch} from 'react-icons/ci'
import {FaRegUser, FaOpencart} from 'react-icons/fa'

function Navbar() {
  return (
    <nav className="nav__container">
      <div className="wrapper">
        <div className="logo">
          <Image
            src="/Assets/Logo.svg"
            alt="HomeDecor"
            width={30}
            height={40}
          />
        </div>
        <NavMenu />
        <div className="icons">
          <CiSearch style={{ strokeWidth: "2"}}  className="icon"/>
          <FaRegUser  className="icon"/>
          <FaOpencart  className="icon"/>
        </div>
        <MobNavMenu/>
      </div>
    </nav>
  );
}

export default Navbar;
