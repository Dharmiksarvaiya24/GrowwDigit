import developerImg from '../assets/developer.png';
import socialMediaImg from '../assets/social-media.png';
import performanceImg from '../assets/performance.png';
import folderImg from '../assets/folder.png';
import appImg from '../assets/app.png';
import seoImg from '../assets/seo.png';

const services = [
  {
    num: '01',
    title: 'Website Development',
    description: 'Build fast, responsive, and SEO-friendly websites that deliver exceptional user experiences and turn visitors into loyal customers.',
    image: developerImg,
  },
  {
    num: '02',
    title: 'Social Media Marketing',
    description: 'Grow your brand across Instagram, Facebook, LinkedIn, and more with strategic content, engaging campaigns, and data-driven advertising.',
    image: socialMediaImg,
  },
  {
    num: '03',
    title: 'Branding & Graphic Design',
    description: 'Build a powerful brand identity with impactful logos, creative designs, and visuals that make your business unforgettable.',
    image: performanceImg,
  },
  {
    num: '04',
    title: 'WhatsApp & Email Marketing',
    description: 'Reach your audience instantly with personalized WhatsApp campaigns and high-converting email marketing that boosts engagement and sales.',
    image: folderImg,
  },
  {
    num: '05',
    title: 'Application Development',
    description: 'Develop scalable web and mobile applications with modern technologies, intuitive interfaces, and powerful performance tailored to your business.',
    image: appImg,
  },
  {
    num: '06',
    title: 'Search Engine Optimization',
    description: 'Rank higher on Google, drive consistent organic traffic, and generate quality leads with proven SEO strategies.',
    image: seoImg,
  },
];

export default function Services() {
  return (
    <section className="section services" data-od-id="services" id="services">
      <div className="container">
        <div className="section-head section-head--stacked">
          <div className="reveal">
            <span className="index-num">01 — WHAT WE DO</span>
            <h2>
              Digital Solutions for <em>Business Growth.</em>
            </h2>
            <p className="section-subheading">
              From websites to campaigns to full brand systems — every service engineered to do one job grow your business.
            </p>
          </div>
        </div>

        <div className="services-grid">
          {services.map((s, i) => (
            <div key={s.num} className={`service-row reveal-flip reveal-flip-d${i + 1}`}>
              <span className="sr-num">{s.num}</span>
              <div className="sr-icon">
                <img src={s.image} alt={s.title} className="sr-icon-img" />
              </div>
              <h3>{s.title}</h3>
              <p>{s.description}</p>
              <a href="#contact" className="go-link">
                Learn more <span>→</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
