import { useReveal } from '../hooks/useReveal';
import { scrollToSection } from '../utils/scrollTo';
import SeoImage from '../assets/seo.png';
import PerformanceImage from '../assets/performance.png';
import SocialMediaImage from '../assets/social-media.png';
import ContentImage from '../assets/folder.png';
import DeveloperImage from '../assets/developer.png';
import ConversionImage from '../assets/conversion.png';

const services = [
  {
   
    title: 'SEO',
    description: 'Earn top rankings with technical audits, content optimization, and link-building strategies that drive qualified organic traffic.',
    image: SeoImage,
  },
  {
  
    title: 'Performance Marketing',
    description: 'Maximize ROAS across Google, Meta, LinkedIn, and programmatic channels with precise bidding and audience targeting.',
    image: PerformanceImage,
  },
  {

    title: 'Social Media Management',
    description: 'Build engaged communities and authentic brand presence through strategy-led content, community management, and paid social.',
    image: SocialMediaImage,
  },
  {
    
    title: 'Content Marketing',
    description: 'Create high-value content that educates, converts, and positions your brand as an authority in your space.',
    image: ContentImage,
  },
  {

    title: 'Web Design & Development',
    description: 'Build conversion-optimized websites with modern design, fast load times, and seamless user experiences.',
    image: DeveloperImage,
  },
  {

    title: 'Conversion Rate Optimization',
    description: 'Turn more visitors into customers through A/B testing, funnel analysis, UX improvements, and personalization.',
    image: ConversionImage,
  },
];

export default function Services() {
  return (
    <section id="services" style={{ padding: '6rem 0' }}>
      <div className="container">
        <div style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto 4rem' }}>
          <span style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--blue)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
            What We Do
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
            Full-service digital marketing that delivers.
          </h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
          {services.map((s, i) => (
            <ServiceCard key={s.title} {...s} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ title, description, image, index }) {
  const { ref, isInView } = useReveal();

  return (
    <div
      ref={ref}
      className={`reveal reveal--scale service-card ${isInView ? 'reveal--in-view' : ''}`}
      style={{
        padding: '2rem',
        borderRadius: 'var(--radius-xl)',
        border: '1px solid var(--gray-100)',
        transition: 'border-color 0.2s, box-shadow 0.2s',
        transitionDelay: `${index * 60}ms`,
      }}
    >
      <div className="service-card__top">
        <div className="service-card__icon" aria-hidden="true">
          <img src={image} alt="" />
        </div>
      </div>
      <h3
        style={{
          fontFamily: 'var(--font-heading)',
          fontSize: '1.25rem',
          fontWeight: 700,
          color: 'var(--blue)',
          margin: '0.75rem 0 0.5rem',
        }}
      >
        {title}
      </h3>
      <p style={{ fontSize: '0.9375rem', lineHeight: 1.7, color: 'var(--gray-600)', marginBottom: '1.25rem' }}>
        {description}
      </p>
      <a
        href="#contact"
        onClick={(e) => { e.preventDefault(); scrollToSection('#contact'); }}
        className="learn-more-link"
        style={{
          fontSize: '0.875rem',
          fontWeight: 600,
          color: 'var(--blue)',
          textDecoration: 'none',
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.375rem',
        }}
      >
        Learn more
        <svg className="learn-more-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M5 12h14M12 5l7 7-7 7" />
        </svg>
      </a>
    </div>
  );
}
