"use client"

import MobNavIcon from "@/components/navbar/MobNavIcon";
import NavMenu from "@/components/navbar/NavMenu";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { FaRegUser, FaOpencart } from "react-icons/fa";



function Navbar() {

  const [sticky, setSticky] = useState(false)

  const handleScroll = (event:Event) => {
    const currentScollY = event.currentTarget?.scrollY;
    if(currentScollY > 50) {
      setSticky(true)
    } else{
      setSticky(false)
    }
  }
  

  useEffect(() =>{
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  },[])

  return (
    <nav className={`nav__container ${sticky && 'sticky'}`}>
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
          <FaRegUser className="icon" />
          <FaOpencart className="icon" />
          <MobNavIcon />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
