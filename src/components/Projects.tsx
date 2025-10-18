import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with payment integration, inventory management, and real-time analytics.",
      tech: ["React", "Node.js", "PostgreSQL", "Stripe"],
      gradient: "from-primary to-secondary",
    },
    {
      title: "Social Media Dashboard",
      description: "Analytics dashboard for social media management with real-time data visualization and insights.",
      tech: ["Next.js", "TypeScript", "Chart.js", "API Integration"],
      gradient: "from-secondary to-accent",
    },
    {
      title: "AI Content Generator",
      description: "AI-powered content creation tool leveraging machine learning for automated text generation.",
      tech: ["React", "Python", "OpenAI", "FastAPI"],
      gradient: "from-accent to-primary",
    },
    {
      title: "Task Management App",
      description: "Collaborative task manager with real-time updates, team features, and productivity analytics.",
      tech: ["Vue.js", "Firebase", "Tailwind CSS", "PWA"],
      gradient: "from-primary-glow to-secondary",
    },
    {
      title: "Portfolio CMS",
      description: "Headless CMS for creative professionals to showcase their work with customizable templates.",
      tech: ["Next.js", "Sanity.io", "GraphQL", "Framer Motion"],
      gradient: "from-secondary to-primary",
    },
    {
      title: "Fitness Tracker",
      description: "Mobile-first fitness tracking application with workout plans, progress monitoring, and social features.",
      tech: ["React Native", "MongoDB", "Express", "WebSocket"],
      gradient: "from-accent to-secondary",
    },
  ];

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-accent/5 to-background" />
      
      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text font-space">
            Featured Projects
          </h2>
          <div className="h-1 w-24 gradient-bg mx-auto rounded-full" />
          <p className="text-lg text-muted-foreground mt-6 max-w-2xl mx-auto">
            A selection of my recent work showcasing different technologies and design approaches
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative"
            >
              <div className="h-full bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/50 transition-all duration-300">
                <div className={`h-48 bg-gradient-to-br ${project.gradient} relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-300" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 gap-4">
                    <Button
                      size="icon"
                      variant="secondary"
                      className="rounded-full"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </Button>
                    <Button
                      size="icon"
                      variant="secondary"
                      className="rounded-full"
                    >
                      <Github className="w-5 h-5" />
                    </Button>
                  </div>
                </div>
                
                <div className="p-6 space-y-4">
                  <h3 className="text-2xl font-bold text-foreground font-space">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 text-sm bg-primary/10 text-primary rounded-full border border-primary/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
