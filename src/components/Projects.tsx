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
      sourceCode: "https://github.com/yourusername/ecommerce-platform",
      liveDemo: "https://ecommerce-demo.example.com",
    },
    {
      title: "Social Media Dashboard",
      description: "Analytics dashboard for social media management with real-time data visualization and insights.",
      tech: ["Next.js", "TypeScript", "Chart.js", "API Integration"],
      gradient: "from-secondary to-accent",
      sourceCode: "https://github.com/yourusername/social-dashboard",
      liveDemo: "https://social-dashboard-demo.example.com",
    },
    {
      title: "AI Content Generator",
      description: "AI-powered content creation tool leveraging machine learning for automated text generation.",
      tech: ["React", "Python", "OpenAI", "FastAPI"],
      gradient: "from-accent to-primary",
      sourceCode: "https://github.com/yourusername/ai-content-generator",
      liveDemo: "https://ai-content-demo.example.com",
    },
    {
      title: "Task Management App",
      description: "Collaborative task manager with real-time updates, team features, and productivity analytics.",
      tech: ["Vue.js", "Firebase", "Tailwind CSS", "PWA"],
      gradient: "from-primary-glow to-secondary",
      sourceCode: "https://github.com/yourusername/task-manager",
      liveDemo: "https://task-manager-demo.example.com",
    },
    {
      title: "Portfolio CMS",
      description: "Headless CMS for creative professionals to showcase their work with customizable templates.",
      tech: ["Next.js", "Sanity.io", "GraphQL", "Framer Motion"],
      gradient: "from-secondary to-primary",
      sourceCode: "https://github.com/yourusername/portfolio-cms",
      liveDemo: "https://portfolio-cms-demo.example.com",
    },
    {
      title: "Fitness Tracker",
      description: "Mobile-first fitness tracking application with workout plans, progress monitoring, and social features.",
      tech: ["React Native", "MongoDB", "Express", "WebSocket"],
      gradient: "from-accent to-secondary",
      sourceCode: "https://github.com/yourusername/fitness-tracker",
      liveDemo: "https://fitness-tracker-demo.example.com",
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
                {/* Gradient Image Area */}
                <div className={`h-40 md:h-48 bg-gradient-to-br ${project.gradient} relative overflow-hidden rounded-t-2xl`}>
                  <div className="absolute inset-0 bg-black/10" />
                  {/* Decorative elements */}
                  <div className="absolute top-4 right-4 w-20 h-20 bg-white/10 rounded-full blur-xl" />
                  <div className="absolute bottom-4 left-4 w-16 h-16 bg-white/5 rounded-full blur-lg" />
                </div>
                
                <div className="p-5 md:p-6 space-y-4">
                  <h3 className="text-xl md:text-2xl font-bold text-foreground font-space">
                    {project.title}
                  </h3>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 text-xs md:text-sm bg-primary/10 text-primary rounded-full border border-primary/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  {/* Action Buttons */}
                  <div className="flex gap-3 pt-4">
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1 gap-2 border-primary/30 hover:bg-primary/10 hover:border-primary"
                      asChild
                    >
                      <a href={project.sourceCode} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4" />
                        Source Code
                      </a>
                    </Button>
                    <Button
                      size="sm"
                      className="flex-1 gap-2 gradient-bg hover:opacity-90"
                      asChild
                    >
                      <a href={project.liveDemo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4" />
                        Live Demo
                      </a>
                    </Button>
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
