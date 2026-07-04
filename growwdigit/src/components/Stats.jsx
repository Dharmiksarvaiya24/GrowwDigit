import { useState, useEffect, useRef } from 'react';

const stats = [
  { label: 'Projects Delivered', target: 100, suffix: '+' },
  { label: 'Client Satisfaction', target: 98, suffix: '%' },
  { label: 'Active Clients', target: 20, suffix: '+' },
  { label: 'Years of Experience', target: 5, suffix: '+' },
];

export default function Stats() {
  const [started, setStarted] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.unobserve(node);
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      style={{
        background: 'var(--blue)',
        padding: '4rem 0',
      }}
    >
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '2rem', textAlign: 'center' }}>
          {stats.map((s) => (
            <StatItem key={s.label} {...s} started={started} />
          ))}
        </div>
      </div>
    </section>
  );
}

function StatItem({ label, target, suffix, started }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!started) return;
    const duration = 2000;
    const startTime = performance.now();

    function animate(now) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(animate);
    }

    requestAnimationFrame(animate);
  }, [started, target]);

  return (
    <div>
      <div
        style={{
          fontFamily: 'var(--font-heading)',
          fontSize: 'clamp(2rem, 4vw, 3rem)',
          fontWeight: 700,
          color: '#fff',
          lineHeight: 1.1,
        }}
      >
        {count}{suffix}
      </div>
      <div style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.8)', marginTop: '0.25rem' }}>
        {label}
      </div>
    </div>
  );
}
