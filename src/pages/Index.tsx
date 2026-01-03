import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Certifications from "@/components/Certifications";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Hero1 from "@/components/Hero1";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <About />
      {/* <Hero1 /> */}
      <Skills />
      <Projects />
      <Certifications />
      <Experience />
      <Contact />
    </div>
  );
};

export default Index;
