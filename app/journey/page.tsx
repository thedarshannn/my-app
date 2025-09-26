import React from "react";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import TimelineDemo from "@/components/TimelineDemo";

export default function JourneyPage() {
  return (
    <main>
      <MaxWidthWrapper className="py-5">
        {/* Header aligned with content column */}
        <div className="mb-12 text-center">
          <h1 className="text-2xl md:text-5xl font-semibold leading-tight tracking-tight text-foreground">
            My Journey
          </h1>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            A timeline of my career path, projects, and key milestones along the
            way.
          </p>
        </div>

        {/* Timeline section */}
        <div className="mt-12">
          <TimelineDemo />
        </div>
      </MaxWidthWrapper>
    </main>
  );
}
