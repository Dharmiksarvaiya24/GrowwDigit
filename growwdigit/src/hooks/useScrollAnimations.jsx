import { useState, useEffect, useRef, createContext, useContext } from 'react';

const ScrollContext = createContext(null);

export function ScrollProvider({ children }) {
  const [scrollY, setScrollY] = useState(0);
  const [viewportH, setViewportH] = useState(0);
  const [docH, setDocH] = useState(0);
  const [progress, setProgress] = useState(0);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [direction, setDirection] = useState(1);
  const lastY = useRef(0);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mq.matches);
    const handler = () => setReducedMotion(mq.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  useEffect(() => {
    function update() {
      const sy = window.scrollY;
      const vh = window.innerHeight;
      const dh = document.documentElement.scrollHeight;
      setScrollY(sy);
      setViewportH(vh);
      setDocH(dh);
      setProgress(dh > vh ? sy / (dh - vh) : 0);
      setDirection(sy >= lastY.current ? 1 : -1);
      lastY.current = sy;
    }

    let running = false;
    function onScroll() {
      if (running) return;
      running = true;
      requestAnimationFrame(() => {
        update();
        running = false;
      });
    }

    function onResize() {
      update();
    }

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onResize, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return (
    <ScrollContext.Provider value={{ scrollY, viewportH, docH, progress, reducedMotion, direction }}>
      {children}
    </ScrollContext.Provider>
  );
}

export function useScroll() {
  const ctx = useContext(ScrollContext);
  if (!ctx) throw new Error('useScroll must be used within ScrollProvider');
  return ctx;
}
