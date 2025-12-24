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
      year: "2025 - 2027",
      title: "Graduate Studies",
      company: "New Jersey Insitute of Technology, New Jersey, USA",
      description: "Major in Computer Science. Expected to Graduate in May,2027.",
      type: "education" as const,
    },
    {
      year: "2021 - 2025",
      title: "UnderGraduate Studies",
      company: "Dharmasth Desai University, Nadiad, India",
      description: "Major in Information Technology with a CGPA of 7.5/10.",
      type: "education" as const,
    },
    {
      year: "2024",
      title: "Internship",
      company: "GUJ INFO PETRO LIMITED",
      description: "Working as a Software Developer Intern.",
      type: "work" as const,
    },
    {
      year: "2021",
      title: "Higher Secondary School",
      company: "Gyanmanjari High School",
      description: "Subjects being Physics, Chemistry, Mathematics - I barely survived with 85.07% marks.",
      type: "education" as const,
    },
    {
      year: "2019",
      title: "Secondary School",
      company: "Ultra Vision High School",
      description: "Percentage 78.33%.",
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
    <section id="experience" className="py-16 md:py-20 px-4 md:px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/50 to-background"></div>
      
      <div className="container mx-auto max-w-4xl relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 font-space">
            <span className="gradient-text">Education & Experience</span>
          </h2>
          <p className="text-muted-foreground text-base md:text-lg">
            My journey through education and professional growth
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="relative"
        >
          {/* Vertical timeline line - hidden on mobile, visible on tablet+ */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-border"></div>
          {/* Mobile timeline line - on left side */}
          <div className="md:hidden absolute left-4 top-0 w-0.5 h-full bg-border"></div>

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="relative mb-12 md:mb-16 last:mb-0"
            >
              {/* Year label */}
              <div className="flex items-center justify-start md:justify-center mb-6 md:mb-8 ml-12 md:ml-0">
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-muted-foreground">
                  {exp.year}
                </h3>
              </div>

              {/* Timeline dot with pulse animation */}
              <div className="absolute left-4 md:left-1/2 top-8 md:top-20 transform md:-translate-x-1/2 z-10">
                <div className="w-3 h-3 md:w-4 md:h-4 rounded-full bg-green-500 pulse-dot"></div>
              </div>

              {/* Content card */}
              <div className="flex items-center justify-start md:justify-center ml-12 md:ml-0">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="w-full md:max-w-md p-4 md:p-6 rounded-lg border border-border bg-card/50 backdrop-blur-sm"
                >
                  <div className="flex items-start gap-3 md:gap-4">
                    <div className="p-1.5 md:p-2 rounded-lg bg-primary/10 shrink-0">
                      {exp.type === "education" ? (
                        <GraduationCap className="w-4 h-4 md:w-6 md:h-6 text-primary" />
                      ) : (
                        <Briefcase className="w-4 h-4 md:w-6 md:h-6 text-secondary" />
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-lg md:text-xl font-bold text-foreground mb-1">
                        {exp.title}
                      </h4>
                      <p className="text-xs md:text-sm text-primary mb-2">{exp.company}</p>
                      <p className="text-muted-foreground text-xs md:text-sm leading-relaxed">
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
