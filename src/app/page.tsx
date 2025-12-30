import {
  GridLayout,
  MobileNav,
  HeroBrutalist,
  MarqueeBanner,
  ProjectsDatabase,
  TerminalSkills,
  AboutBrutalist,
  ContactBrutalist,
  FooterBrutalist,
} from "@/components/brutalist";

export default function Home() {
  return (
    <>
      <GridLayout>
        <HeroBrutalist />
        <MarqueeBanner />
        <ProjectsDatabase />
        <TerminalSkills />
        <AboutBrutalist />
        <ContactBrutalist />
        <FooterBrutalist />
      </GridLayout>
      
      {/* Mobile Bottom Navigation */}
      <MobileNav />
      
      {/* Bottom padding for mobile nav */}
      <div className="h-16 lg:hidden" />
    </>
  );
}
