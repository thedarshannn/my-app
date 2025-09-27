"use client";

import Image from "next/image";
import { Carousel, CarouselItem } from "@/components/ui/carousel";

// Define fixed set of carousel images
const carouselImages = [
  "/carousel/4.JPG",
  "/carousel/2.JPG",
  "/carousel/7.JPG",
  "/carousel/6.JPG",
  "/carousel/8.jpg",
];

export default function HomeCarousel() {
  return (
    <div className="relative mt-8">
      {/* soft gradient to separate hero from carousel on overlap */}
      <div className="pointer-events-none absolute -top-6 left-0 right-0 h-12 bg-gradient-to-b from-background to-transparent" />
      <Carousel>
        {carouselImages.map((src: string) => (
          <CarouselItem key={src}>
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl shadow-xl ring-1 ring-black/10 dark:ring-white/10">
              <Image
                src={src}
                alt="Gallery image"
                fill
                sizes="(min-width: 1024px) 20vw, (min-width: 800px) 40vw, 80vw"
                className="object-cover"
              />
            </div>
          </CarouselItem>
        ))}
      </Carousel>
    </div>
  );
}
