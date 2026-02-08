import { useState, useRef } from 'react';
import { Play, Pause } from 'lucide-react';
import { motion } from 'framer-motion';
import { cn } from '../lib/utils';


export const RadioPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const toggleRadio = () => {
    if (audioRef.current) {
      if (!isPlaying) {
        audioRef.current.play().catch(console.error);
      } else {
        audioRef.current.pause();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="fixed bottom-6 left-6 z-50">
      <motion.div 
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        className="flex items-center gap-3 bg-black/80 backdrop-blur-xl border border-amber-500/30 p-2 pr-6 rounded-full shadow-2xl shadow-amber-500/10"
      >
        <button
          onClick={toggleRadio}
          className="w-12 h-12 flex items-center justify-center bg-amber-500 rounded-full text-black hover:scale-105 transition-transform active:scale-95"
        >
          {isPlaying ? <Pause size={20} fill="currentColor" /> : <Play size={20} fill="currentColor" className="ml-1" />}
        </button>
        
        <div className="flex flex-col">
          <div className="flex items-center gap-2">
            <span className={cn("w-2 h-2 rounded-full", isPlaying ? "bg-red-500 animate-pulse" : "bg-zinc-600")}></span>
            <span className="text-[10px] font-black tracking-widest text-amber-500 uppercase">
              {isPlaying ? 'ON AIR' : 'OFFLINE'}
            </span>
          </div>
          <span className="text-xs font-bold text-white">SYNDICATE FM</span>
        </div>

        {isPlaying && (
          <div className="flex items-end gap-0.5 h-4 ml-2">
            {[1, 2, 3, 4].map((i) => (
              <motion.div
                key={i}
                animate={{ height: [4, 16, 8, 14, 4] }}
                transition={{ duration: 1, repeat: Infinity, delay: i * 0.1 }}
                className="w-0.5 bg-amber-500"
              />
            ))}
          </div>
        )}
      </motion.div>
      <audio ref={audioRef} src="https://online.radioroks.ua/RadioROKS_HardnHeavy" preload="none" />
    </div>
  );
};


