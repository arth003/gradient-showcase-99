import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TypeAnimation } from "react-type-animation";
import heroBg from "@/assets/hero-bg.jpg";
import profileImg from "@/assets/profile1.jpg";

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
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Left Side - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6 text-left order-2 md:order-1"
          >
            {/* Greeting */}
            <h4 className="text-2xl md:text-3xl font-semibold text-foreground">
              Hello, It's Me
            </h4>

            {/* Name */}
            <h1 className="text-4xl md:text-6xl font-bold font-space text-primary leading-none">
              Arth Nangar
            </h1>

            {/* Role Animation */}
            <h2 className="text-2xl md:text-3xl lg:text-4xl text-muted-foreground font-light">
              <span className="text-foreground font-medium mr-2">I'm a</span>
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

            {/* About Description */}
            <div className="space-y-4">
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm a passionate <span className="gradient-text font-semibold">Software Developer and a Graduate student in Computer Science.</span> My passion lies in building functional and scalable applications.
              </p>
              <p className="text-base text-muted-foreground leading-relaxed">
                Leveraging a solid foundation in languages like Python, SQL, MERN stack, I specialize in creating seamless digital experiences - from database design to robust user interface implementation.
              </p>
            </div>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
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
          </motion.div>

          {/* Right Side - Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative order-1 md:order-2"
          >
            <div className="relative w-full max-w-sm mx-auto">
              <div className="absolute inset-0 gradient-bg opacity-20 blur-3xl rounded-full" />
              <img
                src={profileImg}
                alt="Arth Nangar"
                className="relative rounded-2xl shadow-2xl w-full gradient-border"
              />
              
              {/* Name below image */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="text-center mt-6"
              >
                <span className="text-xl font-semibold text-foreground bg-card/80 backdrop-blur-sm px-6 py-2 rounded-lg border border-primary/20 shadow-lg gradient-text">
                  Arth Nangar
                </span>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Down Arrow */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <button
            onClick={() => scrollToSection("#skills")}
            className="animate-bounce text-primary hover:text-primary-glow transition-colors"
          >
            <ArrowDown size={32} />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
