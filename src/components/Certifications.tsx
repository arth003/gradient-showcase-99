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
      title: "Tata GenAI Powered Data Analytics Job Simulation",
      issuer: "Forage",
      date: "November, 2025",
      description: "Conducted exploratory data analysis (EDA) and proposed a no-code predictive modeling framework to assess customer delinquency risk, leveraging GenAI tools for data insights.",
      color: "from-orange-500 to-yellow-500",
      link: "#"
    },
    {
      title: "Complete Python Pro Bootcamp: By Dr.Angela Yu",
      issuer: "Udemy",
      date: "August, 2025",
      description: "This is an intensive, project-based bootcamp covering a wide range of Python topics, from fundamental programming to advanced web scraping, game development, and professional automation projects.",
      color: "from-blue-500 to-cyan-500",
      link: "https://www.udemy.com/certificate/UC-c3f02cdd-a2be-4ca4-b038-7c91786f4ceb/"
    },
    {
      title: "AWS Academy Machine Learning Foundations",
      issuer: "Amazon Web Service",
      date: "July, 2024",
      description: "Completed the foundational AWS Machine Learning course, gaining hands-on experience with core ML concepts, data preparation, model training, and deployment using Amazon SageMaker and other specialized AWS services.Comprehensive ML course covering algorithms and neural networks",
      color: "from-purple-500 to-pink-500",
      link: "https://www.credly.com/go/854y6t3M"
    },
    {
      title: "Machine Learning Course",
      issuer: "Udemy",
      date: "September, 2024",
      description: "Certification in Machine Learning.",
      color: "from-green-500 to-emerald-500",
      link: "https://www.udemy.com/certificate/UC-37024cd8-3ac0-4e35-b787-7331cf716ffd/"
    },
    {
      title: " AWS Academy Cloud Foundations",
      issuer: "Amazon Web Service",
      date: "November, 2023",
      description: "Completed the AWS Cloud Foundations course, establishing a strong understanding of core AWS services (Compute, Storage, Databases), cloud security principles, networking, and the best practices for designing scalable cloud architecture.",
      color: "from-indigo-500 to-blue-500",
      link: "https://www.credly.com/go/QdX9wqiG"
    },
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
              <Card className="h-full border-border/50 bg-card/50 backdrop-blur-sm">
                <CardHeader>
                  <div className="flex items-start justify-between gap-4">
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${cert.color} flex items-center justify-center flex-shrink-0`}>
                      <Award className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-xs text-muted-foreground font-medium px-3 py-1 rounded-full bg-primary/10">
                      {cert.date}
                    </span>
                  </div>
                  <CardTitle className="text-xl font-bold mt-4">
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
                    size="sm"
                    className="w-full gap-2 gradient-bg hover:opacity-90"
                    disabled={cert.link === "#"}
                    asChild={cert.link !== "#"}
                  >
                    {cert.link !== "#" ? (
                      <a href={cert.link} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4" />
                        View Certificate
                      </a>
                    ) : (
                      <span>
                        <ExternalLink className="w-4 h-4" />
                        View Certificate
                      </span>
                    )}
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
