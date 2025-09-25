import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import ProjectsSection from "@/components/ProjectsSection";

export default function ProjectsPage() {
  return (
    <main>
      <MaxWidthWrapper className="py-5">
        {/* Header aligned with content column */}
        <div className="mb-12 text-center">
          <h1 className="text-2xl md:text-5xl font-semibold leading-tight tracking-tight text-foreground">
            Projects where curiosity meets code.
          </h1>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            A showcase of ideas turned into code — blending software, hardware,
            and curiosity.
          </p>
        </div>

        <ProjectsSection />
      </MaxWidthWrapper>
    </main>
  );
}
