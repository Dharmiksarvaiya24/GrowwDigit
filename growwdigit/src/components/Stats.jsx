import { useState, useEffect, useRef } from 'react';

const stats = [
  { target: 100, suffix: '+', label: 'Projects Delivered' },
  { target: 98, suffix: '%', label: 'Client Satisfaction' },
  { target: 20, suffix: '+', label: 'Active Clients' },
  { target: 5, suffix: '+', label: 'Years of Experience' },
];

function StatItem({ target, suffix, label, isVisible, prefersReducedMotion, delayIndex }) {
  const [count, setCount] = useState(prefersReducedMotion ? target : 0);

  useEffect(() => {
    if (!isVisible) return;
    if (prefersReducedMotion) {
      setCount(target);
      return;
    }

    let animationFrameId;
    const duration = 1500; // ms
    const startTime = performance.now() + delayIndex * 60;

    function step(now) {
      if (now < startTime) {
        animationFrameId = requestAnimationFrame(step);
        return;
      }
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // easeOutCubic curve
      const ease = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(ease * target);
      setCount(current);

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(step);
      } else {
        setCount(target);
      }
    }

    animationFrameId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isVisible, target, prefersReducedMotion, delayIndex]);

  return (
    <div className={`stat-big reveal-zoom reveal-zoom-d${delayIndex + 1}`}>
      <div className="num">
        {count}
        <span className="plus">{suffix}</span>
      </div>
      <div className="lbl">{label}</div>
    </div>
  );
}

export default function Stats() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mq.matches);

    const node = sectionRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(node);
        }
      },
      { threshold: 0.25 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="stats-strip" data-od-id="stats">
      <div className="container">
        <div className="stats-grid">
          {stats.map((s, idx) => (
            <StatItem
              key={s.label}
              target={s.target}
              suffix={s.suffix}
              label={s.label}
              isVisible={isVisible}
              prefersReducedMotion={prefersReducedMotion}
              delayIndex={idx}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
