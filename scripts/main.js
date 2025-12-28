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
  
  // Add active nav state (affects both desktop and mobile menus)
  const currentPath = window.location.pathname;
  const allLinks = document.querySelectorAll('a');
  allLinks.forEach(link => {
    if (link.href && link.href.includes(currentPath) && currentPath !== '/') {
      // Highlight if it's one of our primary nav links
      if (link.closest('.nav-links') || link.closest('.mobile-menu')) {
        link.style.color = 'var(--accent)';
      }
    }
  });

  // Mobile overlay toggle
  const menuToggle = document.querySelector('.menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');
  if (menuToggle && mobileMenu) {
    // Focus management and trap
    let previousFocus = null;
    let focusables = [];

    const closeMenu = () => {
      mobileMenu.classList.remove('open');
      menuToggle.setAttribute('aria-expanded', 'false');
      document.body.classList.remove('no-scroll');
      mobileMenu.setAttribute('aria-hidden', 'true');
      // Restore focus to toggle
      if (previousFocus) {
        previousFocus.focus();
      } else {
        menuToggle.focus();
      }
    };

    const openMenu = () => {
      mobileMenu.classList.add('open');
      menuToggle.setAttribute('aria-expanded', 'true');
      document.body.classList.add('no-scroll');
      mobileMenu.setAttribute('aria-hidden', 'false');
      // Save previous focus and move focus inside menu
      previousFocus = document.activeElement;
      focusables = Array.from(mobileMenu.querySelectorAll('a, button, [tabindex]:not([tabindex="-1"])'));
      if (focusables.length > 0) {
        focusables[0].focus();
      }
    };

    menuToggle.addEventListener('click', () => {
      if (mobileMenu.classList.contains('open')) {
        closeMenu();
      } else {
        openMenu();
      }
    });

    // Close when any link in the mobile menu is clicked
    mobileMenu.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => closeMenu());
    });

    // Backdrop click-to-close (click outside the panel)
    mobileMenu.addEventListener('click', (e) => {
      const panel = mobileMenu.querySelector('.panel');
      if (!panel) return;
      if (!e.target.closest('.panel')) {
        closeMenu();
      }
    });

    // Close on Escape
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        closeMenu();
      }
      // Trap Tab inside the mobile menu when open
      if (e.key === 'Tab' && mobileMenu.classList.contains('open')) {
        if (focusables.length === 0) return;
        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        if (e.shiftKey) {
          if (document.activeElement === first) {
            e.preventDefault();
            last.focus();
          }
        } else {
          if (document.activeElement === last) {
            e.preventDefault();
            first.focus();
          }
        }
      }
    });
  }
});
