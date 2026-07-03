import { useState, useEffect, useCallback } from 'react';

const testimonials = [
  {
    quote: 'GrowwDigit transformed our digital presence. Within three months we saw a 40% increase in organic traffic and our cost per lead dropped by 25%. They\'re not just an agency — they\'re a true growth partner.',
    name: 'Sarah Chen',
    role: 'VP of Marketing, Quantix',
    initials: 'SC',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80&auto=format&fit=crop',
  },
  {
    quote: 'The level of strategic thinking and execution is unmatched. They took the time to understand our business deeply and built campaigns that actually moved the needle. Highly recommend.',
    name: 'Marcus Johnson',
    role: 'CEO, BrightPath',
    initials: 'MJ',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80&auto=format&fit=crop',
  },
  {
    quote: 'We\'ve worked with several agencies before, but none matched the transparency and results we got from GrowwDigit. Their reporting is clear and their team is incredibly responsive.',
    name: 'Priya Patel',
    role: 'Head of Growth, Verve',
    initials: 'PP',
    avatar: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=100&q=80&auto=format&fit=crop',
  },
];

function StarRating() {
  return (
    <div style={{ display: 'flex', gap: '0.25rem', justifyContent: 'center', marginBottom: '1.5rem' }}>
      {[...Array(5)].map((_, i) => (
        <svg key={i} width="18" height="18" viewBox="0 0 24 24" fill="var(--blue)" stroke="var(--blue)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  const [active, setActive] = useState(0);

  const next = useCallback(() => {
    setActive((prev) => (prev + 1) % testimonials.length);
  }, []);

  const prev = useCallback(() => {
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section id="testimonials" style={{
      padding: '6rem 0',
      background: 'linear-gradient(135deg, var(--gray-50) 0%, #f0f4ff 50%, var(--gray-50) 100%)',
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

        <div style={{
          maxWidth: '750px',
          margin: '0 auto',
          background: '#fff',
          borderRadius: 'var(--radius-2xl)',
          padding: 'clamp(2rem, 4vw, 3.5rem)',
          boxShadow: '0 4px 24px rgba(0,0,0,0.04), 0 1px 4px rgba(0,0,0,0.02)',
          border: '1px solid var(--gray-100)',
          position: 'relative',
        }}>
          <div style={{
            position: 'absolute',
            top: '-1.5rem',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '3rem',
            height: '3rem',
            borderRadius: '50%',
            background: 'var(--blue)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 4px 12px rgba(67,123,245,0.25)',
          }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="#fff">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151C7.546 6.068 5.983 8.789 5.983 11H10v10H0z" />
            </svg>
          </div>

          <StarRating />

          <div style={{ position: 'relative', minHeight: '100px' }}>
            {testimonials.map((t, i) => (
              <div
                key={i}
                style={{
                  opacity: i === active ? 1 : 0,
                  transform: i === active ? 'translateY(0)' : 'translateY(10px)',
                  transition: 'opacity 0.5s ease, transform 0.5s ease',
                  position: i === active ? 'relative' : 'absolute',
                  inset: 0,
                  pointerEvents: i === active ? 'auto' : 'none',
                }}
              >
                <p style={{
                  fontSize: 'clamp(1rem, 2vw, 1.125rem)',
                  lineHeight: 1.8,
                  color: 'var(--gray-700)',
                  textAlign: 'center',
                  fontWeight: 450,
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
            gap: '1rem',
            marginTop: '2.5rem',
            paddingTop: '2rem',
            borderTop: '1px solid var(--gray-100)',
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
            }}>
              <div
                style={{
                  width: 48,
                  height: 48,
                  borderRadius: '50%',
                  overflow: 'hidden',
                  flexShrink: 0,
                  border: '2px solid var(--blue-100)',
                }}
              >
                <img
                  src={testimonials[active].avatar}
                  alt={testimonials[active].name}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div
                  style={{
                    display: 'none',
                    width: '100%',
                    height: '100%',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#fff',
                    fontSize: '0.875rem',
                    fontWeight: 700,
                    background: 'var(--blue)',
                  }}
                >
                  {testimonials[active].initials}
                </div>
              </div>
              <div style={{ textAlign: 'left' }}>
                <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 600, color: 'var(--ink)', fontSize: '1rem' }}>
                  {testimonials[active].name}
                </div>
                <div style={{ fontSize: '0.8125rem', color: 'var(--gray-500)' }}>
                  {testimonials[active].role}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1.25rem', marginTop: '2.5rem' }}>
          <button onClick={prev} aria-label="Previous testimonial" className="testimonial-arrow" style={{
            width: 44, height: 44, borderRadius: '50%', border: '1px solid var(--gray-200)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            background: '#fff', transition: 'all 0.2s',
            boxShadow: '0 1px 3px rgba(0,0,0,0.04)',
          }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--gray-600)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>

          <div style={{ display: 'flex', gap: '0.5rem' }}>
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                aria-label={`Go to testimonial ${i + 1}`}
                className={`testimonial-dot ${i === active ? 'active' : ''}`}
                style={{
                  width: i === active ? 28 : 8,
                  height: 8,
                  borderRadius: '4px',
                  border: 'none',
                  background: i === active ? 'var(--blue)' : 'var(--gray-200)',
                  padding: 0,
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                }}
              />
            ))}
          </div>

          <button onClick={next} aria-label="Next testimonial" className="testimonial-arrow" style={{
            width: 44, height: 44, borderRadius: '50%', border: '1px solid var(--gray-200)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            background: '#fff', transition: 'all 0.2s',
            boxShadow: '0 1px 3px rgba(0,0,0,0.04)',
          }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--gray-600)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
