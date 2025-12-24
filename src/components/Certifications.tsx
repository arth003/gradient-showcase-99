import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Certifications from "@/components/Certifications";

const CertificationsPage = () => {
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
                <div className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${cert.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                
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
                  {cert.link === "#" ? (
                    <Button
                      variant="ghost"
                      size="sm"
                      className="w-full group-hover:bg-primary/10 transition-colors"
                      disabled
                    >
                      View Certificate
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </Button>
                  ) : (
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block"
                    >
                      <Button
                        variant="ghost"
                        size="sm"
                        className="w-full group-hover:bg-primary/10 transition-colors"
                      >
                        View Certificate
                        <ExternalLink className="w-4 h-4 ml-2" />
                      </Button>
                    </a>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default CertificationsPage;