import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ArrowDown } from "lucide-react";
import profileImg from "@/assets/profile1.jpg";

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      
      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text font-space">
            About Me
          </h2>
          <div className="h-1 w-24 gradient-bg mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative w-full max-w-md mx-auto">
              <div className="absolute inset-0 gradient-bg opacity-20 blur-3xl rounded-full" />
              <img
                src={profileImg}
                alt="Profile"
                className="relative rounded-2xl shadow-2xl w-full gradient-border"
              />
              
              {/* Arrow with "That's me" */}
              <motion.div
                initial={{ opacity: 0, x: -30, y: -30 }}
                animate={inView ? { opacity: 1, x: 0, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="absolute -top-8 left-4 md:-top-12 md:-left-8 flex items-center gap-2"
              >
                <ArrowDown className="w-5 h-5 md:w-6 md:h-6 text-primary rotate-[135deg]" />
                <span className="text-sm md:text-lg font-medium text-foreground bg-card/80 backdrop-blur-sm px-2 py-1 md:px-3 rounded-lg border border-primary/20 shadow-lg">
                  That's me
                </span>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold text-foreground font-space">
              Hello! I'm a passionate <span className="gradient-text">Full Stack Developer</span>
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              With expertise in modern web technologies, I specialize in creating seamless digital
              experiences that combine beautiful design with powerful functionality.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              My journey in web development started with a curiosity for how things work and
              evolved into a passion for crafting innovative solutions that make a difference.
            </p>
            <div className="space-y-4 pt-4">
              <div className="flex items-center gap-3 md:gap-4">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg gradient-bg flex items-center justify-center text-lg md:text-xl font-bold shrink-0">
                  5+
                </div>
                <div>
                  <p className="font-semibold text-foreground text-sm md:text-base">Years Experience</p>
                  <p className="text-xs md:text-sm text-muted-foreground">In Web Development</p>
                </div>
              </div>
              <div className="flex items-center gap-3 md:gap-4">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg gradient-bg flex items-center justify-center text-lg md:text-xl font-bold shrink-0">
                  50+
                </div>
                <div>
                  <p className="font-semibold text-foreground text-sm md:text-base">Projects Completed</p>
                  <p className="text-xs md:text-sm text-muted-foreground">With Happy Clients</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
