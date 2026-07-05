export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={{ background: 'var(--ink)', color: 'rgba(255,255,255,0.7)', position: 'relative' }}>
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: '4px',
        background: 'linear-gradient(90deg, var(--blue), #818cf8, var(--blue))',
        backgroundSize: '200% 100%',
        animation: 'gradientMove 3s linear infinite',
      }} />

      <div className="container" style={{ paddingTop: '4rem' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1.6fr 1fr 1fr 1.2fr',
            gap: '3rem',
            paddingBottom: '3rem',
          }}
          className="footer-grid"
        >
          <div>
            <div style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '1.5rem',
              fontWeight: 800,
              background: 'linear-gradient(135deg, #fff 0%, var(--blue) 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              marginBottom: '1rem',
            }}>
              GrowwDigit
            </div>
            <p style={{ fontSize: '0.875rem', lineHeight: 1.8, maxWidth: '300px', color: 'rgba(255,255,255,0.55)' }}>
              From stunning websites to result-driven social media marketing. We build brands, generate leads, and boost online visibility. Your trusted partner for digital growth.
            </p>
            <div style={{ display: 'flex', gap: '0.75rem', marginTop: '1.5rem' }}>
              <a href="https://wa.me/916353173022" target="_blank" rel="noopener noreferrer"
                className="social-icon"
                style={{
                  width: 38, height: 38, borderRadius: '50%',
                  border: '1px solid rgba(255,255,255,0.12)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: 'rgba(255,255,255,0.5)', textDecoration: 'none',
                  transition: 'all 0.2s',
                }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              </a>
              <a href="https://www.linkedin.com/company/groww-digit/" className="social-icon"
                style={{
                  width: 38, height: 38, borderRadius: '50%',
                  border: '1px solid rgba(255,255,255,0.12)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: 'rgba(255,255,255,0.5)', textDecoration: 'none',
                  transition: 'all 0.2s',
                }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>
              <a href="https://www.instagram.com/groww.digit" className="social-icon"
                style={{
                  width: 38, height: 38, borderRadius: '50%',
                  border: '1px solid rgba(255,255,255,0.12)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: 'rgba(255,255,255,0.5)', textDecoration: 'none',
                  transition: 'all 0.2s',
                }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
              <a href="https://www.facebook.com/people/Growwdigit/61591090838356/?mibextid=wwXIfr&rdid=yNSaE2MeRoBn1QX7&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1Gmbkc7Ntx%2F%3Fmibextid%3DwwXIfr" className="social-icon"
                style={{
                  width: 38, height: 38, borderRadius: '50%',
                  border: '1px solid rgba(255,255,255,0.12)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: 'rgba(255,255,255,0.5)', textDecoration: 'none',
                  transition: 'all 0.2s',
                }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
            </div>
          </div>

          <div>
            <h4 style={{ fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: '0.9375rem', color: '#fff', marginBottom: '1.25rem', letterSpacing: '0.03em' }}>
              Quick Links
            </h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {['Home', 'Services', 'About', 'Portfolio', 'Contact'].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase() === 'home' ? 'hero' : link.toLowerCase() === 'about' ? 'why' : link.toLowerCase()}`}
                    className="footer-link"
                    style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.5)', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.375rem' }}
                  >
                    <svg width="4" height="4" viewBox="0 0 4 4" fill="var(--blue)" style={{ opacity: 0.5 }}>
                      <circle cx="2" cy="2" r="2" />
                    </svg>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 style={{ fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: '0.9375rem', color: '#fff', marginBottom: '1.25rem', letterSpacing: '0.03em' }}>
              Services
            </h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {['Website Development', 'Social Media Marketing', 'Branding & Graphic Design', 'WhatsApp & Email Marketing', 'Application Development', 'Search Engine Optimization'].map((s) => (
                <li key={s}>
                  <span style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.4)', display: 'inline-flex', alignItems: 'center', gap: '0.375rem', cursor: 'default' }}>
                    <svg width="4" height="4" viewBox="0 0 4 4" fill="var(--blue)" style={{ opacity: 0.5 }}>
                      <circle cx="2" cy="2" r="2" />
                    </svg>
                    {s}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 style={{ fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: '0.9375rem', color: '#fff', marginBottom: '1.25rem', letterSpacing: '0.03em' }}>
              Get in Touch
            </h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.625rem', fontSize: '0.875rem', color: 'rgba(255,255,255,0.5)' }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--blue)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '0.125rem' }}>
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                growwdigit@gmail.com
              </li>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.625rem', fontSize: '0.875rem', color: 'rgba(255,255,255,0.5)' }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--blue)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '0.125rem' }}>
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
                </svg>
                +91 6353173022
              </li>
              <li>
                <a href="https://wa.me/916353173022?text=I%20am%20interested%20in%20GrowwDigit%20Services"
                  target="_blank" rel="noopener noreferrer"
                  style={{
                    display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                    fontSize: '0.875rem', color: '#fff', textDecoration: 'none',
                    background: 'var(--blue)', padding: '0.5rem 1rem',
                    borderRadius: 'var(--radius-md)', fontWeight: 600,
                    marginTop: '0.5rem', transition: 'opacity 0.2s',
                  }}
                  className="footer-link"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="#fff"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                  WhatsApp Us
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div
          style={{
            borderTop: '1px solid rgba(255,255,255,0.06)',
            padding: '1.5rem 0',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '1rem',
            fontSize: '0.8125rem',
          }}
          className="footer-bottom"
        >
          <span style={{ color: 'rgba(255,255,255,0.35)' }}>&copy; {currentYear} GrowwDigit. All rights reserved.</span>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
            <span style={{ color: 'rgba(255,255,255,0.35)', fontSize: '0.8125rem' }}>Privacy Policy</span>
            <span style={{ color: 'rgba(255,255,255,0.35)', fontSize: '0.8125rem' }}>Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
