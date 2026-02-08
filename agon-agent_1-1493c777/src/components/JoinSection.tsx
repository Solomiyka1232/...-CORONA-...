import { useState, useCallback } from 'react';
import { useReveal } from '../lib/useReveal';
import { SKILLS } from '../lib/data';
import { UserPlus, Crosshair, CheckCircle, Clock, X, Target, Send, Brain, MessageCircle } from 'lucide-react';
import confetti from 'canvas-confetti';

type ModalState = 'none' | 'type' | 'skills' | 'form' | 'success' | 'already';

export default function JoinSection() {
  const ref = useReveal();
  const [modal, setModal] = useState<ModalState>('none');
  const [formType, setFormType] = useState('');
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);
  const [contactMode, setContactMode] = useState<'tg' | 'ds'>('tg');
  const [nick, setNick] = useState('');
  const [contact, setContact] = useState('@');
  const [sending, setSending] = useState(false);

  const openTypeMenu = useCallback(() => {
    if (localStorage.getItem('corona_sent')) {
      setModal('already');
      return;
    }
    setModal('type');
  }, []);

  const selectType = (type: string) => {
    setFormType(type);
    setSelectedSkills([]);
    setModal('skills');
  };

  const toggleSkill = (skill: string) => {
    setSelectedSkills((prev) =>
      prev.includes(skill) ? prev.filter((s) => s !== skill) : [...prev, skill]
    );
  };

  const switchContact = (mode: 'tg' | 'ds') => {
    setContactMode(mode);
    setContact(mode === 'tg' ? '@' : '#');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!/^[A-Z][a-z]+_[A-Z][a-z]+$/.test(nick)) {
      alert('Формат ніка: Nick_Name');
      return;
    }
    setSending(true);

    const skillsText = selectedSkills.length > 0 ? selectedSkills.join(', ') : 'не вказано';
    const message = `🔥 НОВА ЗАЯВКА\n\n📋 Тип: ${formType}\n👤 Нік: ${nick}\n📞 Зв'язок: ${contact}\n🛠 Навички: ${skillsText}`;

    try {
      const BOT_TOKEN = '8263268386:AAHZJAtEokFMKn-jAWhoBeA0q0kYLQ98Rbk';
      const CHAT_ID = '6638384308';
      const res = await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ chat_id: CHAT_ID, text: message }),
      });

      if (res.ok) {
        localStorage.setItem('corona_sent', 'true');
        setModal('success');
        confetti({ particleCount: 150, spread: 70, origin: { y: 0.6 }, colors: ['#D4A017', '#00E676', '#ffffff'] });
      } else {
        alert('❌ Помилка відправки. Спробуйте ще раз.');
      }
    } catch {
      alert('🌐 Помилка мережі. Перевірте з\'єднання.');
    } finally {
      setSending(false);
    }
  };

  const closeModal = () => setModal('none');

  return (
    <>
      <section className="join-section" ref={ref}>
        <div className="section-container">
          <div className="join-card reveal">
            <div className="join-header">
              <h2 className="join-title">ВІДКРИТО НАБІР</h2>
              <div className="status-badge">ACTIVE</div>
            </div>
            <div className="join-body">
              <div>
                <div className="requirements-title">Вимоги:</div>
                <ul className="req-list">
                  <li>
                    <UserPlus size={16} className="req-icon" />
                    Вік: 14+ років
                  </li>
                  <li>
                    <Send size={16} className="req-icon" />
                    Наявність Telegram для зв'язку
                  </li>
                  <li>
                    <Brain size={16} className="req-icon" />
                    Повна адекватність
                  </li>
                </ul>
              </div>
              <div className="special-box">
                <Target size={24} className="special-icon" />
                <div>
                  <div className="special-label">СПЕЦІАЛЬНА ПРОПОЗИЦІЯ</div>
                  <div className="special-text">
                    Володієш навичкою стрільби? Є можливість вступити відразу на <strong>8 ранг</strong>
                  </div>
                </div>
              </div>
            </div>
            <button className="btn-apply" onClick={openTypeMenu}>
              ПОДАТИ ЗАЯВКУ
            </button>
          </div>
        </div>
      </section>

      {/* Type selection modal */}
      <div className={`modal-overlay ${modal === 'type' ? 'active' : ''}`} onClick={closeModal}>
        <div className="modal-box" onClick={(e) => e.stopPropagation()}>
          <button className="modal-close" onClick={closeModal}><X size={20} /></button>
          <div className="modal-heading">ОБЕРІТЬ ТИП ЗАЯВКИ</div>
          <div className="type-grid">
            <button className="type-card" onClick={() => selectType('Звичайний вступ')}>
              <div className="type-card-icon"><UserPlus size={28} /></div>
              <div className="type-card-label">Звичайний вступ</div>
            </button>
            <button className="type-card" onClick={() => selectType('Стрілець (8 ранг)')}>
              <div className="type-card-icon"><Crosshair size={28} /></div>
              <div className="type-card-label">Стрілець (8 ранг)</div>
            </button>
          </div>
        </div>
      </div>

      {/* Skills modal */}
      <div className={`modal-overlay ${modal === 'skills' ? 'active' : ''}`} onClick={closeModal}>
        <div className="modal-box" onClick={(e) => e.stopPropagation()}>
          <button className="modal-close" onClick={closeModal}><X size={20} /></button>
          <div className="modal-heading">ВАШІ НАВИЧКИ</div>
          <div className="skills-grid">
            {SKILLS.map((s) => (
              <button
                key={s}
                className={`skill-btn ${selectedSkills.includes(s) ? 'selected' : ''}`}
                onClick={() => toggleSkill(s)}
              >
                {s}
              </button>
            ))}
          </div>
          <button className="modal-next-btn" onClick={() => setModal('form')}>
            ДАЛІ
          </button>
        </div>
      </div>

      {/* Final form modal */}
      <div className={`modal-overlay ${modal === 'form' ? 'active' : ''}`} onClick={closeModal}>
        <div className="modal-box" onClick={(e) => e.stopPropagation()}>
          <button className="modal-close" onClick={closeModal}><X size={20} /></button>
          <div className="modal-heading" style={{ color: '#D4A017' }}>{formType}</div>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              className="form-input"
              placeholder="Ваш нік (Nick_Name)"
              value={nick}
              onChange={(e) => setNick(e.target.value)}
              required
            />
            <div className="toggle-row">
              <button
                type="button"
                className={`toggle-btn ${contactMode === 'tg' ? 'active' : ''}`}
                onClick={() => switchContact('tg')}
              >
                <MessageCircle size={14} style={{ marginRight: 6, verticalAlign: 'middle' }} />
                Telegram
              </button>
              <button
                type="button"
                className={`toggle-btn ${contactMode === 'ds' ? 'active' : ''}`}
                onClick={() => switchContact('ds')}
              >
                Discord
              </button>
            </div>
            <input
              type="text"
              className="form-input"
              value={contact}
              onChange={(e) => setContact(e.target.value)}
              required
            />
            <button type="submit" className="modal-next-btn" disabled={sending}>
              {sending ? 'НАДСИЛАННЯ...' : 'ВІДПРАВИТИ'}
            </button>
          </form>
        </div>
      </div>

      {/* Success modal */}
      <div className={`modal-overlay ${modal === 'success' ? 'active' : ''}`} onClick={closeModal}>
        <div className="modal-box" style={{ textAlign: 'center', borderColor: '#00E676' }} onClick={(e) => e.stopPropagation()}>
          <CheckCircle size={56} className="success-icon" />
          <div className="success-heading">ГОТОВО!</div>
          <p className="success-text">
            Твою заявку успішно відправлено.<br />Очікуй на відповідь у найближчий час!
          </p>
          <button className="btn-success" style={{ background: '#00E676', color: '#000' }} onClick={closeModal}>
            ЗРОЗУМІЛО
          </button>
        </div>
      </div>

      {/* Already sent modal */}
      <div className={`modal-overlay ${modal === 'already' ? 'active' : ''}`} onClick={closeModal}>
        <div className="modal-box" style={{ textAlign: 'center', borderColor: '#FFB300' }} onClick={(e) => e.stopPropagation()}>
          <Clock size={56} style={{ color: '#FFB300', marginBottom: 16 }} />
          <div className="success-heading">ЗАЧЕКАЙТЕ!</div>
          <p className="success-text">
            Ви вже подали заявку раніше.<br />Будь ласка, очікуйте на відповідь лідера!
          </p>
          <button className="btn-success" style={{ background: '#FFB300', color: '#000' }} onClick={closeModal}>
            ЗРОЗУМІЛО
          </button>
        </div>
      </div>
    </>
  );
}
