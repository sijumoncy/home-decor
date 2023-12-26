"use client";
import useAppContext from "@/context/appContext";
import { RiMenu3Fill, RiCloseFill } from "react-icons/ri";

function MobNavIcon() {
  const {mobNavOpen, setMobNavOpen} = useAppContext()

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
