import { motion } from 'framer-motion';

export const Hero = () => {
  return (
    <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden bg-black">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black z-10" />
        <motion.div 
          initial={{ scale: 1.2, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.4 }}
          transition={{ duration: 2 }}
          className="w-full h-full bg-[url('https://images.pexels.com/photos/3136673/pexels-photo-3136673.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] bg-cover bg-center grayscale"
        />
      </div>

      <div className="relative z-20 text-center px-4">
        <motion.span 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 0.6 }}
          transition={{ delay: 0.5 }}
          className="text-[10px] md:text-xs tracking-[1em] text-white uppercase mb-4 block"
        >
          Приватний Синдикат
        </motion.span>
        
        <motion.h1 
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-7xl md:text-[12rem] font-black tracking-tighter leading-none m-0 bg-gradient-to-b from-white via-amber-200 to-amber-600 bg-clip-text text-transparent"
        >
          CORONA
        </motion.h1>
      </div>

      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 text-amber-500/50"
      >
        <div className="w-[1px] h-20 bg-gradient-to-b from-amber-500 to-transparent mx-auto" />
      </motion.div>
    </section>
  );
};
