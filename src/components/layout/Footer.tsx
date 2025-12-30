import Link from "next/link";
import { portfolioData, socialNavItems } from "@/data";

export function Footer() {
  const currentYear = new Date().getFullYear();
  const { identity } = portfolioData;

  return (
    <footer className="border-t border-border bg-background" role="contentinfo">
      <div className="w-full max-w-(--max-width-content) mx-auto px-6 md:px-8 lg:px-12">
        <div className="py-12 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Branding */}
            <div>
              <Link
                href="/"
                className="text-text-primary font-semibold text-xl tracking-tight hover:opacity-80 transition-opacity inline-block mb-4"
                aria-label="Home"
              >
                {identity.preferred_name} {identity.full_name.split(" ")[1]}
              </Link>
              <p className="text-text-muted text-sm max-w-xs">
                {identity.headline}
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-text-primary font-medium text-sm mb-4 uppercase tracking-wide">
                Navigation
              </h3>
              <nav className="space-y-3" aria-label="Footer navigation">
                <a
                  href="#about"
                  className="block text-text-secondary hover:text-text-primary transition-colors text-sm"
                >
                  About
                </a>
                <a
                  href="#projects"
                  className="block text-text-secondary hover:text-text-primary transition-colors text-sm"
                >
                  Projects
                </a>
                <a
                  href="#skills"
                  className="block text-text-secondary hover:text-text-primary transition-colors text-sm"
                >
                  Skills
                </a>
                <a
                  href="#contact"
                  className="block text-text-secondary hover:text-text-primary transition-colors text-sm"
                >
                  Contact
                </a>
              </nav>
            </div>

            {/* Connect */}
            <div>
              <h3 className="text-text-primary font-medium text-sm mb-4 uppercase tracking-wide">
                Connect
              </h3>
              <div className="space-y-3">
                {socialNavItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    target={item.isExternal ? "_blank" : undefined}
                    rel={item.isExternal ? "noopener noreferrer" : undefined}
                    className="block text-text-secondary hover:text-text-primary transition-colors text-sm"
                  >
                    {item.label}
                  </a>
                ))}
                <a
                  href={identity.contact.resume_pdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-text-secondary hover:text-text-primary transition-colors text-sm"
                >
                  Resume
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-text-muted text-sm">
              © {currentYear} {identity.full_name}. Built with Next.js and
              Tailwind CSS.
            </p>
            <p className="text-text-muted text-sm">
              {identity.location.city}, {identity.location.country}
              {identity.location.remote_open && " • Open to remote work"}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
