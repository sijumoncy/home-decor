import React from 'react'
import Link from "next/link";

const menuLinks = [
    { id: 1, name: "Home", link: "#" },
    { id: 2, name: "Shop", link: "#" },
  ];

function NavMenu() {
  return (
    <div className='nav__menu'>
        {menuLinks.map((link) => (
            <Link key={link.id} href={link.link}>{link.name}</Link>
        ))}
    </div>
  )
}

export default NavMenu