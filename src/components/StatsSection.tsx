import { STATS } from '../lib/data';
import { useReveal } from '../lib/useReveal';

export default function StatsSection() {
  const ref = useReveal();

  return (
    <section className="stats-section" ref={ref}>
      <div className="section-container">
        <div className="stats-grid">
          {STATS.map((s, i) => (
            <div key={i} className={`stat-item reveal reveal-delay-${i + 1}`}>
              <div className="stat-number">{s.number}</div>
              <div className="stat-label">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
