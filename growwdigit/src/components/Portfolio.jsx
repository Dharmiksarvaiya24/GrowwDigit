import { useReveal } from '../hooks/useReveal';
import helthcareImage from '../assets/helthcare.png';
import restaurantImage from '../assets/restro.png';
import gymImage from '../assets/gym.png';
import startupImage from '../assets/startup.png';
import ecomImage from '../assets/ecom.png';
import estateImage from '../assets/estate.png';

const projects = [
  {
    name: 'Healthcare Clinics',
    category: 'Performance Marketing',
    image: helthcareImage,
    tags: ['Google Ads', 'Meta'],
  },
  {
    name: 'Restaurant & Café',
    category: 'Web Design & CRO',
    image: restaurantImage,
    tags: ['UX Audit', 'A/B Testing'],
  },
  {
    name: ' Fitness & Gym',
    category: 'SEO & Content',
    image: gymImage,
    tags: ['SEO', 'Content Strategy'],
  },
  {
    name: 'E-commerce Store',
    category: 'Performance Marketing',
    image: ecomImage,
    tags: ['App Install', 'Retargeting'],
  },
  {
    name: 'Corporate & Startups',
    category: 'Creative Strategy',
    image: startupImage,
    tags: ['Branding', 'Design'],
  },
  {
    name: 'Real Estate',
    category: 'Conversion Optimization',
    image: estateImage,
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

function ProjectCard({ name, category, image, index, tags }) {
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
            <img src={image} alt={name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
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
