import Link from "next/link";
import {
  GridLayout,
  MobileNav,
  ProjectsDatabase,
  FooterBrutalist,
} from "@/components/brutalist";

export default function AllProjectsPage() {
  return (
    <>
      <GridLayout>
        {/* Back Navigation */}
        <div className="px-4 md:px-6 lg:px-8 pt-24 pb-8">
          <Link 
            href="/#projects" 
            className="inline-flex items-center gap-2 font-mono text-sm text-text-muted hover:text-accent-primary transition-colors"
          >
            <span aria-hidden="true">←</span>
            Back to home
          </Link>
        </div>

        {/* All Projects */}
        <ProjectsDatabase showFeaturedOnly={false} />
        
        <FooterBrutalist />
      </GridLayout>
      
      {/* Mobile Bottom Navigation */}
      <MobileNav />
      
      {/* Bottom padding for mobile nav */}
      <div className="h-16 lg:hidden" />
    </>
  );
}
