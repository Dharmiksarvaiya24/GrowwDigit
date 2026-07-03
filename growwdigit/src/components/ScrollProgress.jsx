import { useState, useEffect } from 'react';

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    function update() {
      const dh = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(window.scrollY / dh);
    }

    let ticking = false;
    function onScroll() {
      if (!ticking) {
        requestAnimationFrame(() => { update(); ticking = false; });
        ticking = true;
      }
    }

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      height: '3px',
      zIndex: 10000,
      background: 'rgba(67,123,245,0.1)',
    }}>
      <div style={{
        height: '100%',
        width: `${progress * 100}%`,
        background: 'linear-gradient(90deg, var(--blue), #818cf8)',
        transition: 'width 0.1s ease-out',
      }} />
    </div>
  );
}
