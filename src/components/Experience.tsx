import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { GraduationCap, Briefcase } from "lucide-react";

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const experiences = [
    {
      year: "2025",
      title: "Graduation",
      company: "Dharmasth Desai University, Nadiad",
      description: "Major in Information Technology with a CGPA of 8.98. Nobody asks this but it's okay.",
      type: "education" as const,
    },
    {
      year: "2022",
      title: "Internship",
      company: "TechCorp",
      description: "Developed a Full-stack application with MERN stack",
      type: "work" as const,
    },
    {
      year: "2021",
      title: "Higher Secondary School",
      company: "Modi School, Rajkot",
      description: "Subjects being PCM - I barely survived with 94.0% marks aggregate. Flex fridays, fellas.",
      type: "education" as const,
    },
    {
      year: "2019",
      title: "Secondary School",
      company: "Genius International school, Keshod",
      description: "I barely survived with 90.0% marks aggregate. Flex fridays, fellas.",
      type: "education" as const,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section id="experience" className="py-20 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/50 to-background"></div>
      
      <div className="container mx-auto max-w-4xl relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-space">
            <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            My journey through education and professional growth
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="relative"
        >
          {/* Vertical timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-border"></div>

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="relative mb-16 last:mb-0"
            >
              {/* Year label */}
              <div className="flex items-center justify-center mb-8">
                <h3 className="text-3xl md:text-4xl font-bold text-muted-foreground">
                  {exp.year}
                </h3>
              </div>

              {/* Timeline dot with pulse animation */}
              <div className="absolute left-1/2 top-20 transform -translate-x-1/2 z-10">
                <div className="w-4 h-4 rounded-full bg-green-500 pulse-dot"></div>
              </div>

              {/* Content card */}
              <div className="flex items-center justify-center">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="w-full max-w-md p-6 rounded-lg border border-border bg-card/50 backdrop-blur-sm"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-2 rounded-lg bg-primary/10">
                      {exp.type === "education" ? (
                        <GraduationCap className="w-6 h-6 text-primary" />
                      ) : (
                        <Briefcase className="w-6 h-6 text-secondary" />
                      )}
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-semibold text-foreground mb-1">
                        {exp.title}
                      </h4>
                      <p className="text-sm text-muted-foreground mb-3">
                        {exp.company}
                      </p>
                      <p className="text-foreground/80 text-sm leading-relaxed">
                        {exp.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
