import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TypeAnimation } from "react-type-animation";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url(${heroBg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-secondary/20" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(147,51,234,0.1),transparent_50%)]" />
      </div>

      {/* Floating Elements */}
      <motion.div
        animate={{
          y: [0, -20, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          y: [0, 20, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"
      />

      {/* Content */}
      <div className="container mx-auto px-4 z-10">
        <div className="text-center space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* 1. GREETING (Smallest Text) */}
            <h4 className="text-3xl font-semibold text-white mb-2">
              Hello, It's Me
            </h4>

            {/* 2. NAME (Largest, Primary Text) */}
            <h3 className="text-4xl md:text-6xl font-bold mb-6 font-space text-primary leading-none">
              Arth Nangar.
            </h3>

            {/* 3. TRANSITIONING ROLE (Medium Text with Accent) */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl text-muted-foreground font-light min-h-[4rem]">
              <span className="text-white font-medium mr-2">I'm a</span>
              <TypeAnimation
                sequence={[
                  'Software Developer',
                  2000,
                  'AI/ML Enthusiast',
                  2000,
                  'Full Stack Developer', 
                  2000,
                  'Data Analyst', 
                  2000,
                  'Creative Developer',
                  2000,
                  
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="gradient-text font-bold" 
              />
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto"
          >
            I craft beautiful, functional websites and applications with modern technologies
            and stunning animations
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button
              size="lg"
              className="gradient-bg text-lg px-8 py-6 glow-effect hover:opacity-90 transition-opacity"
              onClick={() => scrollToSection("#projects")}
            >
              View My Work
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 py-6 border-primary/50 hover:bg-primary/10"
              onClick={() => scrollToSection("#contact")}
            >
              Get In Touch
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 py-6 border-secondary/50 hover:bg-secondary/10"
              onClick={() => window.open('https://drive.google.com/file/d/1LxcKyOq2p0EW7cSMqNs4LfTQvS4yUOwL/view?usp=sharing', '_blank')}
            >
              Resume
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="pt-12"
          >
            <button
              onClick={() => scrollToSection("#about")}
              className="animate-bounce text-primary hover:text-primary-glow transition-colors"
            >
              <ArrowDown size={32} />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
