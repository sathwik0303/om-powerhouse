import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const LINKS = [
  { label: "Home", href: "#home" },
  { label: "Technology", href: "#technology" },
  { label: "Applications", href: "#applications" },
  { label: "Installations", href: "#installations" },
  { label: "Gallery", href: "#gallery" },
  { label: "News", href: "#news" },
  { label: "Contact", href: "#contact" },
];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled
          ? "border-b border-border bg-forest-deep/80 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
        <a href="#home" className="flex items-center gap-3">
          <span className="grid size-9 place-items-center border border-brand/50 text-brand">
            <span className="display text-sm">OM</span>
          </span>
          <span className="display text-sm tracking-[0.2em] text-foreground">
            OM Solutions
          </span>
        </a>

        <nav className="hidden items-center gap-7 lg:flex">
          {LINKS.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="text-[0.78rem] font-medium uppercase tracking-[0.16em] text-muted-foreground transition-colors hover:text-brand-glow"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            className="border border-brand bg-brand px-5 py-2.5 text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-primary-foreground transition-all hover:bg-transparent hover:text-brand-glow"
          >
            Get in touch
          </a>
        </nav>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
          className="grid size-10 place-items-center border border-border text-foreground lg:hidden"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-forest-deep/95 backdrop-blur-xl lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col px-5 py-4">
            {LINKS.map((l) => (
              <a
                key={l.label}
                href={l.href}
                onClick={() => setOpen(false)}
                className="border-b border-border/60 py-3 text-sm uppercase tracking-[0.16em] text-muted-foreground"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-4 bg-brand px-5 py-3 text-center text-xs font-semibold uppercase tracking-[0.18em] text-primary-foreground"
            >
              Get in touch
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
