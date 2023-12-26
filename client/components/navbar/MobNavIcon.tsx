"use client";
import Link from "next/link";
import React, { useState } from "react";
import { RiMenu3Fill, RiCloseFill } from "react-icons/ri";

function MobNavIcon() {
  const [open, setOpen] = useState(false);

  const handleToggle = () => {  
    setOpen((prev:boolean) => !prev);
  };

  return (
    <>
      <div className="mobile-nav">
        <div className="icon" onClick={handleToggle}>
          {open ? <RiCloseFill /> : <RiMenu3Fill />}
        </div>
      </div>
    </>
  );
}

export default MobNavIcon;
