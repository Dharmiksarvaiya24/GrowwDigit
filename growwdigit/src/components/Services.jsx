import { useReveal } from '../hooks/useReveal';
import { scrollToSection } from '../utils/scrollTo';
import SeoImage from '../assets/seo.png';
import PerformanceImage from '../assets/performance.png';
import SocialMediaImage from '../assets/social-media.png';
import ContentImage from '../assets/folder.png';
import DeveloperImage from '../assets/developer.png';
import ConversionImage from '../assets/conversion.png';
import App from '../assets/app.png';

const services = [
  {
   
    title: 'Website Development',
    description: 'Build fast, responsive, and SEO-friendly websites that deliver exceptional user experiences and turn visitors into loyal customers.',
    image: DeveloperImage,
  },
  {
  
    title: 'Social Media Marketing',
    description: 'Grow your brand across Instagram, Facebook, LinkedIn, and more with strategic content, engaging campaigns, and data-driven advertising.',
     image: SocialMediaImage,
  },
  {

    title: 'Branding & Graphic Design',
    description: 'Build a powerful brand identity with impactful logos, creative designs, and visuals that make your business unforgettable.',
   
    image: PerformanceImage,
  },
  {
    
    title: ' WhatsApp & Email Marketing',
    description: 'Reach your audience instantly with personalized WhatsApp campaigns and high-converting email marketing that boosts engagement and sales.',
    image: ContentImage,
  },
  {

    title: 'Application Development',
    description: 'Develop scalable web and mobile applications with modern technologies, intuitive interfaces, and powerful performance tailored to your business.',
    image: App,
  },
  {

    title: 'Search Engine Optimization (SEO)',
    description: 'Rank higher on Google, drive consistent organic traffic, and generate quality leads with proven SEO strategies.',
    image: ConversionImage,
    image: SeoImage,
  },
];

export default function Services() {
  return (
    <section id="services" style={{ padding: '6rem 0' }}>
      <div className="container">
        <div style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto 4rem' }}>
       
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
            Our Digital Solutions for Business Growth.
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
