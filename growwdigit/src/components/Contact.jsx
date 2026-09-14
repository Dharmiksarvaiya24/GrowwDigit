export default function Contact() {
  function handleSubmit(e) {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const message = e.target.message.value;
    const subject = encodeURIComponent('New inquiry from ' + name);
    const body = encodeURIComponent('Name: ' + name + '\nEmail: ' + email + '\n\n' + message);
    window.location.href = 'mailto:growwdigit@gmail.com?subject=' + subject + '&body=' + body;
    document.getElementById('formFields').style.display = 'none';
    document.getElementById('formSuccess').style.display = 'block';
    return false;
  }

  return (
    <section className="section" data-od-id="contact" id="contact">
      <div className="container">
        <div className="section-head section-head--stacked">
          <div className="reveal">
            <span className="index-num">04 — CONTACT</span>
            <h2>
              Let's Start a <em>Conversation.</em>
            </h2>
            <p className="section-subheading">
              Tell us where you want to grow. We'll bring the strategy, the creativity, and the execution.
            </p>
          </div>
        </div>

        <div className="contact-layout">
          <div className="contact-side reveal-left">
            <div className="c-block">
              <div className="c-label">Email</div>
              <a href="mailto:growwdigit@gmail.com" className="c-value">growwdigit@gmail.com</a>
            </div>
            <div className="c-block">
              <div className="c-label">Phone · WhatsApp</div>
              <a href="tel:+916353173022" className="c-value">+91 6353173022</a>
            </div>
            <div className="c-block">
              <div className="c-label">Office</div>
              <a href="#" className="c-value" style={{ fontSize: '15px', fontWeight: 400, lineHeight: 1.6 }}>3rd Cross Road MSPP Layout<br />Soldevanahalli, Bangalore<br />Karnataka 560090</a>
            </div>
          </div>

          <form className="contact-form-card reveal-right" id="contactForm" onSubmit={handleSubmit}>
            <h3>Send us a message</h3>
            <div className="stack" id="formFields">
              <div className="field">
                <label htmlFor="name">Full Name</label>
                <input className="input" type="text" id="name" name="name" placeholder="Your name" required />
              </div>
              <div className="field">
                <label htmlFor="email">Email</label>
                <input className="input" type="email" id="email" name="email" placeholder="you@company.com" required />
              </div>
              <div className="field">
                <label htmlFor="message">Message</label>
                <textarea className="textarea" id="message" name="message" placeholder="Tell us about your project..." required />
              </div>
              <button type="submit" className="btn btn-accent" style={{ width: '100%', justifyContent: 'center' }}>Send Message <span className="arr">→</span></button>
            </div>
            <div className="form-success" id="formSuccess">
              <div className="fs-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12l5 5L20 7"></path></svg>
              </div>
              <h3>Message sent!</h3>
              <p>Thanks for reaching out. We'll get back to you within 24 hours.</p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
