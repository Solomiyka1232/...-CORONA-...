import { motion } from 'framer-motion';
import { cn } from '../lib/utils';


const diplomacy = [
  {
    type: 'СОЮЗНИКИ',
    status: 'green',
    items: [
      { name: 'Street Wolves', desc: 'Повна підтримка в конфліктах та спільні операції.' },
      { name: 'Туманное Братство', desc: 'Взаємний захист територій та обмін інформацією.' },
    ]
  },
  {
    type: 'НЕЙТРАЛІТЕТ',
    status: 'gray',
    items: [
      { name: 'Всі інші сім\'ї', desc: 'Не чіпають нас — ми не чіпаємо їх. Дотримуємось пакту про ненапад.' },
    ]
  },
  {
    type: 'ВОРОГИ',
    status: 'red',
    items: [
      { name: 'Відсутні', desc: 'На даний момент ми вирішуємо питання розумом, а не силою.' },
    ]
  }
];

export const Diplomacy = () => {
  return (
    <section className="py-32 bg-black">
      <div className="container mx-auto px-6">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl md:text-7xl font-black text-white mb-20 leading-tight"
        >
          ЗОВНІШНЯ<br /><span className="text-amber-500 uppercase">Політика</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {diplomacy.map((group, index) => (
            <motion.div
              key={group.type}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-zinc-900/20 border border-zinc-800 p-8 rounded-[2rem] hover:border-zinc-700 transition-colors"
            >
              <div className="flex items-center gap-2 mb-8">
                <div className={cn(
                  "w-2 h-2 rounded-full",
                  group.status === 'green' ? "bg-emerald-500" : 
                  group.status === 'red' ? "bg-red-500" : "bg-zinc-500"
                )} />
                <span className={cn(
                  "text-[10px] font-black tracking-[0.3em] uppercase",
                  group.status === 'green' ? "text-emerald-500" : 
                  group.status === 'red' ? "text-red-500" : "text-zinc-500"
                )}>
                  {group.type}
                </span>
              </div>

              <div className="space-y-8">
                {group.items.map((item) => (
                  <div key={item.name}>
                    <h4 className="text-amber-500 font-black text-lg mb-2 tracking-tight uppercase">{item.name}</h4>
                    <p className="text-zinc-500 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};


