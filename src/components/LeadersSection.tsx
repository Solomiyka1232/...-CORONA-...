import { LEADERS } from '../lib/data';
import { useReveal } from '../lib/useReveal';
import { Crown, Gem } from 'lucide-react';

export default function LeadersSection() {
  const ref = useReveal();

  return (
    <section className="leaders-section" ref={ref}>
      <div className="section-container">
        {LEADERS.map((l, i) => (
          <div key={i} className={`leader-row reveal reveal-delay-${i + 1}`}>
            <div>
              <div className="leader-role">{l.role}</div>
              <div className="leader-name">{l.name}</div>
            </div>
            {i === 0 ? (
              <Crown size={24} color="#000" opacity={0.3} />
            ) : (
              <Gem size={20} color="#000" opacity={0.3} />
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
