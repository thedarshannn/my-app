"use client";

import Image from "next/image";
import { Carousel, CarouselItem } from "@/components/ui/carousel";

const images = [
  "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?q=80&w=1600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?q=80&w=1600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=1600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=1600&auto=format&fit=crop",
];

export default function HomeCarousel() {
  return (
    <div className="relative mt-8">
      {/* soft gradient to separate hero from carousel on overlap */}
      <div className="pointer-events-none absolute -top-6 left-0 right-0 h-12 bg-gradient-to-b from-background to-transparent" />
      <Carousel>
        {images.map((src) => (
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
