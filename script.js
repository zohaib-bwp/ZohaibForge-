(function () {
  const menu = document.getElementById('menuButton');
  const mobileMenu = document.getElementById('mobileMenu');

  if (menu && mobileMenu) {
    menu.addEventListener('click', function () {
      const isOpen = mobileMenu.classList.toggle('open');
      menu.setAttribute('aria-expanded', String(isOpen));
      menu.setAttribute('aria-label', isOpen ? 'Close menu' : 'Open menu');
    });

    mobileMenu.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        mobileMenu.classList.remove('open');
        menu.setAttribute('aria-expanded', 'false');
      });
    });
  }

  const year = document.getElementById('year');
  if (year) {
    year.textContent = new Date().getFullYear();
  }

  const revealItems = document.querySelectorAll('.reveal');

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });

    revealItems.forEach(function (item) {
      observer.observe(item);
    });
  } else {
    revealItems.forEach(function (item) {
      item.classList.add('visible');
    });
  }

  const reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const visual = document.querySelector('.hero-visual');

  if (visual && !reduceMotion) {
    document.addEventListener('mousemove', function (event) {
      const x = (event.clientX / window.innerWidth - 0.5) * 7;
      const y = (event.clientY / window.innerHeight - 0.5) * -7;
      visual.style.transform = 'perspective(900px) rotateY(' + x + 'deg) rotateX(' + y + 'deg)';
    });
  }
})();
