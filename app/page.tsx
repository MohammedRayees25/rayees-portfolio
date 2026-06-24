import { Background } from "@/components/shared/background";
import { LoadingScreen } from "@/components/shared/loading-screen";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Skills } from "@/components/sections/skills";
import { Projects } from "@/components/sections/projects";
import { Experience } from "@/components/sections/experience";
import { GithubStats } from "@/components/sections/github-stats";
import { Architecture } from "@/components/sections/architecture";
import { Testimonials } from "@/components/sections/testimonials";
import { Contact } from "@/components/sections/contact";
import { PageTransition } from "@/components/shared/page-transition";

export default function Home() {
  return (
    <>
      <LoadingScreen />
      <Background />
      <Navbar />
      <PageTransition>
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <GithubStats />
          <Architecture />
          <Testimonials />
          <Contact />
        </main>
        <Footer />
      </PageTransition>
    </>
  );
}
