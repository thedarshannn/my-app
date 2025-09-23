import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import ProjectsSection from "@/components/ProjectsSection";

export default function ProjectsPage() {
  return (
    <main>
      <MaxWidthWrapper className="py-24">
        <ProjectsSection title="Selected Projects" />
      </MaxWidthWrapper>
    </main>
  );
}
