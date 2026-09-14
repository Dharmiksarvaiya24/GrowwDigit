import heroArt from '../assets/hero.svg?raw';

export default function Hero() {
  return (
    <section className="hero" data-od-id="hero" id="hero">
      <div className="hero-bg" aria-hidden="true">
        <div className="blob-1" />
        <div className="blob-2" />
        <div className="grid-lines" />
      </div>

      <div className="container">
        <div className="hero-grid">
          <div className="hero-content">
            <h1>
              Your Trusted Partner for <em>End-to-End</em> Digital Growth.
            </h1>

            <p className="lead">
              We help businesses build a powerful online presence through high-performing websites, strategic social media marketing, and data-driven digital solutions that attract customers, generate quality leads, and drive sustainable growth.
            </p>

            <div className="hero-actions">
              <a
                href="https://wa.me/916353173022?text=I%20am%20interested%20in%20GrowwDigit%20Services"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-accent"
              >
                Contact Now <span className="arr"></span>
              </a>
              <a href="#services" className="btn btn-ghost">
                Explore Services
              </a>
            </div>
          </div>

          <div
            className="hero-visual-art"
            aria-hidden="true"
            dangerouslySetInnerHTML={{ __html: heroArt }}
          />
        </div>
      </div>
    </section>
  );
}
