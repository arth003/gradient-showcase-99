import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Mail, Linkedin, Github, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const socialLinks = [
    { icon: Github, label: "GitHub", href: "https://github.com/ArthNangar", color: "hover:text-primary" },
    { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/arth-nangar-574589241/", color: "hover:text-secondary" },
    // { icon: Twitter, label: "Twitter", href: "#", color: "hover:text-accent" },
    { icon: Mail, label: "Email", href: "mailto:arthnangar3@gmail.com", color: "hover:text-primary-glow" },
  ];

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      
      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text font-space">
            Let's Connect
          </h2>
          <div className="h-1 w-24 gradient-bg mx-auto rounded-full" />
          <p className="text-lg text-muted-foreground mt-6 max-w-2xl mx-auto">
            Have a project in mind or just want to chat? I'd love to hear from you!
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-card rounded-3xl p-8 md:p-12 border border-border gradient-border">
            <div className="text-center space-y-8">
              <motion.div
                initial={{ scale: 0 }}
                animate={inView ? { scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="inline-block"
              >
                <div className="w-24 h-24 rounded-full gradient-bg flex items-center justify-center mx-auto glow-effect">
                  <Mail className="w-12 h-12 text-white" />
                </div>
              </motion.div>

              <div className="space-y-4">
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground font-space">
                  Get In Touch
                </h3>
                <p className="text-lg md:text-xl text-muted-foreground break-all">
                  arthnangar3@gmail.com
                </p>
              </div>

              <div className="flex flex-wrap justify-center gap-3 md:gap-4 pt-6">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                    whileHover={{ scale: 1.1, y: -5 }}
                    className={`flex items-center gap-2 px-4 py-2 md:px-6 md:py-3 bg-muted rounded-full text-foreground ${social.color} transition-colors duration-300 border border-border hover:border-primary/50`}
                  >
                    <social.icon className="w-4 h-4 md:w-5 md:h-5" />
                    <span className="font-medium text-sm md:text-base">{social.label}</span>
                  </motion.a>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ duration: 0.6, delay: 1 }}
                className="pt-8"
              >
                <Button
                  size="lg"
                  className="gradient-bg text-lg px-12 py-6 glow-effect hover:opacity-90 transition-opacity"
                  onClick={() => window.location.href = 'mailto:contact@example.com'}
                >
                  Send Me an Email
                </Button>
              </motion.div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="text-center mt-16 text-muted-foreground"
        >
          <p>© 2024 Portfolio. Built with React & Tailwind CSS</p>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
