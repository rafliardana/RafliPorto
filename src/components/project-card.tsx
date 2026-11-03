/* eslint-disable @next/next/no-img-element */
import { Badge } from "@/components/ui/badge";
import { ArrowUpRight } from "lucide-react";

type ProjectCardProps = {
  project: (typeof import("@/data/resume").DATA.projects)[number];
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-xl border bg-card transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/5 hover:ring-2 hover:ring-border">
      <a
        href={project.href}
        target="_blank"
        rel="noopener noreferrer"
        className="relative block aspect-video overflow-hidden border-b bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-inset"
        aria-label={`Open ${project.title}`}
      >
        <img
          src={project.image}
          alt={project.imageAlt}
          className="size-full object-cover transition-transform duration-500 group-hover:scale-[1.025]"
        />
        <span className="absolute right-3 top-3 flex size-8 items-center justify-center rounded-full border bg-background/85 text-foreground opacity-0 shadow-sm backdrop-blur transition-all group-hover:opacity-100 group-focus-within:opacity-100">
          <ArrowUpRight className="size-4" aria-hidden="true" />
        </span>
      </a>
      <div className="flex flex-1 flex-col gap-3 p-4">
        <div>
          <div className="flex items-start justify-between gap-4">
            <h3 className="font-semibold tracking-tight">{project.title}</h3>
            <span className="text-xs tabular-nums text-muted-foreground">{project.dates}</span>
          </div>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            {project.description}
          </p>
        </div>
        <div className="flex flex-wrap gap-1.5">
          {project.technologies.map((technology) => (
            <Badge key={technology} variant="secondary" className="rounded-md text-[10px]">
              {technology}
            </Badge>
          ))}
        </div>
        <div className="mt-auto flex flex-wrap gap-2 pt-1">
          {project.links.map((link) => (
            <a
              key={`${project.title}-${link.type}`}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-7 items-center gap-1.5 rounded-md bg-primary px-2.5 text-xs font-medium text-primary-foreground transition-opacity hover:opacity-85 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            >
              <link.icon className="size-3" aria-hidden="true" />
              {link.type}
            </a>
          ))}
        </div>
      </div>
    </article>
  );
}
