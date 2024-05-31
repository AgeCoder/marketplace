import Link from 'next/link'
import React from 'react'
import NavbarLink from '../NavbarLink'
import { Button } from '@/components/ui/button'
import Mobilenav from './Mobilenav'
import { LoginLink, RegisterLink } from '@kinde-oss/kinde-auth-nextjs/components'
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server'
import UserNav from './UserNav'

const Navbar = async () => {
    const { getUser } = getKindeServerSession();
    const user = await getUser()
    return (
        <nav className='relative w-full max-w-7xl flex md:grid md:grid-cols-12 items-center justify-center px-6 py-5 mx-auto'>
            <div className='col-span-3'>
                <Link href='/'>
                    <h1 className='text-3xl font-bold'>Alight<span className='text-sky-500'>UI</span></h1>
                </Link>
            </div>
            <NavbarLink />

            <div className='flex items-center gap-x-2 ms-auto md:col-span-3'>
                {user ? (
                    <UserNav
                        Userimage={user.picture ?? `https://avatar.vercel.sh/${user.given_name}`}
                        email={user.email as string}
                        shortname={user.given_name as string}
                        name={user.family_name as string} />
                ) : (
                    <div className='flex items-center gap-x-2 '>
                        <Button asChild>
                            <LoginLink>Login</LoginLink>
                        </Button >
                        <Button asChild variant='secondary'>
                            <RegisterLink>Register</RegisterLink>
                        </Button>
                    </div>
                )}
                <div className='md:hidden'>

                    <Mobilenav />
                </div>

            </div>
        </nav>
    )
}

export default Navbar
