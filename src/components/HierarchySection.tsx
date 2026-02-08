import { RANKS } from '../lib/data';
import { useReveal } from '../lib/useReveal';

export default function HierarchySection() {
  const ref = useReveal();

  return (
    <section className="hierarchy-section" ref={ref}>
      <div className="section-container">
        <h2 className="section-heading reveal">
          СТРУКТУРА<br />
          <span className="accent">СИНДИКАТУ</span>
        </h2>
        <div className="hierarchy-grid">
          {RANKS.map((r, i) => (
            <div
              key={i}
              className={`rank-card reveal reveal-delay-${i + 1} ${r.type === 'shooter' ? 'shooter-card' : ''}`}
            >
              <span className="rank-badge">{r.range}</span>
              <span className="rank-title">{r.name}</span>
              <ul className="rank-perks">
                {r.perks.map((p, j) => (
                  <li key={j}>
                    <span className="perk-dot" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
