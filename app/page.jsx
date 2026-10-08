import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import dynamic from "next/dynamic";
import LazySection from "@/components/LazySection";

const Services = dynamic(() => import("@/components/services"));
const About = dynamic(() => import("@/components/about"));
const Portfolio = dynamic(() => import("@/components/portfolio"));
// const Advantages = dynamic(() => import("@/components/advantages"));
const BrandsSection = dynamic(() => import("@/components/brands-we-work-with"));
const Testimonials = dynamic(() => import("@/components/testimonials"));
const TechStack = dynamic(() => import("@/components/tech-stack"));
const Instagram = dynamic(() => import("@/components/instagram"));
const Process = dynamic(() => import("@/components/Process-Section"));
// HIDDEN — Our Creative Team section (comment back in to restore)
// const Team = dynamic(() => import("@/components/team"));

const Contact = dynamic(() => import("@/components/contact"));
const Footer = dynamic(() => import("@/components/footer"));
const DynamicPopup = dynamic(() => import("@/components/DynamicPopup"));

import { createPageMetadata, SITE_TITLE, SITE_DESCRIPTION } from "@/lib/seo";

export const metadata = createPageMetadata(SITE_TITLE, SITE_DESCRIPTION, "/");

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main id="main" className="flex flex-col">
        <Hero />
        {/* <About /> */}

        <LazySection minHeight="500px">
          <Portfolio />
        </LazySection>

        <Services />

        <LazySection minHeight="400px">
          <Process />
        </LazySection>

        <LazySection minHeight="400px">
          <BrandsSection />
        </LazySection>

        {/* <LazySection minHeight="400px">
          <Testimonials />
        </LazySection>

        <LazySection minHeight="400px">
          <TechStack />
        </LazySection> */}

        <LazySection minHeight="400px">
          <Instagram />
        </LazySection>

        {/* HIDDEN — Our Creative Team section (comment back in to restore)
        <LazySection minHeight="400px">
          <Team />
        </LazySection>
        */}

        <LazySection minHeight="500px">
          <Contact />
        </LazySection>
      </main>

      <LazySection minHeight="200px">
        <DynamicPopup />
      </LazySection>

      <Footer />
    </>
  );
}
