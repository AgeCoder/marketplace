import { Button } from "@/components/ui/button";
import { CardFooter } from "@/components/ui/card";
import Link from "next/link";
import { CarouselIamge } from "./CarouselIamge";

interface ProductDetail {
    images: string[],
    id: string,
    category: string,
    price: number,
    shortSummary: string,
    name: string,
}

export const ProductCard = ({ images, id, category, price, shortSummary, name }: ProductDetail) => {
    return (
        <article className="flex flex-col justify-between h-full overflow-hidden rounded-lg shadow transition hover:shadow-lg">
            <div>
                <CarouselIamge images={images} />
                <div className="bg-white p-4 sm:p-6">
                    <div className="flex items-center justify-between">
                        <h3 className="mt-0.5 text-lg text-gray-900 font-semibold capitalize">{name}</h3>
                        <h4 className="text-sky-600">₹{price}</h4>
                    </div>
                    <p className="mt-1 line-clamp-3 text-sm/relaxed text-gray-500">
                        {shortSummary}
                    </p>
                </div>
            </div>
            <CardFooter className="bg-white p-4 sm:p-6">
                <Link href={`/productInfo/${id}`} className="w-full">
                    <Button className="w-full">Checkout</Button>
                </Link>
            </CardFooter>
        </article>

    )
}
