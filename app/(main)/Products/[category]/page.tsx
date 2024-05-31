import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { ProductCard } from "@/app/components/ProductCard";
import prisma from "@/app/lib/db";
import { CategoryType } from "@prisma/client";
import { notFound } from "next/navigation";
import { unstable_noStore } from "next/cache";

// Define the shape of the params object for the dynamic route
interface Params {
    category: string;
}

async function GetData(category: string) {
    let path: CategoryType | undefined;

    switch (category) {
        case "template":
            path = "template";
            break;
        case "uikit":
            path = "uikit";
            break;
        case "icon":
            path = "icon";
            break;
        case "all":
            path = undefined;
            break;
        default:
            return notFound();
    }

    const data = await prisma.product.findMany({
        where: path ? { category: path } : {},
        select: {
            id: true,
            category: true,
            name: true,
            price: true,
            shortSummary: true,
            images: true,
        },
        orderBy: {
            createdAt: "desc",
        },
    });

    return data;
}

const Products = async ({ params }: { params: Params }) => {
    unstable_noStore();
    const data = await GetData(params?.category);
    //   console.log(data);
    return (
        <section className="px-4 md:px-8 mx-auto mb-10">
            <Card>
                <CardHeader>
                    <div className="flex justify-between items-center">
                        <h2 className="font-extrabold text-xl capitalize">{params.category}</h2>
                    </div>
                </CardHeader>
                <CardContent>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
                        {data.map((item) => (
                            <ProductCard
                                key={item.id}
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
    );
};

export default Products;
