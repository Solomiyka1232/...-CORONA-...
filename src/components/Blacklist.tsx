import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Skull, ChevronDown } from 'lucide-react';
import { cn } from '../lib/utils';


const shamed = [
  {
    nick: 'Event_Horizon',
    roles: [
      { label: 'Зрадник', color: 'red' },
      { label: 'Дезінформація', color: 'blue' },
      { label: 'Провокатор', color: 'green' },
    ],
    reason: "Спроба розколу сім'ї зсередини, поширення фейків про лідерів та заступників, (наш хейтер). ЧС сім'ї."
  },
  {
    nick: 'Ralph_Lauren',
    roles: [
      { label: 'Злив складу', color: 'orange' },
      { label: 'Злив рангів', color: 'red' },
      { label: 'Кік учасників', color: 'green' },
    ],
    reason: "Використав високий ранг для масового видалення гравців із сім'ї та повного спустошення складу. ЧС сім'ї."
  }
];

export const Blacklist = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="py-24 bg-black">
      <div className="container mx-auto px-6">
        <div className="border border-red-900/30 rounded-3xl overflow-hidden bg-zinc-950 shadow-2xl shadow-red-900/5">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="w-full p-8 flex justify-between items-center text-left bg-gradient-to-r from-red-950/20 to-transparent hover:from-red-950/30 transition-all group"
          >
            <div className="flex items-center gap-6">
              <Skull className="text-red-500 group-hover:scale-110 transition-transform" size={32} />
              <h2 className="text-2xl md:text-3xl font-black text-red-500 tracking-tighter uppercase">
                BLACK LIST / HALL OF SHAME
              </h2>
            </div>
            <ChevronDown className={cn("text-red-500 transition-transform duration-500", isOpen && "rotate-180")} size={24} />
          </button>

          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-6 border-t border-red-900/20">
                  {shamed.map((person, idx) => (
                    <motion.div
                      key={person.nick}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: idx * 0.1 }}
                      className="bg-black/60 border border-zinc-900 p-6 rounded-2xl hover:border-red-500/30 transition-colors"
                    >
                      <span className="text-2xl font-black text-white block mb-4 tracking-tight">{person.nick}</span>
                      <div className="flex flex-wrap gap-2 mb-6">
                        {person.roles.map((role) => (
                          <span
                            key={role.label}
                            className={cn(
                              "px-2 py-0.5 rounded text-[9px] font-black uppercase tracking-wider border flex items-center gap-1.5",
                              role.color === 'red' ? "border-red-500/30 text-red-500 bg-red-500/5" :
                              role.color === 'blue' ? "border-blue-500/30 text-blue-500 bg-blue-500/5" :
                              role.color === 'green' ? "border-emerald-500/30 text-emerald-500 bg-emerald-500/5" :
                              "border-orange-500/30 text-orange-500 bg-orange-500/5"
                            )}
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-current shadow-[0_0_5px_currentColor]" />
                            {role.label}
                          </span>
                        ))}
                      </div>
                      <p className="text-zinc-500 text-xs leading-relaxed border-t border-zinc-900 pt-4">
                        {person.reason}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};


