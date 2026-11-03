import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { FlickeringGrid } from "@/components/magicui/flickering-grid";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { ContactForm } from "@/components/contact-form";
import { ProjectCard } from "@/components/project-card";
import { ResumeCard } from "@/components/resume-card";
import { DATA } from "@/data/resume";
import { ArrowUpRight, Mail, MapPin } from "lucide-react";

const DELAY = 0.04;

export default function Page() {
  return (
    <main className="relative flex min-h-dvh flex-col gap-16">
      <section id="hero" className="scroll-mt-8">
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-center">
          <div className="order-2 flex max-w-xl flex-col gap-3 sm:order-1">
            <BlurFadeText
              delay={DELAY}
              className="text-4xl font-semibold tracking-tighter sm:text-5xl"
              text={`Hi, I'm ${DATA.firstName}`}
            />
            <BlurFadeText
              delay={DELAY * 2}
              className="text-lg leading-relaxed text-muted-foreground sm:text-xl"
              text={DATA.description}
            />
            <BlurFade delay={DELAY * 3}>
              <p className="flex items-center gap-1.5 text-sm text-muted-foreground">
                <MapPin className="size-4" aria-hidden="true" />
                {DATA.location}
              </p>
            </BlurFade>
          </div>
          <BlurFade delay={DELAY} className="order-1 sm:order-2">
            <Avatar className="size-24 border shadow-lg ring-4 ring-muted sm:size-28">
              <AvatarFallback className="bg-linear-to-br from-foreground to-foreground/75 text-xl font-bold tracking-tight text-background">
                {DATA.initials}
              </AvatarFallback>
            </Avatar>
          </BlurFade>
        </div>
      </section>

      <section id="about" className="scroll-mt-8">
        <BlurFade delay={DELAY * 3} inView>
          <h2 className="text-xl font-bold">About</h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            {DATA.summary}
          </p>
        </BlurFade>
      </section>

      <section id="work" className="scroll-mt-8">
        <BlurFade delay={DELAY * 4} inView>
          <h2 className="text-xl font-bold">Work Experience</h2>
        </BlurFade>
        <div className="mt-6 flex flex-col gap-7">
          {DATA.work.map((work, index) => (
            <BlurFade key={work.company} delay={DELAY * 5 + index * 0.05} inView>
              <ResumeCard {...work} />
            </BlurFade>
          ))}
        </div>
      </section>

      <section id="education" className="scroll-mt-8">
        <BlurFade delay={DELAY * 5} inView>
          <h2 className="text-xl font-bold">Education</h2>
        </BlurFade>
        <div className="mt-6 flex flex-col gap-6">
          {DATA.education.map((education, index) => (
            <BlurFade key={education.school} delay={DELAY * 6 + index * 0.05} inView>
              <div className="flex items-center justify-between gap-4">
                <div className="flex min-w-0 items-center gap-3">
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-full border bg-muted text-[10px] font-bold shadow-sm ring-2 ring-border/60">
                    {education.initials}
                  </div>
                  <div className="min-w-0">
                    <h3 className="truncate font-semibold">{education.school}</h3>
                    <p className="text-sm text-muted-foreground">{education.degree}</p>
                  </div>
                </div>
                <p className="shrink-0 text-xs tabular-nums text-muted-foreground">
                  {education.start} – {education.end}
                </p>
              </div>
            </BlurFade>
          ))}
        </div>
      </section>

      <section id="skills" className="scroll-mt-8">
        <BlurFade delay={DELAY * 7} inView>
          <h2 className="text-xl font-bold">Skills</h2>
        </BlurFade>
        <div className="mt-5 flex flex-col gap-5">
          {DATA.skillGroups.map((group, groupIndex) => (
            <BlurFade key={group.name} delay={DELAY * 8 + groupIndex * 0.05} inView>
              <div className="flex items-start gap-3">
                <group.icon
                  className="mt-1 size-4 shrink-0 text-muted-foreground"
                  aria-hidden="true"
                />
                <div>
                  <h3 className="mb-2 text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                    {group.name}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <span
                        key={skill}
                        className="inline-flex h-8 items-center rounded-xl border bg-background px-3 text-sm font-medium shadow-sm ring-2 ring-border/20"
                        title={skill === "SSMS" ? "SQL Server Management Studio" : undefined}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </BlurFade>
          ))}
        </div>
      </section>

      <section id="projects" className="scroll-mt-8">
        <BlurFade delay={DELAY * 9} inView>
          <div className="flex items-center">
            <div className="h-px flex-1 bg-linear-to-r from-transparent to-border" />
            <span className="rounded-xl bg-primary px-4 py-1 text-sm font-medium text-primary-foreground">
              My Projects
            </span>
            <div className="h-px flex-1 bg-linear-to-l from-transparent to-border" />
          </div>
          <div className="mx-auto mt-4 max-w-xl text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
              Check out my latest work
            </h2>
            <p className="mt-3 text-balance leading-relaxed text-muted-foreground">
              A selection of web applications shaped around retail, inventory, and
              customer-facing experiences.
            </p>
          </div>
        </BlurFade>
        <div className="mx-auto mt-8 grid max-w-[800px] grid-cols-1 gap-4 sm:grid-cols-2">
          {DATA.projects.map((project, index) => (
            <BlurFade
              key={project.title}
              delay={DELAY * 10 + index * 0.05}
              inView
              className="h-full"
            >
              <ProjectCard project={project} />
            </BlurFade>
          ))}
        </div>
      </section>

      <section id="contact" className="scroll-mt-8">
        <BlurFade delay={DELAY * 11} inView>
          <div className="relative overflow-hidden rounded-xl border p-6 sm:p-10">
            <div className="pointer-events-none absolute inset-x-0 top-0 h-1/2 overflow-hidden">
              <FlickeringGrid
                className="size-full"
                squareSize={2}
                gridGap={3}
                maxOpacity={0.16}
                style={{
                  maskImage: "linear-gradient(to bottom, black, transparent)",
                  WebkitMaskImage: "linear-gradient(to bottom, black, transparent)"
                }}
              />
            </div>
            <div className="relative">
              <div className="text-center">
                <span className="inline-flex rounded-xl bg-primary px-4 py-1 text-sm font-medium text-primary-foreground">
                  Contact
                </span>
                <h2 className="mt-5 text-3xl font-bold tracking-tighter sm:text-5xl">
                  Get in touch
                </h2>
                <p className="mx-auto mt-3 max-w-lg text-balance text-muted-foreground">
                  Have a project, opportunity, or question in mind? Send me a message
                  and I&apos;ll get back to you when I can.
                </p>
              </div>
              <div className="mt-8">
                <ContactForm />
              </div>
              <div className="mt-6 flex flex-wrap justify-center gap-x-5 gap-y-2 text-sm">
                <a
                  href={`mailto:${DATA.contact.email}`}
                  className="inline-flex items-center gap-1.5 text-muted-foreground hover:text-foreground"
                >
                  <Mail className="size-4" aria-hidden="true" />
                  Email
                </a>
                {[
                  ["LinkedIn", DATA.contact.linkedin],
                  ["GitHub", DATA.contact.github],
                  ["Design portfolio", DATA.contact.design]
                ].map(([label, href]) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-muted-foreground hover:text-foreground"
                  >
                    {label}
                    <ArrowUpRight className="size-3" aria-hidden="true" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </BlurFade>
      </section>

      <footer className="pb-3 text-center text-xs text-muted-foreground">
        <p>© {new Date().getFullYear()} {DATA.name}. All rights reserved.</p>
        <p className="mt-1">Built with Next.js and Magic UI.</p>
      </footer>
    </main>
  );
}
