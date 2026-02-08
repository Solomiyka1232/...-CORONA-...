import { motion } from 'framer-motion';

const codeItems = [
  {
    num: '01',
    title: 'ВІРНІСТЬ БРАТСТВУ',
    desc: 'Будь-яка форма зради, співпраці з ворогами або приховування інформації карається негайним вигнанням із "чорним списком".'
  },
  {
    num: '02',
    title: 'СУВОРА ДИСЦИПЛІНА',
    desc: 'Накази лідера GIANNI_VERSACE та його заступників не обговорюються. Дисципліна — наша головна зброя.'
  },
  {
    num: '03',
    title: 'ЗАХИСТ СВОЇХ',
    desc: 'Напад на одного члена сім\'ї — це напад на всю сім\'ю. Ми ніколи не залишаємо своїх у біді, незалежно від обставин.'
  }
];

export const Code = () => {
  return (
    <section className="py-32 bg-zinc-950">
      <div className="container mx-auto px-6">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl md:text-7xl font-black text-white mb-20 leading-tight"
        >
          КОДЕКС<br /><span className="text-amber-500">СІМ'Ї</span>
        </motion.h2>

        <div className="space-y-0">
          {codeItems.map((item, index) => (
            <motion.div
              key={item.num}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="grid grid-cols-1 md:grid-cols-[100px_1fr] gap-8 py-12 border-b border-zinc-900 last:border-0"
            >
              <span className="text-4xl font-black text-amber-500/30 font-mono">{item.num}</span>
              <div>
                <strong className="text-xl md:text-2xl text-amber-500 block mb-4 uppercase tracking-wider">
                  {item.title}
                </strong>
                <p className="text-zinc-400 text-lg leading-relaxed max-w-3xl">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
