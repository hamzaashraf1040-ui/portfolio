/**
 * HAMZA ASHRAF — PORTFOLIO INTERACTIONS
 * Minimalist, tactile, and performant Vanilla JavaScript
 */

document.addEventListener('DOMContentLoaded', () => {

  // 1. Live Egypt Clock (UTC+2 / EET)
  const clockElement = document.getElementById('live-clock');
  function updateEgyptClock() {
    if (!clockElement) return;
    try {
      const now = new Date();
      // Egypt is UTC+2 (or UTC+3 during DST if active)
      const options = {
        timeZone: 'Africa/Cairo',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
      };
      const timeString = new Intl.DateTimeFormat('en-GB', options).format(now);
      clockElement.textContent = `CAIRO ${timeString} EET`;
    } catch (e) {
      clockElement.textContent = 'EGYPT UTC+2';
    }
  }
  updateEgyptClock();
  setInterval(updateEgyptClock, 1000);


  // 2. Active Section Highlighting in Desktop Nav
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.desktop-nav .nav-link');

  const observerOptions = {
    root: null,
    rootMargin: '-20% 0px -60% 0px',
    threshold: 0
  };

  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinks.forEach(link => {
          const href = link.getAttribute('href');
          if (href === `#${id}`) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
      }
    });
  }, observerOptions);

  sections.forEach(section => sectionObserver.observe(section));


  // 3. One-Click Copy Email to Clipboard with Toast Feedback
  const copyBtn = document.getElementById('copy-email-btn');
  const copyText = document.getElementById('copy-text');
  const toast = document.getElementById('toast-notice');
  let toastTimer = null;

  if (copyBtn) {
    copyBtn.addEventListener('click', async () => {
      const email = copyBtn.getAttribute('data-email') || 'hamzaashraf.dev@gmail.com';
      try {
        await navigator.clipboard.writeText(email);
        
        // Button Feedback
        if (copyText) copyText.textContent = 'Copied to Clipboard!';
        copyBtn.style.borderColor = 'var(--status-green)';
        copyBtn.style.color = 'var(--status-green)';

        // Toast Notification
        if (toast) {
          toast.classList.add('show');
          clearTimeout(toastTimer);
          toastTimer = setTimeout(() => {
            toast.classList.remove('show');
            if (copyText) copyText.textContent = 'Copy Email Address';
            copyBtn.style.borderColor = '';
            copyBtn.style.color = '';
          }, 3200);
        }
      } catch (err) {
        // Fallback for older browsers
        const textarea = document.createElement('textarea');
        textarea.value = email;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
        if (copyText) copyText.textContent = 'Copied!';
        setTimeout(() => {
          if (copyText) copyText.textContent = 'Copy Email Address';
        }, 2500);
      }
    });
  }


  // 4. Mobile Drawer Navigation
  const mobileToggle = document.getElementById('mobile-toggle');
  const mobileDrawer = document.getElementById('mobile-drawer');
  const drawerClose = document.getElementById('drawer-close');
  const drawerLinks = document.querySelectorAll('.drawer-link');

  function openDrawer() {
    if (!mobileDrawer) return;
    mobileDrawer.classList.add('open');
    mobileDrawer.setAttribute('aria-hidden', 'false');
    if (mobileToggle) mobileToggle.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  }

  function closeDrawer() {
    if (!mobileDrawer) return;
    mobileDrawer.classList.remove('open');
    mobileDrawer.setAttribute('aria-hidden', 'true');
    if (mobileToggle) mobileToggle.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }

  if (mobileToggle) mobileToggle.addEventListener('click', openDrawer);
  if (drawerClose) drawerClose.addEventListener('click', closeDrawer);

  drawerLinks.forEach(link => {
    link.addEventListener('click', () => {
      closeDrawer();
    });
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && mobileDrawer && mobileDrawer.classList.contains('open')) {
      closeDrawer();
    }
  });


  // 5. Subtle Interactive Route Endpoint Highlighting in Gym Management API Console
  const routeEntries = document.querySelectorAll('.api-route-entry');
  routeEntries.forEach(route => {
    route.addEventListener('mouseenter', () => {
      route.style.transform = 'translateX(4px)';
    });
    route.addEventListener('mouseleave', () => {
      route.style.transform = 'translateX(0px)';
    });
  });

});

