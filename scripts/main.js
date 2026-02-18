// ShadowOps - Main JavaScript

document.addEventListener('DOMContentLoaded', function() {
  const fallbackLogoDataUri = 'data:image/svg+xml;utf8,' + encodeURIComponent(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 280 80" role="img" aria-label="ShadowOps">
      <defs>
        <linearGradient id="g" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stop-color="#14D2F8"/>
          <stop offset="100%" stop-color="#0CA6DE"/>
        </linearGradient>
      </defs>
      <rect width="280" height="80" rx="12" fill="#0F141D" stroke="#1B2736"/>
      <path d="M36 16l16 8v16c0 11-7 21-16 24-9-3-16-13-16-24V24l16-8z" fill="url(#g)"/>
      <path d="M41 30c-6-3-12 2-12 8 0 4 2 7 6 9l6 3c2 1 3 3 3 5 0 3-3 6-7 6-3 0-6-1-8-3l-3 5c3 3 7 4 12 4 8 0 14-5 14-12 0-5-3-8-8-11l-6-3c-2-1-3-2-3-4 0-3 2-5 6-5 2 0 4 1 6 2l4-4z" fill="#090B10"/>
      <text x="72" y="49" fill="#F3F8F8" font-family="Inter, Arial, sans-serif" font-size="30" font-weight="700">SHADOWOPS</text>
    </svg>
  `);

  const fallbackMarkDataUri = 'data:image/svg+xml;utf8,' + encodeURIComponent(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 72 72" role="img" aria-label="ShadowOps mark">
      <defs>
        <linearGradient id="g" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stop-color="#14D2F8"/>
          <stop offset="100%" stop-color="#0CA6DE"/>
        </linearGradient>
      </defs>
      <rect width="72" height="72" rx="12" fill="#0F141D" stroke="#1B2736"/>
      <path d="M36 10l18 8v16c0 13-8 24-18 28-10-4-18-15-18-28V18l18-8z" fill="url(#g)"/>
      <path d="M42 27c-7-3-13 2-13 8 0 4 2 7 6 9l6 3c2 1 4 3 4 5 0 3-3 6-8 6-3 0-6-1-8-3l-3 5c3 3 7 4 12 4 9 0 15-5 15-12 0-5-3-9-9-11l-6-3c-2-1-3-2-3-4 0-3 2-5 6-5 2 0 4 1 6 2l3-4z" fill="#090B10"/>
    </svg>
  `);

  document.querySelectorAll('img').forEach((image) => {
    const src = image.getAttribute('src') || '';
    if (!src.includes('shadowops-logo') && !src.includes('shadowops-mark')) return;

    const fallbackSrc = src.includes('shadowops-mark') ? fallbackMarkDataUri : fallbackLogoDataUri;
    const applyFallback = () => {
      if (image.dataset.fallbackApplied === 'true') return;
      image.dataset.fallbackApplied = 'true';
      image.src = fallbackSrc;
      image.classList.add('img-fallback-applied');
    };

    if (image.complete && image.naturalWidth === 0) {
      applyFallback();
    } else {
      image.addEventListener('error', applyFallback, { once: true });
    }
  });

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
    let linkPath = '';
    try {
      linkPath = new URL(link.href, window.location.origin).pathname;
    } catch {
      linkPath = '';
    }

    if (linkPath && linkPath === currentPath && currentPath !== '/') {
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
