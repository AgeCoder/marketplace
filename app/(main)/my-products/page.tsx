import { ProductCard } from '@/app/components/ProductCard'
import prisma from '@/app/lib/db'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server'
import { unstable_noStore } from 'next/cache'
import React from 'react'

async function GetData(userId: string) {
    const data = await prisma.product.findMany({
        where: {
            userId: userId
        },
        select: {
            id: true,
            name: true,
            price: true,
            shortSummary: true,
            images: true,
            category: true,
        }
    })

    return data
}

const page = async () => {
    unstable_noStore();
    const { getUser } = getKindeServerSession();
    const user = await getUser()
    const data = await GetData(user?.id as string);
    return (
        <section className='px-4 md:px-8 mx-auto mb-10'>
            <Card>
                <CardHeader>
                    <div className="flex justify-between items-center">
                        <h2 className="font-extrabold text-xl capitalize">My Products</h2>
                    </div>
                </CardHeader>
                <CardContent>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
                        {data.map((item) => (
                            <ProductCard key={item.id}
                                category={item.category}
                                id={item.id}
                                images={item.images}
                                name={item.name}
                                price={item.price}
                                shortSummary={item.shortSummary}
                            />
                        ))}
                    </div>
                </CardContent>
            </Card>
        </section>
    )
}

export default page
