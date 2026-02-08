import { useState } from 'react';
import { BLACKLIST } from '../lib/data';
import { useReveal } from '../lib/useReveal';
import { ChevronDown, Skull } from 'lucide-react';

export default function BlacklistSection() {
  const ref = useReveal();
  const [open, setOpen] = useState(false);

  return (
    <section className="blacklist-section" ref={ref}>
      <div className="section-container">
        <div className={`blacklist-spoiler ${open ? 'active' : ''}`}>
          <div className="blacklist-trigger" onClick={() => setOpen(!open)}>
            <div className="blacklist-title">
              <Skull size={20} />
              BLACK LIST / HALL OF SHAME
            </div>
            <ChevronDown size={18} className="blacklist-arrow" />
          </div>
          <div className="blacklist-content">
            <div className="blacklist-inner">
              {BLACKLIST.map((b, i) => (
                <div key={i} className="shame-card">
                  <span className="shame-nick">{b.nick}</span>
                  <div className="shame-roles">
                    {b.roles.map((r, j) => (
                      <span key={j} className={`role-tag role-${r.type}`}>
                        {r.label}
                      </span>
                    ))}
                  </div>
                  <p className="shame-reason">{b.reason}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
