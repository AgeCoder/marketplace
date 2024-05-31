import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { ProductCard } from "@/app/components/ProductCard";
import prisma from "@/app/lib/db";
import { type CategoryType } from "@prisma/client";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import { notFound } from "next/navigation";


async function GetData(category: string) {

    let path;

    switch (category) {
        case "template":
            path = "template"
            break;
        case "uikit":
            path = "uikit"
            break;
        case "icon":
            path = "icon"
            break;
        case "all":
            path = undefined
            break;
        default:
            return notFound();
    }

    const data = await prisma.product.findMany({
        where: {
            category: path as CategoryType
        },
        select: {
            id: true,
            category: true,
            name: true,
            price: true,
            shortSummary: true,
            images: true,
        },
        orderBy: {
            createdAt: "desc"
        }

    })

    return data
}

export const Products = async ({ params }: Params) => {
    const data = await GetData(params?.category);
    //   console.log(data);
    return (
        <section className='px-4 md:px-8 mx-auto mb-10'>
            <Card>
                <CardHeader>
                    <div className="flex justify-between items-center">
                        <h2 className="font-extrabold text-xl capitalize">{params.category}</h2>
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


export default Products
