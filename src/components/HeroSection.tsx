import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export default function HeroSection() {
  return (
    <header className="hero-section">
      <div className="hero-bg-lines" />
      <div className="flex flex-col items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
          animate={{ opacity: 0.5, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 1, delay: 1.8 }}
          className="hero-subtitle"
          style={{ marginBottom: 16 }}
        >
          Приватний Синдикат
        </motion.div>
        <motion.h1
          className="hero-title"
          initial={{ opacity: 0, y: 40, scale: 0.9, filter: 'blur(15px)' }}
          animate={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
          transition={{ duration: 1.2, delay: 2, ease: [0.4, 0, 0.2, 1] }}
        >
          CORONA
        </motion.h1>
      </div>
      <motion.div
        className="hero-scroll-hint"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ delay: 3.5, duration: 1 }}
      >
        <ChevronDown size={14} color="#D4A017" />
        <div className="scroll-line" />
      </motion.div>
    </header>
  );
}
