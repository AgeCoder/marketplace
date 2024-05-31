"use client"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import Image from "next/image";

export const CarouselIamge = ({ images }: { images: string[] }) => {
    return (
        <Carousel className="w-full mx-auto"
            plugins={[
                Autoplay({
                    delay: 4000,
                }),
            ]}
        >
            <CarouselContent >
                {images.map((item, index) => (
                    <CarouselItem key={index}>
                        <div className="relative h-56 w-full object-cover">
                            <Image
                                alt="Product Images"
                                src={item}
                                fill
                                className=""
                            />
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious className="ml-16" />
            <CarouselNext className="mr-16" />
        </Carousel>
    )
}
