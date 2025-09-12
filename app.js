document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('menuToggle');
  const nav = document.getElementById('mainNav');
  if (!btn || !nav) return;

  // Always start hidden (in case of cached CSS)
  const setOpen = (open) => {
    nav.classList.toggle('open', open);
    nav.style.display = open ? 'flex' : 'none';   // inline style beats old CSS
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
  };
  setOpen(false);

  // Toggle on hamburger click
  btn.addEventListener('click', (e) => {
    e.stopPropagation();
    setOpen(!nav.classList.contains('open'));
  });

  // Close when clicking a nav link
  nav.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', () => setOpen(false));
  });

  // Close when clicking outside
  document.addEventListener('click', (e) => {
    if (nav.classList.contains('open') && !nav.contains(e.target) && e.target !== btn) {
      setOpen(false);
    }
  });
});
