import { useState, useEffect, useRef } from 'react';

const testimonials = [
  {
    quote: 'Groww Digit delivered a clean, modern website that perfectly matched our brand. The team was responsive, professional, and <em>easy to work with</em> throughout the project.',
    name: 'Neha Mehta',
    role: 'VP of Marketing, Quantix',
    initial: 'N',
  },
  {
    quote: 'Groww Digit helped us build a professional online presence from scratch. Our website gave customers more confidence in our business, and we started receiving <em>more inquiries</em> through digital channels.',
    name: 'Amit Takle',
    role: 'CEO, BrightPath',
    initial: 'A',
  },
  {
    quote: "We approached Groww Digit when we were starting from scratch. They helped us build our brand, create a professional website, and establish our digital presence. Today, we're reaching more customers online and receiving <em>consistent business inquiries.</em>",
    name: 'Mohit Sharma',
    role: 'Head of Growth, Verve',
    initial: 'M',
  },
];

const STAR_PATH =
  'M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z';

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const [shown, setShown] = useState(0);
  const [swapping, setSwapping] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const activeRef = useRef(0);

  const show = (i) => {
    const next = ((i % testimonials.length) + testimonials.length) % testimonials.length;
    if (next === activeRef.current) return;
    activeRef.current = next;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setActive(next);
      setShown(next);
      return;
    }
    setActive(next);
    setSwapping(true);
    setTimeout(() => {
      setShown(next);
      setSwapping(false);
    }, 240);
  };

  useEffect(() => {
    if (isPaused) return;
    const id = setInterval(() => show(activeRef.current + 1), 6000);
    return () => clearInterval(id);
  }, [isPaused]);

  const t = testimonials[shown];

  return (
    <section className="testimonial" data-od-id="testimonials" id="testimonials">
      <div className="container">
        <div
          className="testimonial-wrap reveal"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="quote-mark" aria-hidden="true">&ldquo;</div>

          <blockquote
            className={`t-quote ${swapping ? 'is-swapping' : ''}`}
            dangerouslySetInnerHTML={{ __html: t.quote }}
          />

          <div className={`t-meta ${swapping ? 'is-swapping' : ''}`}>
            <div className="stars" aria-label="5 out of 5 stars">
              {[...Array(5)].map((_, i) => (
                <svg key={i} viewBox="0 0 24 24" fill="currentColor">
                  <path d={STAR_PATH} />
                </svg>
              ))}
            </div>
            <span className="t-name">{t.name}</span>
            <span className="t-role">{t.role}</span>
          </div>

          <div className="t-avatars">
            {testimonials.map((tt, idx) => (
              <button
                key={tt.name}
                className={idx === active ? 'active' : ''}
                data-index={idx}
                onClick={() => show(idx)}
                aria-label={`Show review from ${tt.name}`}
              >
                {tt.initial}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
