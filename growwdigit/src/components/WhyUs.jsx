import whyUsArt from '../assets/whyus.svg?raw';

const items = [
  {
    num: '01',
    title: 'Complete Digital Solutions',
    description: 'Websites, apps, branding, SEO, and digital marketing — all under one roof.',
  },
  {
    num: '02',
    title: 'Results-Driven Strategy',
    description: 'Smart solutions designed to grow your brand, leads, and sales.',
  },
  {
    num: '03',
    title: 'Creative & Modern Execution',
    description: 'Innovative designs and technology that help your business stand out.',
  },
  {
    num: '04',
    title: 'Transparent & Reliable',
    description: 'Clear communication, timely delivery, and dedicated support at every step.',
  },
];

export default function WhyUs() {
  return (
    <section className="section why-section" data-od-id="why" id="why">
      <div className="container">
        <div className="why-grid">
          <div
            className="why-art reveal-left"
            aria-hidden="true"
            dangerouslySetInnerHTML={{ __html: whyUsArt }}
          />

          <div className="why-copy reveal-right">
            <span className="index-num">02 — WHY GROWWDIGIT</span>
            <h2 style={{ margin: '16px 0 40px' }}>
              Transforming Businesses Through <em>Digital Growth.</em>
            </h2>
            <ul className="why-items">
              {items.map((item, i) => (
                <li key={item.num} className={`why-item reveal reveal-d${i + 1}`}>
                  <span className="wi-num">{item.num}</span>
                  <div className="wi-copy">
                    <strong>{item.title}</strong>
                    <span>{item.description}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
