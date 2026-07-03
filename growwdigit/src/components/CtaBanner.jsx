import MoleculeBackground from './MoleculeBackground';
import { useParallax } from '../hooks/useParallax';

export default function CtaBanner() {
  const parallaxRef = useParallax(0.15);

  return (
    <section
      style={{
        position: 'relative',
        background: 'var(--blue)',
        padding: '5rem 0',
        overflow: 'hidden',
      }}
    >
      <div ref={parallaxRef} className="parallax-wrap" style={{ position: 'absolute', inset: '-10% 0', zIndex: 1 }}>
        <MoleculeBackground variant="cta" />
      </div>

      <div className="container" style={{ position: 'relative', zIndex: 2, textAlign: 'center' }}>
        <h2
          style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
            fontWeight: 800,
            color: '#fff',
            letterSpacing: '-0.02em',
            maxWidth: '650px',
            margin: '0 auto 1.5rem',
          }}
        >
          Ready to scale with a strategic partner?
        </h2>
        <p
          style={{
            fontSize: '1.0625rem',
            color: 'rgba(255,255,255,0.8)',
            maxWidth: '500px',
            margin: '0 auto 2rem',
            lineHeight: 1.7,
          }}
        >
          Let's talk about how we can help you achieve predictable, measurable growth.
        </p>
        <a
          href="https://wa.me/916353173022?text=I%20am%20interested%20in%20GrowwDigit%20Services"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-cta"
          style={{
            display: 'inline-block',
            padding: '0.875rem 2.5rem',
            borderRadius: 'var(--radius-md)',
            background: '#fff',
            color: 'var(--blue)',
            fontWeight: 600,
            fontSize: '0.9375rem',
            textDecoration: 'none',
          }}
        >
          Get in Touch
        </a>
      </div>
    </section>
  );
}
