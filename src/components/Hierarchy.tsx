import { Check, Crosshair, Crown } from 'lucide-react';
import { motion } from 'framer-motion';
import { cn } from '../lib/utils';


const ranks = [
  {
    range: '1-5 РАНГИ',
    name: 'НОВАЧКИ',
    features: ['Вивчення кодексу', 'Доступ до авто (3+)', 'Виконання сімейних контрактів'],
    icon: Check,
    color: 'amber'
  },
  {
    range: '5-7 РАНГИ',
    name: 'СВОЇ',
    features: ['Повна довіра', 'Допомога новачкам', 'Участь у зборах'],
    icon: Check,
    color: 'amber'
  },
  {
    range: '8 РАНГ',
    name: 'СТРІЛКИ',
    features: ['Захист бізнесів', 'Участь у каптах'],
    icon: Crosshair,
    color: 'red'
  },
  {
    range: '9-10 РАНГИ',
    name: 'КЕРІВНИЦТВО',
    features: ['Прийняття рішень', 'Дипломатія', 'Контроль сім\'ї'],
    icon: Crown,
    color: 'amber'
  }
];

export const Hierarchy = () => {
  return (
    <section className="py-32 bg-black">
      <div className="container mx-auto px-6">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl md:text-7xl font-black text-white mb-20 leading-tight"
        >
          СТРУКТУРА<br /><span className="text-amber-500 uppercase">синдикату</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {ranks.map((rank, index) => (
            <motion.div
              key={rank.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={cn(
                "p-8 rounded-2xl border transition-all duration-300 group",
                rank.color === 'red' 
                  ? "bg-red-500/5 border-red-500/20 hover:border-red-500/50 shadow-lg shadow-red-500/5" 
                  : "bg-zinc-900/50 border-zinc-800 hover:border-amber-500/50"
              )}
            >
              <span className={cn(
                "text-[10px] font-black tracking-widest block mb-4",
                rank.color === 'red' ? "text-red-500" : "text-amber-500"
              )}>
                {rank.range}
              </span>
              <h3 className="text-2xl font-black text-white mb-6 tracking-tight group-hover:text-amber-500 transition-colors">
                {rank.name}
              </h3>
              <ul className="space-y-4">
                {rank.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm text-zinc-400">
                    <rank.icon size={16} className={cn("mt-0.5 shrink-0", rank.color === 'red' ? "text-red-500" : "text-amber-500")} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};


