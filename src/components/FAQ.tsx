import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { cn } from '../lib/utils';


const faqs = [
  {
    q: 'Який мінімальний рівень для вступу?',
    a: 'Ми приймаємо гравців від 5-го рівня. Головне — знання базових правил сервера та адекватність.'
  },
  {
    q: 'Чи видаєте ви зброю та спорядження?',
    a: 'Так, сім\'я забезпечує активних гравців усім необхідним для сімейних заходів зі складу.'
  },
  {
    q: 'Як швидко я можу отримати 8 ранг (Стрілок)?',
    a: 'Вам потрібно показати хороші навички стрільби на тренуваннях (дуелях) та бути активним у житті сім\'ї.'
  },
  {
    q: 'Що робити, якщо мене образив член іншої сім\'ї?',
    a: 'Не ведіться на провокації. Зробіть фіксацію (скріншот/фрапс) та передайте старшому складу (9-10 ранг). Ми вирішимо це дипломатично або силою.'
  }
];

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-32 bg-zinc-950">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl md:text-7xl font-black text-white mb-20 leading-tight text-center"
        >
          ЧАСТІ<br /><span className="text-amber-500 uppercase">Запитання</span>
        </motion.h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-zinc-900/40 border border-zinc-800 rounded-2xl overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full p-6 flex justify-between items-center text-left transition-colors hover:bg-zinc-800/50"
              >
                <span className="text-lg font-bold text-white pr-8">{faq.q}</span>
                <ChevronDown 
                  className={cn("text-amber-500 transition-transform duration-300 shrink-0", openIndex === index && "rotate-180")} 
                />
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="p-6 pt-0 text-zinc-400 leading-relaxed border-t border-zinc-800/50 mt-0">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};


