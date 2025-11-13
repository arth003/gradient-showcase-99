import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Award, ExternalLink } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Certifications = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const certifications = [
    {
      title: "AWS Certified Solutions Architect",
      issuer: "Amazon Web Services",
      date: "2024",
      description: "Professional level certification for designing distributed systems on AWS",
      color: "from-orange-500 to-yellow-500",
      link: "#"
    },
    {
      title: "Google Cloud Professional Developer",
      issuer: "Google Cloud",
      date: "2023",
      description: "Expertise in developing scalable applications on Google Cloud Platform",
      color: "from-blue-500 to-cyan-500",
      link: "#"
    },
    {
      title: "Machine Learning Specialization",
      issuer: "Stanford University",
      date: "2023",
      description: "Comprehensive ML course covering algorithms and neural networks",
      color: "from-purple-500 to-pink-500",
      link: "#"
    },
    {
      title: "Full Stack Web Development",
      issuer: "Meta",
      date: "2022",
      description: "Professional certification in modern web development technologies",
      color: "from-green-500 to-emerald-500",
      link: "#"
    },
    {
      title: "Data Science Professional Certificate",
      issuer: "IBM",
      date: "2022",
      description: "Complete data science program including Python, SQL, and data visualization",
      color: "from-indigo-500 to-blue-500",
      link: "#"
    },
    {
      title: "React Advanced Patterns",
      issuer: "Udemy",
      date: "2023",
      description: "Advanced React patterns, hooks, and performance optimization",
      color: "from-cyan-500 to-teal-500",
      link: "#"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="certifications" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/5 to-background" />
      
      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text font-space">
            Certifications
          </h2>
          <div className="h-1 w-24 gradient-bg mx-auto rounded-full" />
          <p className="text-muted-foreground mt-6 text-lg max-w-2xl mx-auto">
            Continuous learning and professional development through industry-recognized certifications
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto"
        >
          {certifications.map((cert, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="group relative overflow-hidden h-full hover:shadow-2xl transition-all duration-500 border-border/50 bg-card/50 backdrop-blur-sm hover:-translate-y-2">
                <div className={`absolute inset-0 bg-gradient-to-br ${cert.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                
                <CardHeader>
                  <div className="flex items-start justify-between gap-4">
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${cert.color} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                      <Award className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-xs text-muted-foreground font-medium px-3 py-1 rounded-full bg-primary/10">
                      {cert.date}
                    </span>
                  </div>
                  <CardTitle className="text-xl font-bold mt-4 group-hover:text-primary transition-colors">
                    {cert.title}
                  </CardTitle>
                  <CardDescription className="text-sm font-medium text-primary/70">
                    {cert.issuer}
                  </CardDescription>
                </CardHeader>
                
                <CardContent>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {cert.description}
                  </p>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="w-full group-hover:bg-primary/10 transition-colors"
                    onClick={() => window.open(cert.link, '_blank')}
                  >
                    View Certificate
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;
