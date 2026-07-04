import HeroSvg from '../assets/hero.svg';
import BackgroundSvg from '../assets/Background.mp4';
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
            backgroundSize: '200% 200%',
            animation: 'gradientMove 12s ease infinite',
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
                fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
                fontWeight: 800,
                lineHeight: 1.1,
                background: 'linear-gradient(135deg, var(--ink) 0%, var(--blue) 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                backgroundSize: '200% 200%',
                animation: 'gradientMove 8s ease infinite',
                letterSpacing: 0,
                marginBottom: '2.5rem',
              }}
            >
              Your Trusted Partner for End-to-End Digital Growth.
            </h1>

            <p
              style={{
                fontSize: '1rem',
                lineHeight: 1.7,
                color: 'var(--gray-600)',
                maxWidth: '600px',
                marginBottom: '2rem',
              }}
            >
              We help businesses build a powerful online presence through high-performing websites, strategic social media marketing, and data-driven digital solutions that attract more customers, generate quality leads, and drive sustainable business growth.
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
                  fontSize: '0.8375rem',
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
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          width: '100%',
          height: '30px',
          background: 'var(--blue)',
          zIndex: 3,
        }}
      />
    </section>
  );
}
