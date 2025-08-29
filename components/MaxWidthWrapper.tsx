import React from "react";
import { cn } from "@/lib/utils";

interface MaxWidthWrapperProps {
  className?: string;
  children: React.ReactNode;
}

const MaxWidthWrapper = ({ className, children }: MaxWidthWrapperProps) => {
  return (
    <div className={cn("mx-auto max-w-screen-xl w-full my-12", className)}>
      {children}
    </div>
  );
};

export default MaxWidthWrapper;
