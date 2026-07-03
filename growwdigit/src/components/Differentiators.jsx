import { useReveal } from '../hooks/useReveal';

const cards = [
  {
    title: 'Customer-Centric Approach',
    description: 'We start with your audience. Every strategy is built around understanding your customers\' needs, behaviors, and journey to deliver marketing that truly resonates.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--blue)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    title: 'Innovative Strategy',
    description: 'We combine emerging trends with proven frameworks to create campaigns that stand out. Innovation is baked into every recommendation we make.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--blue)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    ),
  },
  {
    title: 'Unmatched Quality',
    description: 'We hold every deliverable to a high standard before it reaches you. Rigorous QA, clear reporting, and a commitment to excellence define our work.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--blue)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
  },
];

export default function Differentiators() {
  return (
    <section
      style={{
        padding: '5rem 0',
        background: 'var(--gray-50)',
      }}
    >
      <div className="container">
        <div style={{ maxWidth: '700px', marginBottom: '3.5rem' }}>
          <span style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--blue)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
            Why Choose Us
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
            }}
          >
            Built different, on purpose.
          </h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
          {cards.map((card, i) => (
            <DifferentiatorCard key={card.title} {...card} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function DifferentiatorCard({ title, description, icon, index }) {
  const { ref, isInView } = useReveal();

  return (
    <div
      ref={ref}
      className={`reveal reveal--up diff-card ${isInView ? 'reveal--in-view' : ''}`}
      style={{
        background: '#fff',
        borderRadius: 'var(--radius-xl)',
        padding: '2rem',
        border: '1px solid var(--gray-100)',
        transitionDelay: `${index * 75}ms`,
      }}
    >
      <div
        style={{
          width: 48,
          height: 48,
          borderRadius: 'var(--radius-lg)',
          background: 'var(--blue-50)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: '1.25rem',
        }}
      >
        {icon}
      </div>
      <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.125rem', fontWeight: 700, color: 'var(--blue)', marginBottom: '0.5rem' }}>
        {title}
      </h3>
      <p style={{ fontSize: '0.9375rem', lineHeight: 1.7, color: 'var(--gray-600)' }}>
        {description}
      </p>
    </div>
  );
}
