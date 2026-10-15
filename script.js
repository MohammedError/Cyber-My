document.addEventListener('DOMContentLoaded', () => {
  const motionButton = document.querySelector('.motion-toggle');
  const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
  let enabled = false;
  const updateMotion = () => {
    document.body.dataset.motion = enabled && !preference.matches ? 'on' : 'off';
    document.documentElement.dataset.motion = document.body.dataset.motion;
    motionButton.textContent = 'Motion: ' + document.body.dataset.motion;
    motionButton.setAttribute('aria-pressed', String(document.body.dataset.motion === 'on'));
  };
  motionButton.hidden = false;
  motionButton.addEventListener('click', () => { enabled = !enabled; updateMotion(); });
  preference.addEventListener('change', () => { enabled = false; updateMotion(); });
  updateMotion();
  document.getElementById('copyright-year').textContent = String(new Date().getFullYear());
  const links = [...document.querySelectorAll('.navbar a')];
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) links.forEach(link => {
          if (link.hash === '#' + entry.target.id) link.setAttribute('aria-current', 'location');
          else link.removeAttribute('aria-current');
        });
      });
    }, { rootMargin: '-20% 0px -55% 0px' });
    links.forEach(link => { const section = document.querySelector(link.hash); if (section) observer.observe(section); });
  }
});
