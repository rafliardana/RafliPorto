import { Dock, DockIcon } from "@/components/magicui/dock";
import { ModeToggle } from "@/components/mode-toggle";
import { Separator } from "@/components/ui/separator";
import {
  Tooltip,
  TooltipArrow,
  TooltipContent,
  TooltipTrigger
} from "@/components/ui/tooltip";
import { DATA } from "@/data/resume";

function DockLink({
  href,
  label,
  icon: Icon
}: {
  href: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
}) {
  const external = href.startsWith("http");
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <a
          href={href}
          aria-label={label}
          target={external ? "_blank" : undefined}
          rel={external ? "noopener noreferrer" : undefined}
        >
          <DockIcon className="cursor-pointer rounded-full border bg-background p-0 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground">
            <Icon className="size-full" />
          </DockIcon>
        </a>
      </TooltipTrigger>
      <TooltipContent side="top" sideOffset={8} className="rounded-lg px-3 py-1.5">
        <p>{label}</p>
        <TooltipArrow />
      </TooltipContent>
    </Tooltip>
  );
}

export default function Navbar() {
  return (
    <nav
      className="pointer-events-none fixed inset-x-0 bottom-4 z-50 px-3"
      aria-label="Primary navigation"
    >
      <Dock
        magnification={52}
        className="pointer-events-auto relative mx-auto flex h-14 max-w-full gap-1 overflow-x-auto rounded-full border bg-card/90 p-2 shadow-[0_0_18px_4px] shadow-primary/5 backdrop-blur-3xl"
      >
        {DATA.navbar.map((item) => (
          <DockLink key={item.href} {...item} />
        ))}
        <Separator orientation="vertical" className="mx-1 my-auto h-2/3" />
        {DATA.social.map((item) => (
          <DockLink key={item.name} href={item.url} label={item.name} icon={item.icon} />
        ))}
        <Separator orientation="vertical" className="mx-1 my-auto h-2/3" />
        <Tooltip>
          <TooltipTrigger asChild>
            <DockIcon className="cursor-pointer rounded-full border bg-background p-0 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground">
              <ModeToggle className="size-full cursor-pointer" />
            </DockIcon>
          </TooltipTrigger>
          <TooltipContent side="top" sideOffset={8} className="rounded-lg px-3 py-1.5">
            <p>Theme</p>
            <TooltipArrow />
          </TooltipContent>
        </Tooltip>
      </Dock>
    </nav>
  );
}
