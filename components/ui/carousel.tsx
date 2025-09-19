"use client";

import * as React from "react";
import useEmblaCarousel, {
  type UseEmblaCarouselType,
} from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { cn } from "@/lib/utils";

type CarouselApi = UseEmblaCarouselType[1];

export function Carousel({
  className,
  children,
  autoplay = true,
  delay = 4000,
}: {
  className?: string;
  children: React.ReactNode;
  autoplay?: boolean;
  delay?: number;
}) {
  const options = React.useMemo(() => ({ loop: true }), []);
  const plugins = React.useMemo(
    () => (autoplay ? [Autoplay({ delay })] : []),
    [autoplay, delay]
  );
  const [emblaRef] = useEmblaCarousel(options, plugins);

  return (
    <div ref={emblaRef} className={cn("overflow-hidden", className)}>
      <div className="flex -ml-4">{children}</div>
    </div>
  );
}

export function CarouselItem({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        "pl-4 flex-[0_0_80%] md:flex-[0_0_40%] lg:flex-[0_0_20%]",
        className
      )}
    >
      {children}
    </div>
  );
}
