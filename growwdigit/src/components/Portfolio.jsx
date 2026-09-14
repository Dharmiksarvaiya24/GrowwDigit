import gymImg from '../assets/gym-it.png';
import rangkalaImg from '../assets/rangkala.jpg';
import tridentImg from '../assets/trident.png';
import bricksImg from '../assets/khodiyar-bricks.png';
import beautyImg from '../assets/bie-beauty.png';

const projects = [
  {
    id: 'gym',
    name: 'GYM IT Fitness Club',
    category: 'Fitness & Wellness',
    tag: 'Web Dev · Meta Ads',
    image: gymImg,
    description:
      'High-energy membership portal and conversion platform with dynamic workout schedules, trainer highlights, and automated trial pass conversions.',
    metric: '+240% Member Signups',
    link: 'https://gymitfitness.com/',
  },
  {
    id: 'rangkala',
    name: 'RangKala Art & Decor',
    category: 'Art, Decor & Lifestyle',
    tag: 'Brand Identity · E-Commerce',
    image: rangkalaImg,
    description:
      'Aesthetic digital storefront and brand identity celebrating traditional Indian artistic creations, handpainted decor, and curated heritage craft.',
    metric: '5,000+ Pre-launch VIPs',
    link: 'https://www.rangkala.shop/',
  },
  {
    id: 'trident',
    name: 'Trident Jewellery Design',
    category: 'Luxury Jewelry & CAD',
    tag: 'Web Design · 3D Showcase',
    image: tridentImg,
    description:
      'Immersive luxury catalog portal presenting precision 3D CAD jewelry designs, photorealistic rendering, bespoke manufacturing, and global collections.',
    metric: '+310% Global Inquiries',
    link: 'https://www.tridentdesigning.in/',
  },
  {
    id: 'bricks',
    name: 'Khodiyar Bricks',
    category: 'Manufacturing & B2B',
    tag: 'Web Dev · Local SEO',
    image: bricksImg,
    description:
      'Modern digital identity and online showroom connecting commercial contractors, developers, and architects directly with certified masonry supplies.',
    metric: '+180% Inquiries Growth',
    link: 'https://khodiyarbricks.in/',
  },
  {
    id: 'beauty',
    name: 'BiE — Beauty In Everything',
    category: 'Luxury Skincare & D2C',
    tag: 'D2C Store · Performance Marketing',
    image: beautyImg,
    description:
      'Award-winning clean skincare D2C e-commerce platform with regimen recommendation funnels, seamless checkout, and high-retention customer journeys.',
    metric: '+275% Repeat Purchases',
    link: 'https://beautybybie.com/',
  },
];

export default function Portfolio() {
  return (
    <section className="section portfolio" data-od-id="portfolio" id="portfolio">
      <div className="container">
        <div className="section-head section-head--stacked">
          <div className="reveal">
            <span className="index-num">03 — OUR WORK</span>
            <h2>
              Results We're <em>Proud Of.</em>
            </h2>
            <p className="section-subheading">
              Proven growth across fitness, manufacturing, luxury retail, and D2C brands — real metrics that move bottom lines.
            </p>
          </div>
        </div>

        <div className="portfolio-showcase-grid">
          {projects.map((p, i) => (
            <article key={p.id} className={`project-card ${i % 2 === 0 ? 'reveal-left' : 'reveal-right'} reveal-d${(i % 3) + 1}`}>
              <a
                href={p.link}
                target="_blank"
                rel="noopener noreferrer"
                className="project-image-wrap"
                aria-label={`Visit ${p.name} website`}
              >
                <img
                  src={p.image}
                  alt={`${p.name} - Project Showcase`}
                  className="project-image"
                  loading="lazy"
                />
                <span className="project-category-badge">{p.category}</span>
                <span className="project-visit-overlay">
                  Visit Live Site
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M7 17L17 7M17 7H7M17 7V17" />
                  </svg>
                </span>
              </a>

              <div className="project-card-body">
                <div className="project-meta-row">
                  <span className="project-tag">{p.tag}</span>
                </div>

                <h3 className="project-title">
                  <a href={p.link} target="_blank" rel="noopener noreferrer">
                    {p.name}
                  </a>
                </h3>
                <p className="project-desc">{p.description}</p>

                <div className="project-card-footer">
                  <a href="#contact" className="project-cta-link">
                    Start Similar <span className="arr">→</span>
                  </a>
                </div>
              </div>
            </article>
          ))}

          {/* 6th Card: Interactive Call-to-Action */}
          <div className="project-card project-cta-card reveal">
            <div className="project-cta-card-content">
              <div className="p-cta-icon-badge">+</div>
              <span className="project-tag">Your Industry</span>
              <h3 className="project-title">Your Business Next</h3>
              <p className="project-desc">
                Whatever your sector — from local services to international e-commerce — let's build a strategy that delivers measurable growth.
              </p>
              <div className="project-metric-pill p-metric-highlight">Ready to Scale?</div>
              <a href="#contact" className="btn btn-accent project-launch-btn">
                Start a Project <span className="arr">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
