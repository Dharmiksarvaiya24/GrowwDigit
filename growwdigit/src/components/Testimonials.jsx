import { useState, useEffect, useCallback, useRef } from 'react';

const testimonials = [
  {
    quote: 'Groww Digit delivered a clean, modern website that perfectly matched our brand. The team was responsive, professional, and easy to work with throughout the project.',
    name: 'Neha Mehta',
    role: 'VP of Marketing, Quantix',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80&auto=format&fit=crop',
  },
  {
    quote: 'Groww Digit helped us build a professional online presence from scratch. Our website gave customers more confidence in our business, and we started receiving more inquiries through digital channels.',
    name: 'Amit Takle',
    role: 'CEO, BrightPath',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80&auto=format&fit=crop',
  },
  {
    quote: 'We approached Groww Digit when we were starting from scratch. They helped us build our brand, create a professional website, and establish our digital presence. Today, were reaching more customers online and receiving consistent business inquiries',
    name: 'Mohit Sharma',
    role: 'Head of Growth, Verve',
    avatar: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=100&q=80&auto=format&fit=crop',
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef(null);

  const next = useCallback(() => {
    setActive((prev) => (prev + 1) % testimonials.length);
  }, []);

  const prev = useCallback(() => {
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, []);

  useEffect(() => {
    if (!isPaused) {
      intervalRef.current = setInterval(next, 5000);
      return () => clearInterval(intervalRef.current);
    }
  }, [next, isPaused]);

  return (
    <section id="testimonials" style={{
      padding: '6rem 0',
      position: 'relative',
      overflow: 'hidden',
    }}>
      <div style={{
        position: 'absolute',
        top: '-20%',
        right: '-10%',
        width: '400px',
        height: '400px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, var(--blue-50) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute',
        bottom: '-20%',
        left: '-10%',
        width: '350px',
        height: '350px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, var(--blue-50) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
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
            Testimonials
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
            What our clients say.
          </h2>
        </div>

        <div
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          style={{
            maxWidth: '700px',
            margin: '0 auto',
            background: '#fff',
            borderRadius: 'var(--radius-2xl)',
            padding: 'clamp(2.5rem, 4vw, 3.5rem)',
            boxShadow: '0 1px 3px rgba(0,0,0,0.04), 0 8px 32px rgba(0,0,0,0.06)',
            border: '1px solid var(--gray-100)',
            position: 'relative',
            textAlign: 'center',
          }}
        >
          <div style={{ display: 'flex', gap: '0.25rem', justifyContent: 'center', marginBottom: '1.5rem' }}>
            {[...Array(5)].map((_, i) => (
              <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="#fbbf24" stroke="#fbbf24" strokeWidth="1.5">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
              </svg>
            ))}
          </div>

          <div style={{ position: 'relative', minHeight: '120px' }}>
            {testimonials.map((t, i) => (
              <div
                key={i}
                style={{
                  opacity: i === active ? 1 : 0,
                  transform: i === active ? 'translateY(0) scale(1)' : 'translateY(12px) scale(0.98)',
                  transition: 'opacity 0.5s ease, transform 0.5s ease',
                  position: i === active ? 'relative' : 'absolute',
                  inset: 0,
                  pointerEvents: i === active ? 'auto' : 'none',
                }}
              >
                <p style={{
                  fontSize: 'clamp(1.05rem, 2vw, 1.2rem)',
                  lineHeight: 1.8,
                  color: 'var(--gray-600)',
                  fontWeight: 450,
                  fontStyle: 'italic',
                  letterSpacing: '-0.01em',
                }}>
                  "{t.quote}"
                </p>
              </div>
            ))}
          </div>

          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.75rem',
            marginTop: '2rem',
            paddingTop: '2rem',
            borderTop: '1px solid var(--gray-100)',
          }}>
            <div
              style={{
                width: 40,
                height: 40,
                borderRadius: '50%',
                overflow: 'hidden',
                flexShrink: 0,
              }}
            >
              <img
                src={testimonials[active].avatar}
                alt={testimonials[active].name}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
            <div style={{ textAlign: 'left' }}>
              <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 600, color: 'var(--ink)', fontSize: '0.9375rem' }}>
                {testimonials[active].name}
              </div>
              <div style={{ fontSize: '0.8125rem', color: 'var(--gray-400)' }}>
                {testimonials[active].role}
              </div>
            </div>
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1.5rem', marginTop: '2.5rem' }}>
          <button onClick={prev} aria-label="Previous testimonial" style={{
            width: 36, height: 36, borderRadius: '50%', border: '1px solid var(--gray-200)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            background: '#fff', cursor: 'pointer',
            transition: 'all 0.2s',
            opacity: 0.6,
          }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--gray-600)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>

          <div style={{ display: 'flex', gap: '0.5rem' }}>
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                aria-label={`Go to testimonial ${i + 1}`}
                style={{
                  width: i === active ? 28 : 6,
                  height: 6,
                  borderRadius: '3px',
                  border: 'none',
                  background: i === active ? 'var(--blue)' : 'var(--gray-200)',
                  padding: 0,
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                }}
              />
            ))}
          </div>

          <button onClick={next} aria-label="Next testimonial" style={{
            width: 36, height: 36, borderRadius: '50%', border: '1px solid var(--gray-200)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            background: '#fff', cursor: 'pointer',
            transition: 'all 0.2s',
            opacity: 0.6,
          }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--gray-600)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
