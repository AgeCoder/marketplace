import prisma from '@/app/lib/db'
import { notFound } from 'next/navigation'
import React from 'react'


async function GetUserData() {
    const data = await prisma.user.findMany({
        select: {
            id: true,
            firstName: true,
            lastName: true,
            email: true,
        }
    })

    return data
}



async function GetProductData() {
    const productdata = await prisma.product.findMany({
        select: {
            name: true,
            price: true,
            category: true,
            createdAt: true,
            User: {
                select: {
                    firstName: true,
                    lastName: true,
                }
            }
        }
    })

    return productdata
}
export default async function page() {

    const UserData = await GetUserData();

    // console.log(UserData[0].email);



    if (UserData[0].email !== "vedantnavale45@gmail.com") {
        return notFound()
    }


    const productdata = await GetProductData();

    return (
        <div className="overflow-x-auto mx-auto w-[80%] mb-10">
            <table className="min-w-full bg-white border border-gray-200 shadow-md rounded-lg">
                <thead className="bg-gray-100">
                    <tr>
                        <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">
                            Name
                        </th>
                        <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">
                            Email
                        </th>
                        <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">
                            ID
                        </th>
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                    {UserData.map((item) => (
                        <tr key={item.id} className="hover:bg-gray-50">
                            <td className="py-4 px-6 whitespace-nowrap text-sm font-medium text-gray-900">
                                {item.firstName}{item.lastName}
                            </td>
                            <td className="py-4 px-6 whitespace-nowrap text-sm text-gray-500">
                                {item.email}
                            </td>
                            <td className="py-4 px-6 whitespace-nowrap text-sm text-gray-500">

                                {item.id}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <table className="min-w-full bg-white border border-gray-200 shadow-md rounded-lg mt-10">
                <thead className="bg-gray-100">
                    <tr>
                        <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">
                            Name
                        </th>
                        <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">
                            Price
                        </th>
                        <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">
                            Category
                        </th>
                        <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">
                            Created At
                        </th>
                        <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">
                            User
                        </th>
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                    {productdata.map((item, index) => (
                        <tr key={index} className="hover:bg-gray-50">
                            <td className="py-4 px-6 whitespace-nowrap text-sm font-medium text-gray-900">
                                {item.name}
                            </td>
                            <td className="py-4 px-6 whitespace-nowrap text-sm text-gray-500">
                                {item.price}
                            </td>
                            <td className="py-4 px-6 whitespace-nowrap text-sm text-gray-500">
                                {item.category}
                            </td>
                            <td className="py-4 px-6 whitespace-nowrap text-sm text-gray-500">
                                {new Intl.DateTimeFormat("en-US", { dateStyle: "long" }).format(item?.createdAt)}
                            </td>
                            <td className="py-4 px-6 whitespace-nowrap text-sm text-gray-500">
                                {item.User ? `${item.User.firstName} ${item.User.lastName}` : "N/A"}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
