import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Code2, Palette, Database, Smartphone, Zap, Globe } from "lucide-react";

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skills = [
    {
      icon: Code2,
      title: "Frontend Development",
      description: "JavaScript, React, Next.js, TypeScript, Tailwind CSS",
      color: "from-primary to-primary-glow",
    },
    {
      icon: Database,
      title: "Backend Development",
      description: "C/C++, C#, Python, .Net Core, Nodejs, PostgreSQL, MongoDB, Microsoft SQL Server, APIs",
      color: "from-secondary to-accent",
    },
    {
      icon: Globe,
      title: " Tools and Deployment",
      description: "Git, Github, Vercel, Docker, CI/CD Pipelines, Postman",
      color: "from-accent to-secondary",
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/5 to-background" />
      
      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text font-space">
            Technical Skills
          </h2>
          <div className="h-1 w-24 gradient-bg mx-auto rounded-full" />
          <p className="text-lg text-muted-foreground mt-6 max-w-2xl mx-auto">
            Technologies and tools I’ve used to build real-world applications.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.05, rotateY: 5 }}
              className="group relative"
            >
              <div className="h-full bg-card rounded-2xl p-8 border border-border hover:border-primary/50 transition-all duration-300 gradient-border">
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${skill.color} flex items-center justify-center mb-6 group-hover:shadow-2xl transition-shadow duration-300 glow-effect`}>
                  <skill.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground font-space">
                  {skill.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {skill.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
