import { useState, useEffect } from 'react';
import { Crown } from 'lucide-react';

export default function Preloader() {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setHidden(true), 1800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`preloader ${hidden ? 'hidden' : ''}`}>
      <div className="flex flex-col items-center">
        <Crown className="preloader-crown" size={80} strokeWidth={1.5} />
        <div className="preloader-bar" />
      </div>
    </div>
  );
}
