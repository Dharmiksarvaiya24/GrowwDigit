import { useReveal } from '../hooks/useReveal';

const projects = [
  {
    name: 'SaaS Launch',
    category: 'Performance Marketing',
    svg: (
      <svg viewBox="0 0 400 300" fill="none" style={{ width: '100%', height: '100%' }}>
        <rect width="400" height="300" fill="url(#ps1)" />
        <defs><linearGradient id="ps1" x1="0" y1="0" x2="400" y2="300"><stop offset="0%" stopColor="#eff6ff" /><stop offset="100%" stopColor="#dbeafe" /></linearGradient></defs>
        <rect x="60" y="60" width="120" height="80" rx="8" fill="#fff" stroke="#bfdbfe" strokeWidth="2" />
        <rect x="80" y="80" width="80" height="4" rx="2" fill="#437bf5" opacity="0.3" />
        <rect x="80" y="92" width="60" height="4" rx="2" fill="#437bf5" opacity="0.2" />
        <rect x="80" y="104" width="40" height="4" rx="2" fill="#437bf5" opacity="0.15" />
        <circle cx="90" cy="120" r="4" fill="#437bf5" opacity="0.5" />
        <rect x="100" y="118" width="30" height="4" rx="2" fill="#437bf5" opacity="0.3" />
        <rect x="220" y="60" width="120" height="80" rx="8" fill="#fff" stroke="#bfdbfe" strokeWidth="2" />
        <rect x="240" y="80" width="80" height="4" rx="2" fill="#10b981" opacity="0.4" />
        <rect x="240" y="92" width="60" height="4" rx="2" fill="#10b981" opacity="0.25" />
        <rect x="240" y="104" width="45" height="4" rx="2" fill="#10b981" opacity="0.15" />
        <rect x="60" y="170" width="280" height="70" rx="8" fill="#fff" stroke="#bfdbfe" strokeWidth="2" />
        <circle cx="90" cy="205" r="12" fill="#437bf5" opacity="0.15" />
        <circle cx="90" cy="205" r="6" fill="#437bf5" opacity="0.4" />
        <rect x="115" y="195" width="100" height="4" rx="2" fill="#437bf5" opacity="0.3" />
        <rect x="115" y="207" width="70" height="4" rx="2" fill="#437bf5" opacity="0.2" />
        <rect x="270" y="193" width="50" height="24" rx="6" fill="#437bf5" opacity="0.15" />
      </svg>
    ),
    tags: ['Google Ads', 'Meta'],
  },
  {
    name: 'E-Commerce Redesign',
    category: 'Web Design & CRO',
    svg: (
      <svg viewBox="0 0 400 300" fill="none" style={{ width: '100%', height: '100%' }}>
        <rect width="400" height="300" fill="url(#ps2)" />
        <defs><linearGradient id="ps2" x1="0" y1="0" x2="400" y2="300"><stop offset="0%" stopColor="#f0fdf4" /><stop offset="100%" stopColor="#dcfce7" /></linearGradient></defs>
        <rect x="100" y="60" width="200" height="160" rx="12" fill="#fff" stroke="#bbf7d0" strokeWidth="2" />
        <rect x="120" y="80" width="60" height="60" rx="6" fill="#437bf5" opacity="0.1" />
        <rect x="120" y="80" width="60" height="60" rx="6" stroke="#437bf5" strokeWidth="1.5" opacity="0.3" />
        <circle cx="150" cy="110" r="10" fill="#437bf5" opacity="0.2" />
        <rect x="195" y="85" width="85" height="4" rx="2" fill="#437bf5" opacity="0.3" />
        <rect x="195" y="97" width="65" height="4" rx="2" fill="#437bf5" opacity="0.2" />
        <rect x="195" y="109" width="50" height="4" rx="2" fill="#437bf5" opacity="0.15" />
        <rect x="120" y="155" width="80" height="4" rx="2" fill="#10b981" opacity="0.3" />
        <rect x="120" y="167" width="60" height="4" rx="2" fill="#10b981" opacity="0.2" />
        <rect x="120" y="179" width="70" height="4" rx="2" fill="#10b981" opacity="0.15" />
        <circle cx="270" cy="190" r="16" fill="#437bf5" opacity="0.12" />
        <path d="M264 190l4 4 8-8" stroke="#437bf5" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    tags: ['UX Audit', 'A/B Testing'],
  },
  {
    name: 'B2B Lead Gen',
    category: 'SEO & Content',
    svg: (
      <svg viewBox="0 0 400 300" fill="none" style={{ width: '100%', height: '100%' }}>
        <rect width="400" height="300" fill="url(#ps3)" />
        <defs><linearGradient id="ps3" x1="0" y1="0" x2="400" y2="300"><stop offset="0%" stopColor="#fefce8" /><stop offset="100%" stopColor="#fef9c3" /></linearGradient></defs>
        <rect x="60" y="80" width="280" height="140" rx="12" fill="#fff" stroke="#fde68a" strokeWidth="2" />
        <circle cx="100" cy="150" r="20" fill="#437bf5" opacity="0.1" />
        <circle cx="100" cy="150" r="12" fill="#437bf5" opacity="0.15" />
        <circle cx="100" cy="150" r="5" fill="#437bf5" />
        <rect x="135" y="135" width="80" height="4" rx="2" fill="#437bf5" opacity="0.3" />
        <rect x="135" y="147" width="60" height="4" rx="2" fill="#437bf5" opacity="0.2" />
        <rect x="135" y="159" width="70" height="4" rx="2" fill="#437bf5" opacity="0.15" />
        <rect x="240" y="130" width="80" height="40" rx="8" fill="#437bf5" opacity="0.1" />
        <rect x="250" y="142" width="20" height="4" rx="2" fill="#437bf5" opacity="0.4" />
        <rect x="278" y="142" width="30" height="4" rx="2" fill="#437bf5" opacity="0.3" />
        <rect x="90" y="190" width="140" height="4" rx="2" fill="#10b981" opacity="0.2" />
        <rect x="90" y="202" width="110" height="4" rx="2" fill="#10b981" opacity="0.12" />
      </svg>
    ),
    tags: ['SEO', 'Content Strategy'],
  },
  {
    name: 'Mobile App Growth',
    category: 'Performance Marketing',
    svg: (
      <svg viewBox="0 0 400 300" fill="none" style={{ width: '100%', height: '100%' }}>
        <rect width="400" height="300" fill="url(#ps4)" />
        <defs><linearGradient id="ps4" x1="0" y1="0" x2="400" y2="300"><stop offset="0%" stopColor="#faf5ff" /><stop offset="100%" stopColor="#f3e8ff" /></linearGradient></defs>
        <rect x="140" y="50" width="120" height="200" rx="16" fill="#fff" stroke="#e9d5ff" strokeWidth="2.5" />
        <rect x="185" y="65" width="30" height="4" rx="2" fill="#437bf5" opacity="0.15" />
        <rect x="160" y="85" width="80" height="80" rx="8" fill="#437bf5" opacity="0.06" />
        <rect x="160" y="85" width="80" height="80" rx="8" stroke="#437bf5" strokeWidth="1.5" opacity="0.2" />
        <circle cx="200" cy="125" r="12" fill="#437bf5" opacity="0.3" />
        <rect x="175" y="150" width="50" height="3" rx="1.5" fill="#437bf5" opacity="0.2" />
        <rect x="160" y="178" width="80" height="6" rx="3" fill="#437bf5" opacity="0.15" />
        <rect x="160" y="192" width="60" height="4" rx="2" fill="#437bf5" opacity="0.1" />
        <circle cx="200" cy="230" r="8" fill="#437bf5" opacity="0.2" />
        <circle cx="200" cy="230" r="3" fill="#437bf5" />
        <rect x="60" y="260" width="280" height="2" fill="#437bf5" opacity="0.08" />
        <circle cx="80" cy="261" r="3" fill="#10b981" opacity="0.4" />
        <circle cx="320" cy="261" r="3" fill="#437bf5" opacity="0.3" />
      </svg>
    ),
    tags: ['App Install', 'Retargeting'],
  },
  {
    name: 'Brand Identity',
    category: 'Creative Strategy',
    svg: (
      <svg viewBox="0 0 400 300" fill="none" style={{ width: '100%', height: '100%' }}>
        <rect width="400" height="300" fill="url(#ps5)" />
        <defs><linearGradient id="ps5" x1="0" y1="0" x2="400" y2="300"><stop offset="0%" stopColor="#fce7f3" /><stop offset="100%" stopColor="#fbcfe8" /></linearGradient></defs>
        <circle cx="200" cy="100" r="50" fill="#fff" stroke="#f9a8d4" strokeWidth="2" />
        <circle cx="200" cy="100" r="30" fill="#437bf5" opacity="0.08" />
        <circle cx="200" cy="100" r="15" fill="#437bf5" opacity="0.15" />
        <rect x="100" y="175" width="40" height="40" rx="6" fill="#437bf5" opacity="0.2" />
        <rect x="155" y="175" width="40" height="40" rx="6" fill="#10b981" opacity="0.2" />
        <rect x="210" y="175" width="40" height="40" rx="6" fill="#f59e0b" opacity="0.2" />
        <rect x="265" y="175" width="40" height="40" rx="6" fill="#8b5cf6" opacity="0.2" />
        <rect x="120" y="185" width="20" height="3" rx="1.5" fill="#fff" opacity="0.6" />
        <rect x="120" y="193" width="14" height="3" rx="1.5" fill="#fff" opacity="0.4" />
        <rect x="175" y="185" width="20" height="3" rx="1.5" fill="#fff" opacity="0.6" />
        <rect x="230" y="185" width="20" height="3" rx="1.5" fill="#fff" opacity="0.6" />
        <rect x="285" y="185" width="20" height="3" rx="1.5" fill="#fff" opacity="0.6" />
      </svg>
    ),
    tags: ['Branding', 'Design'],
  },
  {
    name: 'Email Automation',
    category: 'Conversion Optimization',
    svg: (
      <svg viewBox="0 0 400 300" fill="none" style={{ width: '100%', height: '100%' }}>
        <rect width="400" height="300" fill="url(#ps6)" />
        <defs><linearGradient id="ps6" x1="0" y1="0" x2="400" y2="300"><stop offset="0%" stopColor="#f0f9ff" /><stop offset="100%" stopColor="#e0f2fe" /></linearGradient></defs>
        <rect x="80" y="60" width="240" height="180" rx="12" fill="#fff" stroke="#bae6fd" strokeWidth="2" />
        <rect x="100" y="80" width="40" height="40" rx="8" fill="#437bf5" opacity="0.08" />
        <rect x="100" y="80" width="40" height="40" rx="8" stroke="#437bf5" strokeWidth="1.5" opacity="0.25" />
        <path d="M112 100l8 6 8-6" stroke="#437bf5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.5" />
        <rect x="155" y="85" width="100" height="4" rx="2" fill="#437bf5" opacity="0.3" />
        <rect x="155" y="97" width="75" height="4" rx="2" fill="#437bf5" opacity="0.2" />
        <rect x="100" y="135" width="200" height="2" fill="#f0f9ff" />
        <rect x="100" y="150" width="40" height="40" rx="8" fill="#10b981" opacity="0.08" />
        <rect x="100" y="150" width="40" height="40" rx="8" stroke="#10b981" strokeWidth="1.5" opacity="0.25" />
        <path d="M112 170l8 6 8-6" stroke="#10b981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.5" />
        <rect x="155" y="155" width="90" height="4" rx="2" fill="#10b981" opacity="0.3" />
        <rect x="155" y="167" width="65" height="4" rx="2" fill="#10b981" opacity="0.2" />
        <rect x="100" y="205" width="40" height="40" rx="8" fill="#f59e0b" opacity="0.08" />
        <rect x="100" y="205" width="40" height="40" rx="8" stroke="#f59e0b" strokeWidth="1.5" opacity="0.25" />
        <rect x="155" y="210" width="80" height="4" rx="2" fill="#f59e0b" opacity="0.3" />
        <rect x="155" y="222" width="55" height="4" rx="2" fill="#f59e0b" opacity="0.2" />
      </svg>
    ),
    tags: ['CRM', 'Automation'],
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" style={{
      padding: '6rem 0',
      background: 'linear-gradient(180deg, #fff 0%, var(--gray-50) 100%)',
      position: 'relative',
      overflow: 'hidden',
    }}>
      <div style={{
        position: 'absolute',
        top: '-15%',
        left: '-5%',
        width: '300px',
        height: '300px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, var(--blue-50) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ maxWidth: '600px', marginBottom: '3.5rem' }}>
          <span style={{
            fontSize: '0.875rem',
            fontWeight: 600,
            color: 'var(--blue)',
            textTransform: 'uppercase',
            letterSpacing: '0.08em',
            background: 'var(--blue-50)',
            padding: '0.375rem 1rem',
            borderRadius: 'var(--radius-full)',
            display: 'inline-block',
          }}>
            Our Work
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
              marginTop: '1rem',
            }}
          >
            Results we're proud of.
          </h2>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '1.5rem',
        }}>
          {projects.map((p, i) => (
            <ProjectCard key={p.name} {...p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ name, category, svg, index, tags }) {
  const { ref, isInView } = useReveal();

  return (
    <div
      ref={ref}
      className={`reveal reveal--scale ${isInView ? 'reveal--in-view' : ''}`}
      style={{
        borderRadius: 'var(--radius-xl)',
        overflow: 'hidden',
        cursor: 'pointer',
        transitionDelay: `${index * 80}ms`,
        background: '#fff',
        boxShadow: '0 2px 12px rgba(0,0,0,0.04), 0 1px 4px rgba(0,0,0,0.02)',
        border: '1px solid var(--gray-100)',
      }}
    >
      <div className="portfolio-card" style={{ width: '100%', position: 'relative' }}>
        <div style={{ aspectRatio: '4 / 3', overflow: 'hidden', position: 'relative', background: 'var(--gray-50)' }}>
          <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            {svg}
          </div>
        </div>
        <div style={{ padding: '1.25rem 1.25rem 1.5rem' }}>
          <span style={{
            fontSize: '0.75rem',
            fontWeight: 600,
            color: 'var(--blue)',
            textTransform: 'uppercase',
            letterSpacing: '0.08em',
            background: 'var(--blue-50)',
            padding: '0.2rem 0.625rem',
            borderRadius: 'var(--radius-full)',
            display: 'inline-block',
            marginBottom: '0.5rem',
          }}>
            {category}
          </span>
          <h3 style={{
            fontFamily: 'var(--font-heading)',
            fontSize: '1.125rem',
            fontWeight: 700,
            color: 'var(--ink)',
            marginBottom: '0.75rem',
          }}>
            {name}
          </h3>
          <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
            {tags.map((tag) => (
              <span key={tag} style={{
                fontSize: '0.75rem',
                color: 'var(--gray-600)',
                background: 'var(--gray-100)',
                padding: '0.2rem 0.5rem',
                borderRadius: 'var(--radius-sm)',
              }}>
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
