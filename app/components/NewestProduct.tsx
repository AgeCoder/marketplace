import Link from "next/link";
import prisma from "../lib/db"
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { ProductCard } from "./ProductCard";
import { type CategoryType } from "@prisma/client";

interface category {
    category: "newest" | "template" | "uikit" | "icon"
}

async function GetData(category: string) {
    // console.log(category);

    switch (category) {
        case "newest": {
            const data = await prisma.product.findMany({
                select: {
                    id: true,
                    category: true,
                    name: true,
                    price: true,
                    shortSummary: true,
                    images: true,
                },
                take: 3,
                orderBy: {
                    createdAt: "desc"
                }

            })

            return {
                data: data
            }
        }
        case "template": {
            const data = await prisma.product.findMany({
                where: {
                    category: "template"
                },
                select: {
                    id: true,
                    category: true,
                    name: true,
                    price: true,
                    shortSummary: true,
                    images: true,
                },
                take: 3,
                orderBy: {
                    createdAt: "desc"
                }

            })

            return {
                data: data
            }
        }
        case "uikit": {
            const data = await prisma.product.findMany({
                where: {
                    category: "uikit"
                },
                select: {
                    id: true,
                    category: true,
                    name: true,
                    price: true,
                    shortSummary: true,
                    images: true,
                },
                take: 3,
                orderBy: {
                    createdAt: "desc"
                }

            })

            return {
                data: data
            }
        }
        case "icon": {
            const data = await prisma.product.findMany({
                where: {
                    category: "icon"
                },
                select: {
                    id: true,
                    category: true,
                    name: true,
                    price: true,
                    shortSummary: true,
                    images: true,
                },
                take: 3,
                orderBy: {
                    createdAt: "desc"
                }

            })

            return {
                data: data
            }
        }

    }
}

export const NewestProduct = async ({ category }: category) => {
    const data = await GetData(category);
    return (
        <section className='px-4 md:px-8 mx-auto mb-10'>
            <Card>
                <CardHeader>
                    <div className="flex justify-between items-center">
                        <h2 className="font-extrabold text-xl capitalize">{category}</h2>
                        <Link href={`/Products/${category == "newest" ? "all" : category}`}
                            className="text-base  tracking-tight font-semibold hover:text-sky-500">
                            See All Products <span>&rarr;</span>
                        </Link>
                    </div>
                </CardHeader>
                <CardContent>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
                        {data?.data.map((item) => (
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
