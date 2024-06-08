import MakePaymentButton from '@/app/components/MakePaymentButton';
import ProductDes from '@/app/components/ProductDes';
import prisma from '@/app/lib/db';

import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { JSONContent } from '@tiptap/react';
import { unstable_noStore } from 'next/cache';
import Image from 'next/image';
import React from 'react';

interface Params {
    id: string;
}

async function GetData(id: string) {
    const data = await prisma.product.findUnique({
        where: {
            id: id,
        },
        select: {
            id: true,
            name: true,
            description: true,
            price: true,
            images: true,
            category: true,
            createdAt: true,
            shortSummary: true,
            User: {
                select: {
                    firstName: true,
                    lastName: true,
                    profileImage: true,
                },
            },
        },
    });

    return data;
}

const Page = async ({ params }: { params: Params }) => {
    unstable_noStore();
    const data = await GetData(params.id);
    // console.log(data);

    return (
        <section className='px-4 md:px-8 mx-auto mb-10'>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-4 mb-2">
                <div className="md:col-span-2 rounded-lg border border-gray-200 shadow-md">
                    <Carousel>
                        <CarouselContent>
                            {data?.images.map((item, index) => (
                                <CarouselItem key={index}>
                                    <div className="overflow-hidden rounded-xl aspect-w-3 aspect-h-2">
                                        <Image alt={data.name} src={item} fill className='object-fill' />
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious className="ml-16" />
                        <CarouselNext className="mr-16" />
                    </Carousel>
                </div>
                <div className="flow-root rounded-lg border border-gray-200 py-3 shadow-md">
                    <dl className="-my-3 divide-y divide-gray-100 text-sm">
                        <div className="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
                            <dt className="font-medium text-gray-900">Title</dt>
                            <dd className="text-gray-700 sm:col-span-2">{data?.name}</dd>
                        </div>

                        <div className="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
                            <dt className="font-medium text-gray-900">Category</dt>
                            <dd className="text-gray-700 sm:col-span-2">{data?.category}</dd>
                        </div>
                        <div className="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
                            <dt className="font-medium text-gray-900">Price</dt>
                            <dd className="text-gray-700 sm:col-span-2">₹{data?.price}</dd>
                        </div>
                        <div className="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
                            <dt className="font-medium text-gray-900">Summary</dt>
                            <dd className="text-gray-700 sm:col-span-2">{data?.shortSummary}</dd>
                        </div>
                        <div className="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
                            <dt className="font-medium text-gray-900">Released</dt>
                            <dd className="text-gray-700 sm:col-span-2">
                                {new Intl.DateTimeFormat("en-US", { dateStyle: "long" }).format(data?.createdAt)}
                            </dd>
                        </div>
                        <div className="p-3 w-full">
                            {/* <form action={MakePayment}>
                                <input type="hidden" value={params.id} name='productId' />
                                <BuySubmitButton title='Buy Now' />
                            </form> */}
                            <MakePaymentButton data={data} />
                        </div>
                    </dl>
                </div>
            </div>
            <div className='mt-2'>
                <ProductDes content={data?.description as JSONContent} />
            </div>
        </section>
    );
};

export default Page;
