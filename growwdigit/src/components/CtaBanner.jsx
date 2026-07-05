export default function CtaBanner() {
  return (
    <section
      style={{
        position: 'relative',
        background: 'linear-gradient(135deg, var(--blue) 0%, #2563eb 50%, #1d4ed8 100%)',
        padding: '6rem 0',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          position: 'absolute',
          top: '-30%',
          right: '-10%',
          width: '400px',
          height: '400px',
          borderRadius: '50%',
          background: 'rgba(255,255,255,0.04)',
          pointerEvents: 'none',
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: '-20%',
          left: '-5%',
          width: '300px',
          height: '300px',
          borderRadius: '50%',
          background: 'rgba(255,255,255,0.03)',
          pointerEvents: 'none',
        }}
      />
      <div
        style={{
          position: 'absolute',
          top: '20%',
          left: '8%',
          width: '200px',
          height: '200px',
          borderRadius: '50%',
          border: '1px solid rgba(255,255,255,0.06)',
          pointerEvents: 'none',
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: '30%',
          right: '12%',
          width: '150px',
          height: '150px',
          borderRadius: '50%',
          border: '1px solid rgba(255,255,255,0.05)',
          pointerEvents: 'none',
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 2, textAlign: 'center' }}>
        <span
          style={{
            display: 'inline-block',
            fontSize: '0.8125rem',
            fontWeight: 600,
            color: 'rgba(255,255,255,0.5)',
            textTransform: 'uppercase',
            letterSpacing: '0.1em',
            marginBottom: '1.25rem',
          }}
        >
          Get Started Today
        </span>
        <h2
          style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)',
            fontWeight: 800,
            color: '#fff',
            letterSpacing: '-0.02em',
            maxWidth: '640px',
            margin: '0 auto 1rem',
            lineHeight: 1.2,
          }}
        >
          Ready to scale with a strategic partner?
        </h2>
        <p
          style={{
            fontSize: '1.0625rem',
            color: 'rgba(255,255,255,0.7)',
            maxWidth: '480px',
            margin: '0 auto 2.5rem',
            lineHeight: 1.75,
          }}
        >
          Let's talk about how we can help you achieve predictable, measurable growth.
        </p>
      </div>
    </section>
  );
}
