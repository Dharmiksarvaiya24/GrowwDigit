export function scrollToSection(hash) {
  const target = document.querySelector(hash);
  if (target) {
    target.scrollIntoView({ behavior: 'smooth' });
  }
}
