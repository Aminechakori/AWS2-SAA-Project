// Navbar scroll effect
window.addEventListener('scroll', () => {
  const navbar = document.getElementById('navbar');
  if (window.scrollY > 20) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// Smooth active link highlight
const sections = document.querySelectorAll('section[id], header[id]');
const navLinks = document.querySelectorAll('#navbar ul li a');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 80;
    if (window.scrollY >= sectionTop) current = section.getAttribute('id');
  });
  navLinks.forEach(link => {
    link.style.color = '';
    if (link.getAttribute('href') === '#' + current) {
      link.style.color = '#0057FF';
    }
  });
});

// Form submit
const form = document.querySelector('.contact-form');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = form.querySelector('button[type="submit"]');
    btn.textContent = '✓ Message Sent!';
    btn.style.background = '#22c55e';
    setTimeout(() => {
      btn.textContent = 'Send Message';
      btn.style.background = '';
      form.reset();
    }, 3000);
  });
}
