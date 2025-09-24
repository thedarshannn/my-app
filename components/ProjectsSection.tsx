import Image from "next/image";
import Link from "next/link";
import { Github, ExternalLink, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import projects, { type Project } from "@/config/projects";

export default function ProjectsSection({
  title = "Projects",
  limit,
}: {
  title?: string;
  limit?: number;
}) {
  const items = typeof limit === "number" ? projects.slice(0, limit) : projects;
  return (
    <section>
      <div className="flex items-end justify-between">
        <h2 className="text-2xl md:text-3xl font-semibold">{title}</h2>
      </div>
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((p) => (
          <ProjectCard key={p.title} project={p} />
        ))}
      </div>
    </section>
  );
}

function ProjectCard({ project }: { project: Project }) {
  const left = project.links?.[0];
  const right = project.links?.[1];
  return (
    <CardContainer className="inter-var w-full">
      <CardBody className="group/card bg-gray-50 text-card-foreground dark:bg-black dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:border-white/[0.2] border border-border rounded-2xl w-auto sm:w-[30rem] h-auto p-6">
        <CardItem translateZ="50" className="text-xl font-semibold">
          {project.title}
        </CardItem>
        {project.description ? (
          <CardItem
            translateZ="30"
            as="p"
            className="mt-2 text-muted-foreground"
          >
            {project.description}
          </CardItem>
        ) : null}
        {project.image && (
          <CardItem translateZ="80" className="relative w-full mt-4">
            <div className="relative w-full overflow-hidden rounded-lg shadow-md aspect-[16/9]">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                priority={false}
              />
            </div>
          </CardItem>
        )}
        {project.tags?.length ? (
          <CardItem translateZ="25" className="mt-4 flex flex-wrap gap-2">
            {project.tags.map((t) => (
              <Badge key={t} variant="secondary" className="text-xs">
                {t}
              </Badge>
            ))}
          </CardItem>
        ) : null}
        {(left || right) && (
          <div className="flex justify-between items-center mt-8">
            {left ? (
              <CardItem translateZ={20} asChild>
                <Link
                  href={left.href}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex items-center gap-1 text-sm"
                  aria-label={`${left.label} – ${project.title}`}
                >
                  {/^github/i.test(left.label) ? (
                    <Github className="h-4 w-4" />
                  ) : (
                    <ExternalLink className="h-4 w-4" />
                  )}
                  {left.label} <ArrowRight className="h-4 w-4" />
                </Link>
              </CardItem>
            ) : (
              <span />
            )}
            {right ? (
              <CardItem translateZ={20}>
                <Button asChild size="sm" className="rounded-xl">
                  <Link
                    href={right.href}
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label={`${right.label} – ${project.title}`}
                  >
                    {/^github/i.test(right.label) ? (
                      <Github />
                    ) : (
                      <ExternalLink />
                    )}
                    {right.label}
                  </Link>
                </Button>
              </CardItem>
            ) : null}
          </div>
        )}
      </CardBody>
    </CardContainer>
  );
}
