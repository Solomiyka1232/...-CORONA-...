import { motion } from 'framer-motion';

const stats = [
  { label: 'Учасників', value: '60+' },
  { label: 'Автомобілів', value: '17' },
  { label: 'Статус', value: '#1' },
];

export const Stats = () => {
  return (
    <section className="py-24 bg-white rounded-t-[40px] -mt-10 relative z-30">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="border-l-4 border-amber-500 pl-8"
            >
              <h2 className="text-6xl font-black text-amber-500 mb-2">{stat.value}</h2>
              <p className="text-zinc-900 font-black uppercase tracking-widest text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
