import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { LogoutLink } from '@kinde-oss/kinde-auth-nextjs/components'
import Link from 'next/link'

interface userProps {
    email: string,
    name: string,
    shortname: string,
    Userimage: string | undefined,
}

const UserNav = ({ email, Userimage, name, shortname }: userProps) => {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button className='rounded-full h-11 w-11 p-1'>
                    <Avatar className='h-10 w-10'>
                        <AvatarImage src={Userimage} alt={name}></AvatarImage>
                        <AvatarFallback>{shortname}</AvatarFallback>
                    </Avatar>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className='w-56' align='end' forceMount>
                <DropdownMenuLabel>
                    <div className='flex flex-col '>
                        <span className='text-sm font-semibold'>{name}</span>
                        <span className='text-[12px] text-slate-500 '>{email}</span>
                    </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />

                <DropdownMenuItem asChild>
                    <Link href='/usersetting'>Setting</Link>
                </DropdownMenuItem>
                {email == "vedantnavale45@gmail.com" && (
                    <>
                        <DropdownMenuItem asChild>
                            <Link href='/data'>Admin Dashboard</Link>
                        </DropdownMenuItem>

                    </>
                )}

                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                    <LogoutLink>Logout</LogoutLink>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

export default UserNav
