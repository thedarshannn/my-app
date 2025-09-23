import Image from "next/image";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
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
  return (
    <Card className="overflow-hidden">
      {project.image && (
        <div className="relative h-40 w-full">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-contain p-6"
          />
        </div>
      )}
      <CardHeader>
        <CardTitle>{project.title}</CardTitle>
        {project.tags?.length ? (
          <div className="mt-1 flex flex-wrap gap-2 text-xs text-muted-foreground">
            {project.tags.map((t) => (
              <span key={t} className="rounded-md border px-2 py-0.5">
                {t}
              </span>
            ))}
          </div>
        ) : null}
        {project.description ? (
          <CardDescription className="mt-2">
            {project.description}
          </CardDescription>
        ) : null}
      </CardHeader>
      {project.links?.length ? (
        <CardFooter className="gap-3">
          {project.links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm underline underline-offset-4 hover:no-underline"
              target="_blank"
              rel="noreferrer noopener"
            >
              {l.label}
            </Link>
          ))}
        </CardFooter>
      ) : null}
    </Card>
  );
}
