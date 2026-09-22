(function () {
  var root = document.documentElement;
  var toggle = document.getElementById('themeToggle');
  var themeMeta = document.querySelector('meta[name="theme-color"]');

  function applyTheme(t) {
    root.setAttribute('data-theme', t);
    if (toggle) toggle.setAttribute('aria-pressed', String(t === 'dark'));
    if (toggle) toggle.setAttribute('aria-label', t === 'dark' ? 'Switch to light theme' : 'Switch to dark theme');
    if (themeMeta) themeMeta.setAttribute('content', t === 'dark' ? '#0A0F15' : '#EDF0F4');
  }
  applyTheme(root.getAttribute('data-theme') || 'light');

  if (toggle) {
    toggle.addEventListener('click', function () {
      var next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      applyTheme(next);
      try { localStorage.setItem('theme', next); } catch (e) {}
    });
  }

  var navToggle = document.getElementById('navToggle');
  var navDrawer = document.getElementById('navDrawer');
  if (navToggle && navDrawer) {
    navToggle.addEventListener('click', function () {
      var open = navDrawer.classList.toggle('open');
      navToggle.setAttribute('aria-expanded', String(open));
    });
    navDrawer.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        navDrawer.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  var yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());
})();
