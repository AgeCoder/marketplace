"use client"
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'


export const  navLink = [
    { name: 'Home', link: '/'  },
    { name: 'Templates', link: '/Products/template'  },
    { name: 'Ui Kits', link: '/Products/uikit'},
    { name: 'Icons', link: '/Products/icon'},
    
]

const NavbarLink = () => {
    const path = usePathname() 
  return (
    <div className='hidden md:flex justify-center items-center col-span-6 gap-x-3'>
          {navLink.map((link) => (
              <Link href={link.link} key={link.name}
                  className={cn(path == link.link ? 'text-sky-500 underline-animation underline-animation-active ': "hover:text-sky-500" , "font-semibold  rounded-lg")}
            >       
                  {link.name}
              </Link>
      ))}
    </div>
  )
}

export default NavbarLink
