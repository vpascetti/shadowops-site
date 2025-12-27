// ShadowOps - Main JavaScript

document.addEventListener('DOMContentLoaded', function() {
  // Simple form submission handler for contact form
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      // Allow form to submit via mailto or Formspree endpoint
      // No preventDefault - let browser handle submission
    });
  }

  // Smooth scroll for anchor links is handled by CSS scroll-behavior
  
  // Add active nav state
  const currentPath = window.location.pathname;
  const navLinks = document.querySelectorAll('nav a');
  navLinks.forEach(link => {
    if (link.href.includes(currentPath) && currentPath !== '/') {
      link.style.color = 'var(--accent)';
    }
  });
});
