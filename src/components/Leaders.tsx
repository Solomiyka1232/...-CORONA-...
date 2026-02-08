import { Crown, Gem } from 'lucide-react';
import { motion } from 'framer-motion';

const leaders = [
  { role: 'ЗАСНОВНИК', name: 'GIANNI_VERSACE', icon: Crown },
  { role: 'ЗАСТУПНИК', name: 'VITALIK_SERGIENKO', icon: Gem },
  { role: 'ЗАСТУПНИК', name: 'WALDEMAR_MILLENIUM', icon: Gem },
];

export const Leaders = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-amber-500 to-amber-600">
      <div className="container mx-auto px-6">
        <div className="flex flex-col">
          {leaders.map((leader, index) => (
            <motion.div
              key={leader.name}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center justify-between py-8 border-b border-black/10 last:border-0"
            >
              <div>
                <span className="text-[10px] tracking-[0.3em] font-bold text-black/60 block mb-1">
                  {leader.role}
                </span>
                <h3 className="text-2xl md:text-4xl font-black text-black tracking-tight">
                  {leader.name}
                </h3>
              </div>
              <leader.icon size={40} className="text-black/80" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
