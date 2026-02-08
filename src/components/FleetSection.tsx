import { FLEET } from '../lib/data';
import { useReveal } from '../lib/useReveal';

export default function FleetSection() {
  const ref = useReveal();

  return (
    <section className="fleet-section" ref={ref}>
      <div className="section-container">
        <div className="fleet-panel reveal">
          <h2 className="section-heading" style={{ marginBottom: 8, fontSize: 'clamp(1.8rem, 5vw, 2.5rem)' }}>
            Наш Автопарк <span className="accent">(17)</span>
          </h2>
          <div className="fleet-grid">
            {FLEET.map((c, i) => (
              <div key={i} className={`car-card ${c.featured ? 'featured' : ''}`}>
                <div className="car-name">{c.name}</div>
                <div className="car-spec">
                  <span className="car-spec-label">Номер</span>
                  <span className="car-spec-value">{c.plate}</span>
                </div>
                <div className="car-spec">
                  <span className="car-spec-label">Доступ</span>
                  <span className="car-spec-value">{c.access}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
