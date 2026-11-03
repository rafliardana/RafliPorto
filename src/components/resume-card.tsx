"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "@/components/ui/accordion";
import { MapPin } from "lucide-react";

type ResumeCardProps = {
  company: string;
  initials: string;
  location: string;
  title: string;
  start: string;
  end: string;
  description: string;
};

export function ResumeCard({
  company,
  initials,
  location,
  title,
  start,
  end,
  description
}: ResumeCardProps) {
  return (
    <Accordion type="single" collapsible>
      <AccordionItem value={company} className="border-0">
        <AccordionTrigger className="group gap-3 py-0 hover:no-underline">
          <span className="flex min-w-0 flex-1 items-center gap-3">
            <span className="flex size-10 shrink-0 items-center justify-center rounded-full border bg-muted text-[10px] font-bold tracking-tight shadow-sm ring-2 ring-border/60">
              {initials}
            </span>
            <span className="flex min-w-0 flex-1 flex-col gap-1 text-left">
              <span className="truncate text-sm font-semibold sm:text-base">{company}</span>
              <span className="text-xs text-muted-foreground sm:text-sm">{title}</span>
            </span>
          </span>
          <span className="flex shrink-0 flex-col items-end gap-1 pr-1 text-xs font-normal tabular-nums text-muted-foreground">
            <span>
              {start} – {end}
            </span>
            <span className="hidden items-center gap-1 sm:flex">
              <MapPin className="size-3" aria-hidden="true" />
              {location}
            </span>
          </span>
        </AccordionTrigger>
        <AccordionContent className="pb-0 pl-[3.25rem] pt-3 text-sm leading-relaxed text-muted-foreground">
          {description}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
