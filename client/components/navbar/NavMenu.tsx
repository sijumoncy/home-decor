import React from 'react'
import Link from "next/link";
import { menuLinks } from '@/constants/navMenu';

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