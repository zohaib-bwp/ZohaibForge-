(function () {
  var root = document.documentElement;
  var toggle = document.getElementById('themeToggle');
  var navToggle = document.getElementById('navToggle');
  var navDrawer = document.getElementById('navDrawer');
  var yearEl = document.getElementById('year');
  var themeMeta = document.querySelector('meta[name="theme-color"]');

  function applyTheme(nextTheme) {
    root.setAttribute('data-theme', nextTheme);
    if (toggle) {
      toggle.setAttribute('aria-pressed', String(nextTheme === 'dark'));
      toggle.setAttribute('aria-label', nextTheme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme');
    }
    if (themeMeta) {
      themeMeta.setAttribute('content', nextTheme === 'dark' ? '#0B1118' : '#EDF0F4');
    }
  }

  var initialTheme = root.getAttribute('data-theme');
  if (!initialTheme) {
    try {
      initialTheme = localStorage.getItem('theme') || (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    } catch (e) {
      initialTheme = 'light';
    }
  }
  applyTheme(initialTheme === 'dark' ? 'dark' : 'light');

  if (toggle) {
    toggle.addEventListener('click', function () {
      var nextTheme = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      applyTheme(nextTheme);
      try { localStorage.setItem('theme', nextTheme); } catch (e) {}
    });
  }

  if (navToggle && navDrawer) {
    navToggle.addEventListener('click', function () {
      var open = navDrawer.classList.toggle('open');
      navToggle.setAttribute('aria-expanded', String(open));
    });

    navDrawer.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        navDrawer.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  if (yearEl) {
    yearEl.textContent = String(new Date().getFullYear());
  }

  if ('IntersectionObserver' in window) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });

    document.querySelectorAll('.reveal').forEach(function (element) {
      observer.observe(element);
    });
  } else {
    document.querySelectorAll('.reveal').forEach(function (element) {
      element.classList.add('visible');
    });
  }
})();
