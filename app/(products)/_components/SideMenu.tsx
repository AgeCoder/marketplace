import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { getKindeServerSession, LogoutLink } from '@kinde-oss/kinde-auth-nextjs/server'
import { Computer, LogOutIcon, PackagePlus, PackageSearch, } from 'lucide-react'
import Link from 'next/link';
import React from 'react'

export default async function SideMenu() {
    const { getUser } = getKindeServerSession();
    const user = await getUser();

    return (
        <div className="flex h-auto w-16 flex-col justify-between border-e bg-white">
            <div>
                <div className="inline-flex size-16 items-center justify-center">
                    <span className="grid size-10 place-content-center rounded-lg bg-gray-100 text-xs text-gray-600">
                        <Avatar className='h-10 w-10'>
                            <AvatarImage src={user?.picture as string} alt={user?.given_name as string}></AvatarImage>
                            <AvatarFallback>{user?.given_name as string}</AvatarFallback>
                        </Avatar>
                    </span>
                </div>

                <div className="border-t border-gray-100">
                    <div className="px-2">
                        <div className="py-4">
                            <Link
                                href="/data"
                                className="t group relative flex justify-center rounded bg-blue-50 px-2 py-1.5 text-blue-700"
                            >
                                <Computer />

                                <span
                                    className="invisible absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white group-hover:visible"
                                >
                                    Dashboard
                                </span>
                            </Link>
                        </div>

                        <ul className="space-y-1 border-t border-gray-100 pt-4">
                            <li>
                                <Link
                                    href="/data/sell"
                                    className="group relative flex justify-center rounded px-2 py-1.5 text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                                >
                                    <PackagePlus />
                                    <span
                                        className="invisible absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white group-hover:visible"
                                    >
                                        Add Products
                                    </span>
                                </Link>
                            </li>

                            <li>
                                <Link
                                    href="/data/my-products"
                                    className="group relative flex justify-center rounded px-2 py-1.5 text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                                >

                                    <PackageSearch />
                                    <span
                                        className="invisible absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white group-hover:visible"
                                    >
                                        Products
                                    </span>
                                </Link>
                            </li>

                        </ul>
                    </div>
                </div>
            </div>

            <div className="sticky inset-x-0 bottom-0 border-t border-gray-100 bg-white px-2">
                <LogoutLink><LogOutIcon /></LogoutLink>
            </div>
        </div>
    )
}


<div className="flex h-screen w-16 flex-col justify-between border-e bg-white">
    <div>
        <div className="inline-flex size-16 items-center justify-center">
            <span className="grid size-10 place-content-center rounded-lg bg-gray-100 text-xs text-gray-600">
                L
            </span>
        </div>

        <div className="border-t border-gray-100">
            <div className="px-2">
                <div className="py-4">
                    <a
                        href="#"
                        className="t group relative flex justify-center rounded bg-blue-50 px-2 py-1.5 text-blue-700"
                    >


                        <span
                            className="invisible absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white group-hover:visible"
                        >
                            General
                        </span>
                    </a>
                </div>

                <ul className="space-y-1 border-t border-gray-100 pt-4">
                    <li>
                        <a
                            href="#"
                            className="group relative flex justify-center rounded px-2 py-1.5 text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                        >

                            <span
                                className="invisible absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white group-hover:visible"
                            >
                                Teams
                            </span>
                        </a>
                    </li>

                    <li>
                        <a
                            href="#"
                            className="group relative flex justify-center rounded px-2 py-1.5 text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                        >


                            <span
                                className="invisible absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white group-hover:visible"
                            >
                                Billing
                            </span>
                        </a>
                    </li>

                    <li>
                        <a
                            href="#"
                            className="group relative flex justify-center rounded px-2 py-1.5 text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                        >

                            <span
                                className="invisible absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white group-hover:visible"
                            >
                                Invoices
                            </span>
                        </a>
                    </li>

                    <li>
                        <a
                            href="#"
                            className="group relative flex justify-center rounded px-2 py-1.5 text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                        >


                            <span
                                className="invisible absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white group-hover:visible"
                            >
                                Account
                            </span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </div>

    <div className="sticky inset-x-0 bottom-0 border-t border-gray-100 bg-white p-2">
        <form action="#">
            <button
                type="submit"
                className="group relative flex w-full justify-center rounded-lg px-2 py-1.5 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700"
            >

                <span
                    className="invisible absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white group-hover:visible"
                >
                    Logout
                </span>
            </button>
        </form>
    </div>
</div>