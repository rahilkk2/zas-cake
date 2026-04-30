import { useState, useEffect } from 'react';
import './PageLoader.css';

const PageLoader = ({ onComplete }) => {
  const [phase, setPhase] = useState('loading'); // loading → reveal → done

  useEffect(() => {
    // Phase 1: Show loader for a moment
    const t1 = setTimeout(() => setPhase('reveal'), 1200);
    // Phase 2: Slide away
    const t2 = setTimeout(() => {
      setPhase('done');
      onComplete?.();
    }, 2000);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, [onComplete]);

  if (phase === 'done') return null;

  return (
    <div className={`page-loader ${phase}`}>
      <div className="loader-content">
        <img src="/logo.png" alt="ZAS! Cake" className="loader-logo" />
        <div className="loader-bar-track">
          <div className="loader-bar-fill" />
        </div>
        <p className="loader-text">Baked with Love</p>
      </div>
    </div>
  );
};

export default PageLoader;
