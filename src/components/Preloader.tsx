import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Crown } from 'lucide-react';

export const Preloader = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="fixed inset-0 z-[10000] bg-black flex items-center justify-center flex-col"
        >
          <motion.div
            animate={{ 
              scale: [1, 1.1, 1],
              opacity: [0.8, 1, 0.8],
              filter: ['drop-shadow(0 0 15px rgba(225, 173, 1, 0.3))', 'drop-shadow(0 0 30px rgba(225, 173, 1, 0.6))', 'drop-shadow(0 0 15px rgba(225, 173, 1, 0.3))']
            }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="text-amber-500 mb-8"
          >
            <Crown size={80} />
          </motion.div>
          
          <div className="w-48 h-[1px] bg-zinc-900 relative overflow-hidden">
            <motion.div 
              initial={{ left: '-100%' }}
              animate={{ left: '100%' }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-0 h-full w-full bg-amber-500 shadow-[0_0_10px_#E1AD01]"
            />
          </div>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-[10px] tracking-[0.4em] text-amber-500 mt-6 font-bold uppercase"
          >
            Initializing Syndicate Network...
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
