"use client";

import React from "react";

/**
 * Renders two faint vertical guide lines at the left/right edges of the site container
 * (aligned to Tailwind's `max-w-screen-xl`). Works responsively by measuring a hidden
 * element with the same max width and updating on resize.
 */
export default function EdgeGuides() {
  const measureRef = React.useRef<HTMLDivElement | null>(null);
  const [containerWidth, setContainerWidth] = React.useState<number | null>(
    null
  );

  React.useEffect(() => {
    const update = () => {
      if (measureRef.current) {
        setContainerWidth(measureRef.current.offsetWidth);
      }
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  if (typeof window === "undefined") return null;

  const left =
    containerWidth != null ? `calc(50% - ${containerWidth / 2}px)` : undefined;
  const right =
    containerWidth != null ? `calc(50% + ${containerWidth / 2}px)` : undefined;

  return (
    <>
      {/* Hidden measurer to compute container width responsively */}
      <div
        ref={measureRef}
        className="pointer-events-none fixed -top-[9999px] left-0 right-0 mx-auto w-full max-w-screen-xl"
      />

      {/* Left guide */}
      <div
        aria-hidden
        className="pointer-events-none fixed top-0 bottom-0 hidden md:block"
        style={{ left }}
      >
        <div className="h-full w-px bg-foreground/10" />
      </div>

      {/* Right guide */}
      <div
        aria-hidden
        className="pointer-events-none fixed top-0 bottom-0 hidden md:block"
        style={{ left: right }}
      >
        <div className="h-full w-px bg-foreground/10" />
      </div>
    </>
  );
}
