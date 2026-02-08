import { useState, useRef } from 'react';
import { Play, Pause } from 'lucide-react';

export default function RadioPlayer() {
  const [playing, setPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const toggle = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (!playing) {
      audio.play().then(() => setPlaying(true)).catch(() => {});
    } else {
      audio.pause();
      setPlaying(false);
    }
  };

  return (
    <div className={`radio-player ${playing ? 'playing' : ''}`}>
      <button className="radio-btn" onClick={toggle} aria-label="Toggle radio">
        {playing ? <Pause size={16} /> : <Play size={16} style={{ marginLeft: 2 }} />}
      </button>
      <div className="radio-meta">
        <span className="radio-status-text" style={{ color: playing ? '#EF5350' : undefined }}>
          {playing ? 'ON AIR' : 'OFFLINE'}
        </span>
        <span className="radio-name-text">SYNDICATE FM</span>
      </div>
      <div className="wave-bars">
        {[0.1, 0.3, 0.2, 0.4].map((d, i) => (
          <div key={i} className="wave-bar" style={{ animationDelay: `${d}s` }} />
        ))}
      </div>
      <audio ref={audioRef} src="https://online.radioroks.ua/RadioROKS_HardnHeavy" preload="none" />
    </div>
  );
}
