import React from "react";
import { cn } from "@/lib/utils";

interface MaxWidthWrapperProps {
  className?: string;
  children: React.ReactNode;
}

const MaxWidthWrapper = ({ className, children }: MaxWidthWrapperProps) => {
  return (
    <div
      className={cn(
        // Center with a site-wide max width and responsive horizontal padding
        "mx-auto w-full max-w-screen-xl px-6 md:px-8 my-12",
        className
      )}
    >
      {children}
    </div>
  );
};

export default MaxWidthWrapper;
