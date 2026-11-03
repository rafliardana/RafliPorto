import { FlickeringGrid } from "@/components/magicui/flickering-grid";
import Navbar from "@/components/navbar";
import { ThemeProvider } from "@/components/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import { DATA } from "@/data/resume";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const cabinet = localFont({
  src: "../../public/fonts/CabinetGrotesk-Medium.ttf",
  variable: "--font-sans",
  display: "swap"
});

const clash = localFont({
  src: "../../public/fonts/ClashDisplay-Semibold.ttf",
  variable: "--font-display",
  display: "swap"
});

export const metadata: Metadata = {
  metadataBase: new URL(DATA.url),
  title: {
    default: `${DATA.name} — Portfolio`,
    template: `%s | ${DATA.name}`
  },
  description: DATA.description,
  alternates: { canonical: "/" },
  openGraph: {
    title: `${DATA.name} — Portfolio`,
    description: DATA.description,
    url: DATA.url,
    siteName: DATA.name,
    locale: "en_US",
    type: "website",
    images: [{ url: "/og-card.png", width: 1200, height: 630 }]
  },
  twitter: {
    card: "summary_large_image",
    title: `${DATA.name} — Portfolio`,
    description: DATA.description,
    images: ["/og-card.png"]
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "relative min-h-screen bg-background font-sans text-foreground antialiased",
          cabinet.variable,
          clash.variable
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <TooltipProvider delayDuration={100}>
            <div className="pointer-events-none absolute inset-x-0 top-0 h-28 overflow-hidden">
              <FlickeringGrid
                className="size-full"
                squareSize={2}
                gridGap={3}
                maxOpacity={0.12}
                style={{
                  maskImage: "linear-gradient(to bottom, black, transparent)",
                  WebkitMaskImage: "linear-gradient(to bottom, black, transparent)"
                }}
              />
            </div>
            <div className="relative z-10 mx-auto max-w-2xl px-5 pb-32 pt-12 sm:px-6 sm:pt-24">
              {children}
            </div>
            <Navbar />
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
