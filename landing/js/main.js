// Smooth scroll for same-page links
const onReady = () => {
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const id = a.getAttribute('href');
      if (!id || id === '#') return;
      const el = document.querySelector(id);
      if (el) {
        e.preventDefault();
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // Checkout button wiring
  const AFFILIATE_ID = 'YOUR_AFFILIATE_ID'; // TODO: replace
  const CHECKOUT_BASE = 'https://www.example-checkout.com/offer'; // TODO: replace with real checkout provider

  document.querySelectorAll('[data-role="checkout"]').forEach(btn => {
    btn.addEventListener('click', e => {
      const plan = btn.getAttribute('data-plan');
      const url = `${CHECKOUT_BASE}?plan=${encodeURIComponent(plan)}&aff=${encodeURIComponent(AFFILIATE_ID)}`;
      btn.setAttribute('href', url);
      // allow navigation to proceed
    });
  });

  // Optional: auto-close other FAQ items (accordion behavior)
  const faq = document.querySelector('#faq');
  if (faq) {
    const items = faq.querySelectorAll('details');
    items.forEach(d => {
      d.addEventListener('toggle', () => {
        if (d.open) {
          items.forEach(o => { if (o !== d) o.open = false; });
        }
      });
    });
  }
};

document.readyState === 'loading' ? document.addEventListener('DOMContentLoaded', onReady) : onReady();
