"use client"
import { Button } from "@/components/ui/button"
import {
    Sheet,
    SheetContent,
    SheetTrigger,
  } from "@/components/ui/sheet"
import {  Menu } from "lucide-react"
import  { navLink } from "../NavbarLink"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"


const Mobilenav = () => {
    const path = usePathname() 
  return (
    
<Sheet>
          <SheetTrigger asChild>
              <Button variant='outline'>
                  <Menu className="w-4 h-4"/>
              </Button>
          </SheetTrigger>
          <SheetContent>
              <div className="mt-3">
              {navLink.map((link) => (
              <Link href={link.link} key={link.name}
                  
                  className={cn(path == link.link ? 'shadow-sm border underline-animation underline-animation-active w-full ': "hover:text-sky-500" , "font-semibold p-2 rounded-lg text-black m-4 flex flex-col")}
              > 
                  {link.name}
              </Link>
      ))}
          </div>
          </SheetContent>
</Sheet>
  )
}

export default Mobilenav
