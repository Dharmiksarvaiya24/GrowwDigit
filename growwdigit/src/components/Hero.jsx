import HeroSvg from '../assets/hero.svg';
import BackgroundSvg from '../assets/Background.svg';
import { scrollToSection } from '../utils/scrollTo';
import { useParallax } from '../hooks/useParallax';

export default function Hero() {
  const parallaxRef = useParallax(0.2);

  return (
    <section
      id="hero"
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        padding: '7rem 0 4rem',
        overflow: 'hidden',
        background: 'linear-gradient(135deg, #fafafa 0%, #ffffff 52%, #f4f4f5 100%)',
      }}
    >
      <div ref={parallaxRef} className="parallax-wrap" style={{ position: 'absolute', inset: 0, zIndex: 1, pointerEvents: 'none' }}>
        <img
          src={BackgroundSvg}
          alt=""
          aria-hidden="true"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            display: 'block',
          }}
        />
      </div>

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '3rem',
            alignItems: 'center',
          }}
          className="hero-grid"
        >
          <div>
           

            <h1
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                fontWeight: 800,
                lineHeight: 1.1,
                background: 'linear-gradient(135deg, var(--ink) 0%, var(--blue) 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                letterSpacing: 0,
                marginBottom: '1.5rem',
              }}
            >
              Drive predictable growth with data-driven marketing.
            </h1>

            <p
              style={{
                fontSize: '1.125rem',
                lineHeight: 1.7,
                color: 'var(--gray-600)',
                maxWidth: '600px',
                marginBottom: '2rem',
              }}
            >
              We turn traffic into revenue by combining strategic insight with precise execution. From SEO to conversion optimization, every move is backed by data and designed for results.
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', marginBottom: '3rem' }}>
              <a
                href="#contact"
                onClick={(e) => { e.preventDefault(); scrollToSection('#contact'); }}
                className="btn-solid"
                style={{
                  padding: '0.875rem 2rem',
                  borderRadius: 'var(--radius-md)',
                  background: 'var(--blue)',
                  color: '#fff',
                  fontWeight: 600,
                  fontSize: '0.9375rem',
                  textDecoration: 'none',
                }}
              >
               Contact Now
              </a>
            </div>

          
          </div>

          <div className="hero-image-col">
            <div className="hero-svg-wrapper">
              <img
                src={HeroSvg}
                alt="Digital marketing animation"
                className="hero-animated-svg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
