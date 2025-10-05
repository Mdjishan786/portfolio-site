// ===== SMOOTH SCROLL =====
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// ===== HIGHLIGHT ACTIVE NAV LINK =====
const sections = document.querySelectorAll('.section, .hero');
const navLinks = document.querySelectorAll('.navbar a');

window.addEventListener('scroll', () => {
  let current = 'home'; // Default to home

  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    // Check if the current scroll position is past the start of the section
    if (window.scrollY >= sectionTop - 100) { 
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    // Check if the link's href matches the current section's ID
    if (link.getAttribute('href') === '#' + current) {
      link.classList.add('active');
    }
  });
});
