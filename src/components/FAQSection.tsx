import { useState } from 'react';
import { FAQ } from '../lib/data';
import { useReveal } from '../lib/useReveal';
import { ChevronDown } from 'lucide-react';

export default function FAQSection() {
  const ref = useReveal();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="faq-section" ref={ref}>
      <div className="section-container">
        <h2 className="section-heading reveal">
          ЧАСТІ<br />
          <span className="accent">ЗАПИТАННЯ</span>
        </h2>
        <div className="faq-list">
          {FAQ.map((item, i) => (
            <div
              key={i}
              className={`faq-item ${openIndex === i ? 'active' : ''}`}
            >
              <div className="faq-question" onClick={() => setOpenIndex(openIndex === i ? null : i)}>
                {item.q}
                <ChevronDown size={18} className="faq-chevron" />
              </div>
              <div className="faq-answer">{item.a}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
