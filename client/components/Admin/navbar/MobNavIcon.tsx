"use client";
import useAdminContext from "@/context/adminContext";
import { RiMenu3Fill, RiCloseFill } from "react-icons/ri";

function MobNavIcon() {
  const {mobNavOpen, setMobNavOpen} = useAdminContext()

  const handleToggle = () => {  
    setMobNavOpen((prev:boolean) => !prev);
  };

  return (
    <>
      <div className="mobile-nav">
        <div className="icon" onClick={handleToggle}>
          {mobNavOpen ? <RiCloseFill /> : <RiMenu3Fill />}
        </div>
      </div>
    </>
  );
}

export default MobNavIcon;
