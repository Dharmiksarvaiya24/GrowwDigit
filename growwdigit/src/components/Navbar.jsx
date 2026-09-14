import { useState, useEffect, useRef } from 'react';
import Logo from '../assets/GrowDigit_from_html.png';

const navLinks = [
  { label: 'Services', hash: '#services' },
  { label: 'About', hash: '#why' },
  { label: 'Work', hash: '#portfolio' },
  { label: 'Contact', hash: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [navHidden, setNavHidden] = useState(false);
  const lastScrollY = useRef(0);
  const ticking = useRef(false);

  useEffect(() => {
    function handleScroll() {
      if (ticking.current) return;
      ticking.current = true;
      requestAnimationFrame(() => {
        const currentY = window.scrollY;
        const isMobile = window.innerWidth <= 920;

        setScrolled(currentY > 20);

        if (isMobile && !mobileOpen) {
          if (currentY > lastScrollY.current && currentY > 80) {
            // scrolling DOWN — hide
            setNavHidden(true);
          } else {
            // scrolling UP — always show
            setNavHidden(false);
          }
        }

        lastScrollY.current = currentY;
        ticking.current = false;
      });
    }

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [mobileOpen]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') setMobileOpen(false);
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, []);

  return (
    <>
      <header className={`nav-wrap${navHidden ? ' nav-hidden' : ''}`} data-od-id="topnav">
        <div className="nav-inner">
          <div className={`nav-bar ${scrolled ? 'scrolled' : ''}`} id="navBar">
            <a href="#hero" className="nav-logo" aria-label="GrowwDigit Home">
              <img src={Logo} alt="GrowwDigit Logo" />
            </a>

            <nav className="nav-links" aria-label="Main Navigation">
              {navLinks.map((link) => (
                <a key={link.hash} href={link.hash}>
                  {link.label}
                </a>
              ))}
            </nav>

            <div className="nav-actions">
              <a
                href="https://wa.me/916353173022?text=I%20am%20interested%20in%20GrowwDigit%20Services"
                target="_blank"
                rel="noopener noreferrer"
                className="nav-cta"
              >
                Request Free Proposal <span className="arr"></span>
              </a>
              <button
                className={`nav-toggle ${mobileOpen ? 'open' : ''}`}
                id="navToggle"
                aria-label={mobileOpen ? 'Close Menu' : 'Open Menu'}
                aria-controls="mobileMenu"
                aria-expanded={mobileOpen}
                onClick={() => setMobileOpen(!mobileOpen)}
              >
                <span></span>
                <span></span>
                <span></span>
              </button>
            </div>
          </div>
        </div>
      </header>

      <div
        className={`mobile-menu ${mobileOpen ? 'open' : ''}`}
        id="mobileMenu"
        aria-hidden={!mobileOpen}
      >
        <button
          className="close-m"
          id="closeMenu"
          aria-label="Close"
          onClick={() => setMobileOpen(false)}
        >
          ×
        </button>
        {navLinks.map((link) => (
          <a key={link.hash} href={link.hash} onClick={() => setMobileOpen(false)}>
            {link.label}
          </a>
        ))}
        <a
          href="https://wa.me/916353173022?text=I%20am%20interested%20in%20GrowwDigit%20Services"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-accent mobile-cta"
          onClick={() => setMobileOpen(false)}
        >
          Request Free Proposal
        </a>
      </div>
    </>
  );
}
