import { DIPLOMACY } from '../lib/data';
import { useReveal } from '../lib/useReveal';

export default function DiplomacySection() {
  const ref = useReveal();

  return (
    <section className="diplomacy-section" ref={ref}>
      <div className="section-container">
        <h2 className="section-heading reveal">
          ЗОВНІШНЯ<br />
          <span className="accent">ПОЛІТИКА</span>
        </h2>
        <div className="diplomacy-grid">
          {DIPLOMACY.map((d, i) => (
            <div key={i} className={`dip-card reveal reveal-delay-${i + 1}`}>
              <div className={`dip-status ${d.status}`}>
                <span className="dip-status-dot" />
                {d.label}
              </div>
              {d.entries.map((e, j) => (
                <div key={j} className="dip-entry">
                  <div className="dip-name">{e.name}</div>
                  <div className="dip-desc">{e.desc}</div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
