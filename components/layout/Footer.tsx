import Link from "next/link";
import { Logo } from "@/components/Logo";
import { Container } from "@/components/ui/Container";
import { footerDisclaimer } from "@/lib/content";
import { footerLinks, siteConfig } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-border bg-navy text-slate-300">
      <Container className="py-12 sm:py-14">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div>
            <Logo className="[&_img]:brightness-0 [&_img]:invert" />
            <p className="mt-4 text-sm">
              <a
                href={`mailto:${siteConfig.email}`}
                className="hover:text-white"
              >
                {siteConfig.email}
              </a>
            </p>
          </div>
          <nav className="flex flex-wrap gap-6 text-sm" aria-label="Footer">
            {footerLinks.map((link) => (
              <Link key={link.href} href={link.href} className="hover:text-white">
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
        <p className="mt-10 max-w-3xl border-t border-white/10 pt-8 text-xs leading-relaxed text-slate-400">
          {footerDisclaimer}
        </p>
      </Container>
    </footer>
  );
}
