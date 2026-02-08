import { CODE_RULES } from '../lib/data';
import { useReveal } from '../lib/useReveal';

export default function CodeSection() {
  const ref = useReveal();

  return (
    <section className="code-section" ref={ref}>
      <div className="section-container">
        <h2 className="section-heading reveal">
          КОДЕКС<br />
          <span className="accent">СІМ'Ї</span>
        </h2>
        {CODE_RULES.map((r, i) => (
          <div key={i} className={`code-rule reveal reveal-delay-${i + 1}`}>
            <span className="rule-number">{r.num}</span>
            <div>
              <div className="rule-title">{r.title}</div>
              <p className="rule-text">{r.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
