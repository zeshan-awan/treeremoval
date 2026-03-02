"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import {
  BUSINESS_PHONE_DISPLAY,
  BUSINESS_PHONE_LINK
} from "@/lib/seoConfig";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services/tree-removal-high-point-nc", label: "Tree Removal Experts" },
  { href: "/services/emergency-tree-care-high-point-nc", label: "Emergency Tree Care" },
  { href: "/services/stump-grinding-high-point-nc", label: "Stump Grinding Services" },
  { href: "/services/land-clearing-high-point-nc", label: "Land & Lot Clearing" },
  { href: "/services/storm-cleanup-high-point-nc", label: "Storm & Damage Cleanup" },
  { href: "/services/tree-trimming-high-point-nc", label: "Tree Trimming & Pruning" },
  { href: "/services/shrub-trimming-high-point-nc", label: "Shrub & Hedge Trimming" },
  { href: "/about", label: "About Us" },
  { href: "/gallery", label: "Gallery" },
  { href: "/blog", label: "Blog" },
  { href: "/why-choose-us", label: "Why Choose Us" },
  { href: "/faqs", label: "FAQs" },
  { href: "/testimonials", label: "Testimonials" },
  { href: "/contact", label: "Contact Us" }
];

export function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/90 backdrop-blur">
      <div className="bg-charcoal text-white text-xs sm:text-sm">
        <div className="container-page flex items-center justify-between py-2 gap-3">
          <div className="flex items-center gap-4">
            <span className="font-semibold">
              High Point, NC Tree Service
            </span>
            <span className="hidden sm:inline-flex text-slate-200">
              Licensed, insured & 24/7 emergency response
            </span>
          </div>
          <div className="flex items-center gap-3">
            <a
              href={`tel:${BUSINESS_PHONE_LINK}`}
              className="font-semibold hover:text-primary"
            >
              Call: {BUSINESS_PHONE_DISPLAY}
            </a>
            <a
              href="https://wa.me/103010522223"
              aria-label="WhatsApp"
              className="flex h-8 w-8 items-center justify-center rounded-full bg-green-500 text-white hover:bg-green-600 text-xs font-semibold"
            >
              WA
            </a>
          </div>
        </div>
      </div>

      <div className="container-page flex items-center justify-between py-3 gap-4">
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-white font-bold text-lg shadow-soft">
            HP
          </div>
          <div className="flex flex-col leading-tight">
            <span className="font-extrabold text-base sm:text-lg text-charcoal">
              High Point Tree Pros
            </span>
            <span className="text-xs text-slate-600">
              Emergency Tree Service & Removal
            </span>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-5 text-sm">
          {navLinks.map((link) => {
            const active =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "relative px-1 py-1 text-slate-700 hover:text-primary transition-colors",
                  active && "text-primary font-semibold"
                )}
              >
                {link.label}
                {active && (
                  <motion.span
                    layoutId="active-nav"
                    className="absolute left-0 right-0 -bottom-1 h-0.5 rounded-full bg-primary"
                  />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <Button
            asChild
            size="sm"
            className="hidden sm:inline-flex"
          >
            <a href="#estimate-form">Get Free Estimate</a>
          </Button>
          <Button asChild variant="outline" size="sm" className="hidden md:inline-flex">
            <a href={`tel:${BUSINESS_PHONE_LINK}`}>Call Now</a>
          </Button>
        </div>
      </div>
    </header>
  );
}

