import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/programs", label: "Programs" },
  { to: "/gallery", label: "Gallery" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        <Link to="/" className="flex items-center gap-2.5" onClick={() => setOpen(false)}>
          <span className="flex size-10 items-center justify-center rounded-2xl bg-primary font-display text-lg font-bold text-primary-foreground">
            AJ
          </span>
          <span className="leading-tight">
            <span className="block font-display text-lg font-bold">AJ Academy</span>
            <span className="block text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
              Abacus &amp; Bharatanatyam
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              activeOptions={{ exact: link.to === "/" }}
              activeProps={{ className: "bg-secondary text-secondary-foreground" }}
              className="rounded-full px-3.5 py-2 text-sm font-bold text-foreground/80 transition-colors hover:bg-secondary hover:text-secondary-foreground"
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/contact"
            hash="enquire"
            className="ml-2 rounded-full bg-coral px-4 py-2 text-sm font-bold text-coral-foreground shadow-soft transition-transform hover:-translate-y-0.5"
          >
            Enquire Now
          </Link>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="flex size-11 items-center justify-center rounded-2xl bg-secondary text-secondary-foreground md:hidden"
        >
          {open ? <Menu className="size-5 hidden" /> : null}
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {open ? (
        <div className="border-t border-border bg-background md:hidden">
          <nav className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-3">
            {links.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                activeOptions={{ exact: link.to === "/" }}
                onClick={() => setOpen(false)}
                activeProps={{ className: "bg-secondary text-secondary-foreground" }}
                className="rounded-xl px-4 py-3 text-base font-bold text-foreground/85"
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/contact"
              hash="enquire"
              onClick={() => setOpen(false)}
              className="mt-1 rounded-xl bg-coral px-4 py-3 text-center text-base font-bold text-coral-foreground"
            >
              Enquire Now
            </Link>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
