import { useState, useEffect } from 'react';
import { scrollToSection } from '../utils/scrollTo';
import Logo from '../assets/GrowDigit.png';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', hash: '#hero' },
    { label: 'Services', hash: '#services' },
    { label: 'About', hash: '#why' },
    { label: 'Portfolio', hash: '#portfolio' },
    { label: 'Contact', hash: '#contact' },
  ];

  return (
    <nav
      className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        transition: 'background 0.3s ease-out, backdrop-filter 0.3s ease-out, box-shadow 0.3s ease-out',
        background: scrolled ? 'rgba(255,255,255,0.85)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(12px)' : 'none',
        boxShadow: scrolled ? '0 1px 3px rgba(0,0,0,0.08)' : 'none',
      }}
    >
      <div className="container navbar__inner">
        <a
          href="#hero"
          onClick={(e) => { e.preventDefault(); scrollToSection('#hero'); }}
          className="navbar__brand"
        >
          <img src={Logo} alt="GrowwDigit" className="navbar__logo" />
        </a>

        <div className="nav-desktop navbar__links">
          {navLinks.map((link) => (
            <a
              key={link.hash}
              href={link.hash}
              onClick={(e) => { e.preventDefault(); scrollToSection(link.hash); }}
              className="nav-link"
              style={{
                fontSize: '0.875rem',
                fontWeight: 500,
                color: 'var(--gray-700)',
                textDecoration: 'none',
              }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); scrollToSection('#contact'); }}
            className="btn-primary"
            style={{
              padding: '0.5rem 1.25rem',
              borderRadius: 'var(--radius-md)',
              background: 'var(--blue)',
              color: '#fff',
              fontSize: '0.875rem',
              fontWeight: 600,
              textDecoration: 'none',
            }}
          >
            Request Free Proposal
          </a>
        </div>

        <button
          className="nav-mobile-toggle"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            {mobileOpen ? (
              <><path d="M18 6L6 18M6 6l12 12" /></>
            ) : (
              <><path d="M3 12h18M3 6h18M3 18h18" /></>
            )}
          </svg>
        </button>
      </div>

      {mobileOpen && (
        <div
          className="mobile-overlay"
          onClick={() => setMobileOpen(false)}
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(0,0,0,0.3)',
            zIndex: 90,
          }}
        />
      )}

      <div
        className={`mobile-panel ${mobileOpen ? 'mobile-panel--open' : ''}`}
        style={{
          position: 'fixed',
          top: 0,
          right: mobileOpen ? 0 : '-100%',
          width: '280px',
          maxWidth: '80vw',
          height: '100vh',
          background: '#fff',
          zIndex: 95,
          padding: '5rem 1.5rem 2rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '1.5rem',
          transition: 'right 0.3s ease-out',
          boxShadow: mobileOpen ? '-4px 0 20px rgba(0,0,0,0.1)' : 'none'
        }}
      >
        {navLinks.map((link) => (
          <a
            key={link.hash}
            href={link.hash}
            className="mobile-panel__link"
            onClick={(e) => { e.preventDefault(); scrollToSection(link.hash); setMobileOpen(false); }}
            style={{
              fontSize: '1.125rem',
              fontWeight: 500,
              color: 'var(--ink)',
              textDecoration: 'none',
            }}
          >
            {link.label}
          </a>
        ))}
        <a
          href="#contact"
          onClick={(e) => { e.preventDefault(); scrollToSection('#contact'); setMobileOpen(false); }}
          className="btn-primary mobile-panel__cta"
          style={{
            marginTop: '1rem',
            padding: '0.75rem 1.5rem',
            borderRadius: 'var(--radius-md)',
            background: 'var(--blue)',
            color: '#fff',
            fontWeight: 600,
            textAlign: 'center',
            textDecoration: 'none',
          }}
        >
          Request Free Proposal
        </a>
      </div>
    </nav>
  );
}
