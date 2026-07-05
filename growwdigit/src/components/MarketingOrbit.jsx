import { useEffect, useState } from 'react';
import { TrendingUp, Share2, LayoutTemplate, Camera, Megaphone, BarChart3, Code2 } from 'lucide-react';
import Logo from '/favicon.png';
import './MarketingOrbit.css';

const services = [
  { name: 'SEO Ranking', Icon: TrendingUp, gradient: 'linear-gradient(135deg, #6366f1, #8b5cf6)' },
  { name: 'Social Media', Icon: Share2, gradient: 'linear-gradient(135deg, #f97316, #f59e0b)' },
  { name: 'Website Design', Icon: LayoutTemplate, gradient: 'linear-gradient(135deg, #10b981, #34d399)' },
  { name: 'Content Creation', Icon: Camera, gradient: 'linear-gradient(135deg, #3b82f6, #60a5fa)' },
  { name: 'Google Ads', Icon: Megaphone, gradient: 'linear-gradient(135deg, #ef4444, #f97316)' },
  { name: 'Analytics', Icon: BarChart3, gradient: 'linear-gradient(135deg, #8b5cf6, #a78bfa)' },
  { name: 'Web Development', Icon: Code2, gradient: 'linear-gradient(135deg, #06b6d4, #22d3ee)' },
];

function useOrbit(period = 35000) {
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    let reduced = mq.matches;
    const onChange = (e) => { reduced = e.matches; };
    mq.addEventListener('change', onChange);

    let rafId;
    let start;

    function tick(ts) {
      if (!start) start = ts;
      const elapsed = ts - start;
      setRotation(((elapsed / period) * 360) % 360);
      if (!reduced) rafId = requestAnimationFrame(tick);
    }

    rafId = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(rafId);
      mq.removeEventListener('change', onChange);
    };
  }, [period]);

  return rotation;
}

function useResponsive(desktop, tablet, mobile) {
  const [value, setValue] = useState(desktop);

  useEffect(() => {
    function calc() {
      const w = window.innerWidth;
      setValue(w < 768 ? mobile : w < 1024 ? tablet : desktop);
    }
    calc();
    window.addEventListener('resize', calc);
    return () => window.removeEventListener('resize', calc);
  }, [desktop, tablet, mobile]);

  return value;
}

export default function MarketingOrbit() {
  const rotation = useOrbit();
  const radius = useResponsive(180, 140, 100);
  const iconSize = useResponsive(72, 60, 50);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 50);
    return () => clearTimeout(t);
  }, []);

  const orbitSize = radius * 2 + iconSize;
  const count = services.length;

  return (
    <div className="orbit-wrapper">
      <div className="orbit-container" style={{ width: orbitSize, height: orbitSize }}>
        <div className="orbit-center">
          <img src={Logo} alt="GrowwDigit" className="orbit-logo" />
        </div>

        {services.map(({ name, Icon, gradient }, i) => {
          const angle = ((i / count) * 360 + rotation) * (Math.PI / 180);
          const x = Math.cos(angle) * radius;
          const y = Math.sin(angle) * radius;

          return (
            <div
              key={name}
              className="orbit-item-pos"
              style={{ transform: `translate(${x}px, ${y}px)` }}
            >
              <div
                className={`orbit-item${mounted ? ' orbit-item--visible' : ''}`}
                style={{ transitionDelay: `${i * 0.12}s` }}
                aria-label={name}
              >
                <div
                  className="orbit-item__inner"
                  style={{
                    background: gradient,
                    width: iconSize,
                    height: iconSize,
                  }}
                >
                  <Icon size={iconSize * 0.48} color="#fff" strokeWidth={1.5} />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
