import { useState } from 'react';
import { useReveal } from '../hooks/useReveal';

export default function Contact() {
  return (
    <section id="contact" style={{ padding: '6rem 0' }}>
      <div className="container">
        <div style={{ maxWidth: '600px', marginBottom: '3.5rem' }}>
          <span style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--blue)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
            Contact Us
          </span>
          <h2
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
              fontWeight: 800,
              background: 'linear-gradient(135deg, var(--ink) 0%, var(--blue) 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              letterSpacing: '-0.02em',
              marginTop: '0.75rem',
            }}
          >
            Let's start a conversation.
          </h2>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1.2fr',
            gap: '3rem',
            alignItems: 'start',
          }}
          className="contact-grid"
        >
          <ContactInfo />
          <ContactForm />
        </div>
      </div>
    </section>
  );
}

function ContactInfo() {
  const { ref, isInView } = useReveal();

  const details = [
    { label: 'Email', value: 'hello@growwdigit.com', href: 'mailto:hello@growwdigit.com' },
    { label: 'Phone', value: '+1 (555) 000-0000', href: 'tel:+15550000000' },
    { label: 'Office', value: '123 Marketing Ave, Suite 400, San Francisco, CA 94102' },
  ];

  return (
    <div
      ref={ref}
      className={`reveal reveal--left ${isInView ? 'reveal--in-view' : ''}`}
    >
      {details.map((d) => (
        <div key={d.label} style={{ marginBottom: '1.5rem' }}>
          <div style={{ fontSize: '0.8125rem', fontWeight: 600, color: 'var(--gray-400)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '0.25rem' }}>
            {d.label}
          </div>
          {d.href ? (
            <a href={d.href} style={{ fontSize: '1rem', color: 'var(--ink)', textDecoration: 'none' }}>
              {d.value}
            </a>
          ) : (
            <div style={{ fontSize: '1rem', color: 'var(--ink)' }}>{d.value}</div>
          )}
        </div>
      ))}
    </div>
  );
}

function ContactForm() {
  const { ref, isInView } = useReveal();
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  function validate() {
    const errs = {};
    if (!form.name.trim()) errs.name = 'Name is required';
    if (!form.email.trim()) errs.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(form.email)) errs.email = 'Invalid email';
    if (!form.message.trim()) errs.message = 'Message is required';
    return errs;
  }

  function handleSubmit(e) {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;
    // TODO: wire to real backend/email service (e.g. Formspree, EmailJS, or your own API)
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div
        ref={ref}
        className={`reveal reveal--up ${isInView ? 'reveal--in-view' : ''}`}
        style={{
          padding: '3rem 2rem',
          borderRadius: 'var(--radius-xl)',
          border: '1px solid var(--gray-100)',
          textAlign: 'center',
        }}
      >
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="var(--blue)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ margin: '0 auto 1rem' }}>
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
          <polyline points="22 4 12 14.01 9 11.01" />
        </svg>
        <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.25rem', fontWeight: 700, color: 'var(--blue)', marginBottom: '0.5rem' }}>
          Message sent!
        </h3>
        <p style={{ fontSize: '0.9375rem', color: 'var(--gray-600)' }}>
          Thanks for reaching out. We'll get back to you within 24 hours.
        </p>
      </div>
    );
  }

  return (
    <div
      ref={ref}
      className={`reveal reveal--up ${isInView ? 'reveal--in-view' : ''}`}
    >
      <form
        onSubmit={handleSubmit}
        style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}
      >
        <Field label="Full name" name="name" value={form.name} error={errors.name}
          onChange={(v) => setForm({ ...form, name: v })}
        />
        <Field label="Email" name="email" type="email" value={form.email} error={errors.email}
          onChange={(v) => setForm({ ...form, email: v })}
        />
        <div>
          <label
            htmlFor="contact-message"
            style={{
              display: 'block',
              fontSize: '0.8125rem',
              fontWeight: 600,
              color: 'var(--gray-600)',
              marginBottom: '0.375rem',
            }}
          >
            Message
          </label>
          <textarea
            id="contact-message"
            rows={5}
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            style={{
              width: '100%',
              padding: '0.75rem 1rem',
              fontSize: '0.9375rem',
              border: `1px solid ${errors.message ? 'var(--blue)' : 'var(--gray-200)'}`,
              borderRadius: 'var(--radius-md)',
              outline: 'none',
              resize: 'vertical',
              fontFamily: 'var(--font-body)',
              transition: 'border-color 0.2s',
            }}
          />
          {errors.message && <ErrorMsg msg={errors.message} />}
        </div>
        <button
          type="submit"
          style={{
            padding: '0.875rem 2rem',
            borderRadius: 'var(--radius-md)',
            background: 'var(--blue)',
            color: '#fff',
            fontWeight: 600,
            fontSize: '0.9375rem',
            border: 'none',
            cursor: 'pointer',
            transition: 'opacity 0.2s',
            alignSelf: 'flex-start',
          }}
        >
          Send Message
        </button>
      </form>
    </div>
  );
}

function Field({ label, name, type = 'text', value, error, onChange }) {
  return (
    <div>
      <label
        htmlFor={`contact-${name}`}
        style={{
          display: 'block',
          fontSize: '0.8125rem',
          fontWeight: 600,
          color: 'var(--gray-600)',
          marginBottom: '0.375rem',
        }}
      >
        {label}
      </label>
      <input
        id={`contact-${name}`}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        style={{
          width: '100%',
          padding: '0.75rem 1rem',
          fontSize: '0.9375rem',
          border: `1px solid ${error ? 'var(--blue)' : 'var(--gray-200)'}`,
          borderRadius: 'var(--radius-md)',
          outline: 'none',
          fontFamily: 'var(--font-body)',
          transition: 'border-color 0.2s',
        }}
      />
      {error && <ErrorMsg msg={error} />}
    </div>
  );
}

function ErrorMsg({ msg }) {
  return <div style={{ fontSize: '0.8125rem', color: 'var(--blue)', marginTop: '0.25rem' }}>{msg}</div>;
}
