import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Camera, Mic, ShieldAlert } from 'lucide-react';
import { cn } from '../lib/utils';


export const ScaryNotifications = () => {
  const [activeToasts, setActiveToasts] = useState<{ id: string; type: 'webcam' | 'mic'; title: string; text: string; details: string; small: string }[]>([]);

  useEffect(() => {
    const minDelay = 15000;
    const maxDelay = 45000;
    const randomDelay = Math.floor(Math.random() * (maxDelay - minDelay + 1)) + minDelay;

    const timer = setTimeout(() => {
      showToasts();
    }, randomDelay);

    return () => clearTimeout(timer);
  }, []);

  const showToasts = () => {
    const webcamId = Math.random().toString(36).substr(2, 9);
    const micId = Math.random().toString(36).substr(2, 9);

    setActiveToasts([{
      id: webcamId,
      type: 'webcam',
      title: 'КАМЕРА АКТИВОВАНА',
      text: 'Хтось переглядає вашу веб-камеру прямо зараз',
      details: 'IP: 178.162.XX.XX • Знімок зроблено 7с тому',
      small: 'Не закривайте вкладку — це може бути небезпечно...'
    }]);

    setTimeout(() => {
      setActiveToasts(prev => [...prev, {
        id: micId,
        type: 'mic',
        title: 'МІКРОФОН ПРАЦЮЄ',
        text: 'Хтось записує ваше аудіо в реальному часі',
        details: 'Голосовий аналіз: • Запис триває...',
        small: 'Шифрування каналу: НЕДОСТУПНЕ'
      }]);
    }, 8000 + Math.random() * 5000);

    // Auto remove
    setTimeout(() => {
      setActiveToasts(prev => prev.filter(t => t.id !== webcamId));
    }, 20000);
    setTimeout(() => {
      setActiveToasts(prev => prev.filter(t => t.id !== micId));
    }, 28000);
  };

  return (
    <div className="fixed top-6 right-6 z-[1000] flex flex-col gap-4 w-full max-w-[340px]">
      <AnimatePresence>
        {activeToasts.map((toast) => (
          <motion.div
            key={toast.id}
            initial={{ x: 400, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 400, opacity: 0 }}
            transition={{ type: 'spring', damping: 20, stiffness: 100 }}
            className={cn(
              "bg-[#2b2d31] rounded-lg p-4 border-l-4 shadow-2xl relative overflow-hidden font-sans",
              toast.type === 'webcam' ? "border-[#00b0f4]" : "border-amber-500"
            )}
          >
            <div className="flex items-center gap-3 mb-2">
              {toast.type === 'webcam' ? <Camera className="text-[#00b0f4]" size={20} /> : <Mic className="text-amber-500" size={20} />}
              <span className="text-white font-bold text-sm">{toast.title}</span>
              <ShieldAlert size={14} className="ml-auto text-zinc-600" />
            </div>
            <div className="text-[#b9bbbe] text-xs leading-relaxed">
              <p className="mb-1">{toast.text}</p>
              <p className="font-bold text-white/80">{toast.details}</p>
              <p className="text-[10px] text-zinc-500 mt-2">{toast.small}</p>
            </div>
            <div className="absolute bottom-0 left-0 h-[2px] w-full bg-white/5">
              <motion.div 
                initial={{ width: '100%' }}
                animate={{ width: '0%' }}
                transition={{ duration: 7, ease: 'linear' }}
                className={cn("h-full", toast.type === 'webcam' ? "bg-[#00b0f4]" : "bg-amber-500")}
              />
            </div>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};


