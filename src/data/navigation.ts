/**
 * Navigation configuration
 */

import { NavItem } from "@/types";

export const mainNavItems: NavItem[] = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export const socialNavItems: NavItem[] = [
  { label: "GitHub", href: "https://github.com/SubratDash67", isExternal: true },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/subrat-dash-sd2026/",
    isExternal: true,
  },
  { label: "Email", href: "mailto:subratdash2022@gmail.com", isExternal: true },
];
