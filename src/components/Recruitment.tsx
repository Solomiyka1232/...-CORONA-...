import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { UserCheck, Send, Brain, Crosshair, X, CheckCircle2, History } from 'lucide-react';
import confetti from 'canvas-confetti';
import { cn } from '../lib/utils';


export const Recruitment = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [step, setStep] = useState<'type' | 'skills' | 'form' | 'success' | 'already'>( 'type');
  const [type, setType] = useState('');
  const [skills, setSkills] = useState<string[]>([]);
  const [nick, setNick] = useState('');
  const [contact, setContact] = useState('');
  const [contactMode, setContactMode] = useState<'tg' | 'ds'>('tg');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const BOT_TOKEN = "8263268386:AAHZJAtEokFMKn-jAWhoBeA0q0kYLQ98Rbk";
  const CHAT_ID = "6638384308";

  const toggleSkill = (skill: string) => {
    setSkills(prev => prev.includes(skill) ? prev.filter(s => s !== skill) : [...prev, skill]);
  };

  const handleOpen = () => {
    if (localStorage.getItem('sent')) {
      setStep('already');
    } else {
      setStep('type');
    }
    setIsModalOpen(true);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!/^[A-Z][a-z]+_[A-Z][a-z]+$/.test(nick)) {
      alert("Формат ніка: Nick_Name");
      return;
    }

    setIsSubmitting(true);
    const skillsText = skills.length > 0 ? `\n🛠 Навички: ${skills.join(', ')}` : "\n🛠 Навички: не вказано";
    const message = `🔥 НОВА ЗАЯВКА\n\n📋 Тип: ${type}\n👤 Нік: ${nick}\n📞 Зв'язок: ${contactMode === 'tg' ? '@' : '#'}${contact}${skillsText}`;

    try {
      const res = await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ chat_id: CHAT_ID, text: message })
      });

      if (res.ok) {
        localStorage.setItem('sent', 'true');
        setStep('success');
        confetti({
          particleCount: 150,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#E1AD01', '#00ff88', '#ffffff']
        });
      } else {
        alert("❌ Помилка відправки. Спробуйте ще раз.");
      }
    } catch (err) {
      alert("🌐 Помилка мережі. Перевірте з'єднання.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <section className="py-24 bg-black">
        <div className="container mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-zinc-900 border border-zinc-800 rounded-[3rem] p-8 md:p-16 relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/5 blur-[100px] pointer-events-none" />
            
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-12">
              <div>
                <h2 className="text-4xl md:text-6xl font-black text-white mb-4 tracking-tighter uppercase">Відкрито набір</h2>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-500 text-[10px] font-black tracking-widest animate-pulse">
                  ACTIVE
                </div>
              </div>

              <button 
                onClick={handleOpen}
                className="w-full md:w-auto px-12 py-6 bg-amber-500 text-black font-black text-lg rounded-2xl hover:bg-amber-400 transition-colors shadow-xl shadow-amber-500/20 active:scale-95"
              >
                ПОДАТИ ЗАЯВКУ
              </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h3 className="text-zinc-500 text-[10px] font-black tracking-widest uppercase mb-6">Вимоги:</h3>
                <ul className="space-y-4">
                  {[
                    { icon: UserCheck, text: 'Вік: 14+ років' },
                    { icon: Send, text: 'Наявність Telegram для зв\'язку' },
                    { icon: Brain, text: 'Повна адекватність' },
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-4 text-white font-medium">
                      <div className="w-10 h-10 rounded-xl bg-zinc-800 flex items-center justify-center text-amber-500">
                        <item.icon size={20} />
                      </div>
                      {item.text}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-amber-500/5 border border-dashed border-amber-500/30 rounded-3xl p-8 flex gap-6 items-start">
                <div className="w-12 h-12 rounded-2xl bg-amber-500 flex items-center justify-center text-black shrink-0">
                  <Crosshair size={24} />
                </div>
                <div>
                  <strong className="text-amber-500 text-xs font-black tracking-widest uppercase block mb-2">Спеціальна пропозиція</strong>
                  <p className="text-zinc-400 leading-relaxed">
                    Володієш навичкою стрільби? Є можливість вступити відразу на <span className="text-white font-black">8 ранг</span>
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="absolute inset-0 bg-black/90 backdrop-blur-md"
            />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-lg bg-zinc-900 border border-zinc-800 rounded-[2.5rem] p-8 md:p-12 shadow-2xl overflow-hidden"
            >
              <button 
                onClick={() => setIsModalOpen(false)}
                className="absolute top-6 right-6 text-zinc-500 hover:text-white transition-colors"
              >
                <X size={24} />
              </button>

              {step === 'type' && (
                <div>
                  <h2 className="text-2xl font-black text-white mb-8 tracking-tight text-center uppercase">Оберіть тип заявки</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[
                      { id: 'Звичайний вступ', icon: UserCheck, label: 'Звичайний вступ' },
                      { id: 'Стрілець (8 ранг)', icon: Crosshair, label: 'Стрілець (8 ранг)' },
                    ].map((btn) => (
                      <button
                        key={btn.id}
                        onClick={() => { setType(btn.id); setStep('skills'); }}
                        className="flex flex-col items-center gap-4 p-8 rounded-3xl bg-zinc-800/50 border border-zinc-700 hover:border-amber-500/50 hover:bg-amber-500/5 transition-all group"
                      >
                        <btn.icon size={32} className="text-amber-500 group-hover:scale-110 transition-transform" />
                        <span className="text-sm font-bold text-white">{btn.label}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {step === 'skills' && (
                <div>
                  <h2 className="text-2xl font-black text-white mb-8 tracking-tight uppercase">Ваші навички</h2>
                  <div className="grid grid-cols-2 gap-3 mb-8">
                    {['Стрільба', 'Онлайн 4+', 'Водіння', 'Адекватність'].map((skill) => (
                      <button
                        key={skill}
                        onClick={() => toggleSkill(skill)}
                        className={cn(
                          "py-4 rounded-2xl text-xs font-bold transition-all border",
                          skills.includes(skill) 
                            ? "bg-amber-500 border-amber-500 text-black" 
                            : "bg-zinc-800 border-zinc-700 text-zinc-400 hover:border-zinc-500"
                        )}
                      >
                        {skill}
                      </button>
                    ))}
                  </div>
                  <button
                    onClick={() => setStep('form')}
                    className="w-full py-5 bg-white text-black font-black text-sm rounded-2xl uppercase tracking-widest hover:bg-zinc-200 transition-colors"
                  >
                    Далі
                  </button>
                </div>
              )}

              {step === 'form' && (
                <div>
                  <h2 className="text-2xl font-black text-amber-500 mb-8 tracking-tight uppercase">Анкета</h2>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                      type="text"
                      placeholder="Ваш нік (Nick_Name)"
                      value={nick}
                      onChange={(e) => setNick(e.target.value)}
                      required
                      className="w-full bg-black border border-zinc-800 rounded-xl p-4 text-white focus:border-amber-500 outline-none transition-colors"
                    />
                    <div className="flex gap-2">
                      <button
                        type="button"
                        onClick={() => setContactMode('tg')}
                        className={cn("flex-1 py-3 rounded-xl text-xs font-bold border transition-all", contactMode === 'tg' ? "bg-amber-500 border-amber-500 text-black" : "bg-black border-zinc-800 text-zinc-500")}
                      >
                        Telegram
                      </button>
                      <button
                        type="button"
                        onClick={() => setContactMode('ds')}
                        className={cn("flex-1 py-3 rounded-xl text-xs font-bold border transition-all", contactMode === 'ds' ? "bg-amber-500 border-amber-500 text-black" : "bg-black border-zinc-800 text-zinc-500")}
                      >
                        Discord
                      </button>
                    </div>
                    <input
                      type="text"
                      placeholder={contactMode === 'tg' ? "@username" : "username#0000"}
                      value={contact}
                      onChange={(e) => setContact(e.target.value)}
                      required
                      className="w-full bg-black border border-zinc-800 rounded-xl p-4 text-white focus:border-amber-500 outline-none transition-colors"
                    />
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-5 bg-amber-500 text-black font-black text-sm rounded-2xl uppercase tracking-widest hover:bg-amber-400 transition-colors disabled:opacity-50"
                    >
                      {isSubmitting ? 'Надсилання...' : 'Відправити'}
                    </button>
                  </form>
                </div>
              )}

              {step === 'success' && (
                <div className="text-center py-8">
                  <CheckCircle2 size={80} className="text-emerald-500 mx-auto mb-6" />
                  <h2 className="text-3xl font-black text-white mb-4 tracking-tight uppercase">Готово!</h2>
                  <p className="text-zinc-500 leading-relaxed mb-8">
                    Твою заявку успішно відправлено.<br />Очікуй на відповідь у найближчий час!
                  </p>
                  <button
                    onClick={() => setIsModalOpen(false)}
                    className="w-full py-5 bg-emerald-500 text-black font-black text-sm rounded-2xl uppercase tracking-widest hover:bg-emerald-400 transition-colors"
                  >
                    Зрозуміло
                  </button>
                </div>
              )}

              {step === 'already' && (
                <div className="text-center py-8">
                  <History size={80} className="text-amber-500 mx-auto mb-6" />
                  <h2 className="text-3xl font-black text-white mb-4 tracking-tight uppercase">Зачекайте!</h2>
                  <p className="text-zinc-500 leading-relaxed mb-8">
                    Ви вже подали заявку раніше.<br />Будь ласка, очікуйте на відповідь лідера!
                  </p>
                  <button
                    onClick={() => setIsModalOpen(false)}
                    className="w-full py-5 bg-amber-500 text-black font-black text-sm rounded-2xl uppercase tracking-widest hover:bg-amber-400 transition-colors"
                  >
                    Зрозуміло
                  </button>
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};


