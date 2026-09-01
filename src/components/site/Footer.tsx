import { Link } from "@tanstack/react-router";
import { Instagram, Mail, Phone } from "lucide-react";

import { contact } from "@/lib/academy";
import { BeadRow } from "./Decor";

export function Footer() {
  return (
    <footer className="mt-20 border-t border-border bg-secondary/50">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:px-6 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-2.5">
            <span className="flex size-10 items-center justify-center rounded-2xl bg-primary font-display text-lg font-bold text-primary-foreground">
              AJ
            </span>
            <span className="font-display text-lg font-bold">AJ Academy</span>
          </div>
          <p className="mt-3 max-w-xs text-sm text-muted-foreground">
            Abacus &amp; Bharatanatyam training for children aged 5–15.
          </p>
          <BeadRow className="mt-4" />
        </div>

        <nav className="flex flex-col gap-2 text-sm font-bold">
          <Link to="/about" className="w-fit hover:text-primary">About</Link>
          <Link to="/programs" className="w-fit hover:text-primary">Programs</Link>
          <Link to="/gallery" className="w-fit hover:text-primary">Gallery</Link>
          <Link to="/contact" className="w-fit hover:text-primary">Contact</Link>
        </nav>

        <div className="flex flex-col gap-2 text-sm">
          <a href={`tel:${contact.phoneRaw}`} className="flex items-center gap-2 font-bold hover:text-primary">
            <Phone className="size-4" aria-hidden /> {contact.phone}
          </a>
          <a href={`mailto:${contact.email}`} className="flex items-center gap-2 font-bold hover:text-primary">
            <Mail className="size-4" aria-hidden /> {contact.email}
          </a>
          <a
            href={contact.instagramUrl}
            target="_blank"
            rel="noreferrer noopener"
            className="flex items-center gap-2 font-bold hover:text-primary"
          >
            <Instagram className="size-4" aria-hidden /> {contact.instagramHandle}
          </a>
        </div>
      </div>

      <div className="border-t border-border/70 py-4 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} AJ Academy
      </div>
    </footer>
  );
}
