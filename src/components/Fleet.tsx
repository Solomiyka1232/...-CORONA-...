import { motion } from 'framer-motion';
import { cn } from '../lib/utils';


const cars = [
  { name: 'Dodge Challenger SRT', plate: 'AM6196BP', rank: '3+' },
  { name: 'Dodge Challenger SRT', plate: 'AP7772PM', rank: '3+' },
  { name: 'Chevrolet Camaro', plate: 'OO3565OP', rank: '3+' },
  { name: 'BMW X7', plate: 'BM2211IX', rank: '3+' },
  { name: 'BMW X7', plate: 'AE4448ME', rank: '3+' },
  { name: 'BMW X7', plate: 'TA4716KE', rank: '3+' },
  { name: 'BMW X6M', plate: 'PB6655HP', rank: '3+' },
  { name: 'BMW E39', plate: 'AH7241AC', rank: '3+' },
  { name: 'MB GT63 AMG', plate: 'IE1439EC', rank: '3+' },
  { name: 'MB V-Class', plate: 'EM6888BP', rank: '3+' },
  { name: 'MB V-Class', plate: 'XE5353PO', rank: '3+' },
  { name: 'MB SL63 AMG', plate: 'НЕМАЄ', rank: '3+' },
  { name: 'McLaren 570S', plate: 'HX1881TX', rank: '7+', special: true },
  { name: 'Porsche Panamera', plate: 'KT2250MO', rank: '3+' },
  { name: 'Range Rover Sport', plate: 'IA8447HM', rank: '3+' },
  { name: 'Audi A4 B8', plate: 'EA9992TE', rank: '3+' },
  { name: 'Caterham Superlight', plate: 'НЕМАЄ', rank: '3+' },
];

export const Fleet = () => {
  return (
    <section className="py-32 bg-zinc-950">
      <div className="container mx-auto px-6">
        <div className="bg-zinc-900/30 border border-zinc-800 rounded-[3rem] p-8 md:p-16 backdrop-blur-3xl">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black text-white mb-12"
          >
            Наш Автопарк <span className="text-amber-500 font-mono">(17)</span>
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {cars.map((car, index) => (
              <motion.div
                key={`${car.name}-${index}`}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className={cn(
                  "p-6 rounded-2xl border bg-black/40 transition-all duration-300 group",
                  car.special ? "border-amber-500/50 shadow-lg shadow-amber-500/5" : "border-zinc-800 hover:border-zinc-700"
                )}
              >
                <h4 className="text-white font-bold mb-4 uppercase text-sm tracking-tight group-hover:text-amber-500 transition-colors">
                  {car.name}
                </h4>
                <div className="space-y-3">
                  <div className="flex justify-between items-center text-[10px] tracking-widest uppercase text-zinc-500 border-t border-zinc-800/50 pt-3">
                    <span>Номер</span>
                    <span className="text-amber-500 font-bold">{car.plate}</span>
                  </div>
                  <div className="flex justify-between items-center text-[10px] tracking-widest uppercase text-zinc-500">
                    <span>Доступ</span>
                    <span className="text-white font-bold">{car.rank} ранг</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};


