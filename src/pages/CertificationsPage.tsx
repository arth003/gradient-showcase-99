import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Certifications from "@/components/Certifications";

const CertificationsPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.3 }}
      className="min-h-screen bg-background"
    >
      <Navigation />
      <div className="pt-20">
        <Certifications />
      </div>
    </motion.div>
  );
};

export default CertificationsPage;
