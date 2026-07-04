import { useReveal } from '../hooks/useReveal';
import vid from '../assets/vid.mp4';

const items = [
  'Complete Digital Solutions — Websites, apps, branding, SEO, and digital marketing—all under one roof.',
  'Results-Driven Strategy — Smart solutions designed to grow your brand, leads, and sales.',
  'Creative & Modern Execution — Innovative designs and technology that help your business stand out.',
  'Transparent & Reliable — Clear communication, timely delivery, and dedicated support at every step.',
];

export default function WhyUs() {
  return (
    <section id="why" style={{ padding: '6rem 0', background: 'var(--gray-50)' }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1.3fr 1fr',
          gap: '4rem',
          alignItems: 'stretch',
        }}
        className="why-grid"
        >
          <VisualSide />
          <ContentSide />
        </div>
      </div>
    </section>
  );
}

function VisualSide() {
  return (
    <div
      style={{
        borderRadius: 'var(--radius-2xl)',
        overflow: 'hidden',
        position: 'relative',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <video
        src={vid}
        autoPlay
        muted
        loop
        playsInline
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
        }}
      />
    </div>
  );
}

function ContentSide() {
  const { ref, isInView } = useReveal();

  return (
    <div
      ref={ref}
      className={`reveal reveal--up ${isInView ? 'reveal--in-view' : ''}`}
    >
      <span style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--blue)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
        Why GrowwDigit
      </span>
      <h2
        style={{
          fontFamily: 'var(--font-heading)',
          fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
          fontWeight: 800,
          background: 'linear-gradient(135deg, var(--ink) 0%, var(--blue) 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          letterSpacing: '-0.02em',
          marginTop: '0.75rem',
          marginBottom: '1.5rem',
        }}
      >
       Transforming Businesses Through Digital Growth.
      </h2>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
        {items.map((item, i) => (
          <StaggerItem key={i} item={item} index={i} />
        ))}
      </div>
    </div>
  );
}

function StaggerItem({ item, index }) {
  const { ref, isInView } = useReveal();

  return (
    <div
      ref={ref}
      className={`reveal reveal--up ${isInView ? 'reveal--in-view' : ''}`}
      style={{
        display: 'flex',
        gap: '0.75rem',
        alignItems: 'flex-start',
        transitionDelay: `${index * 70}ms`,
      }}
    >
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="var(--blue)"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{ flexShrink: 0, marginTop: '0.125rem' }}
      >
        <polyline points="20 6 9 17 4 12" />
      </svg>
      <p style={{ fontSize: '0.9375rem', lineHeight: 1.7, color: 'var(--gray-700)' }}>
        {item}
      </p>
    </div>
  );
}
