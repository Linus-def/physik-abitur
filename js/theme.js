// Theme-Initialisierung (vor dem Render, im <head>)
(function () {
  var storedTheme = null;
  try {
    storedTheme = localStorage.getItem('theme');
  } catch (e) {}

  var theme = window._theme ||
    storedTheme ||
    (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  document.documentElement.setAttribute('data-theme', theme);
})();

// Dark/Light Mode Toggle
document.addEventListener('DOMContentLoaded', function () {
  var html = document.documentElement;
  var btn = document.getElementById('theme-toggle');
  var icon = document.getElementById('theme-icon');
  var label = document.getElementById('theme-label');
  var theme = html.getAttribute('data-theme') || 'light';

  function applyTheme(t) {
    theme = t;
    html.setAttribute('data-theme', t);
    window._theme = t;
    try {
      localStorage.setItem('theme', t);
    } catch (e) {}

    var themeColor = document.querySelector('meta[name="theme-color"]');
    if (t === 'dark') {
      icon.textContent = '\u2600';
      label.textContent = 'Heller Modus';
      if (themeColor) themeColor.setAttribute('content', '#131f24');
    } else {
      icon.textContent = '\u263E';
      label.textContent = 'Dunkler Modus';
      if (themeColor) themeColor.setAttribute('content', '#58cc02');
    }
  }

  applyTheme(theme);

  if (btn) {
    btn.addEventListener('click', function () {
      applyTheme(theme === 'dark' ? 'light' : 'dark');
    });
  }
});

// Scroll-to-Top Button
document.addEventListener('DOMContentLoaded', function () {
  var btn = document.getElementById('scroll-top-btn');
  if (!btn) return;

  function onScroll() {
    if (window.scrollY > 300) {
      btn.classList.add('visible');
    } else {
      btn.classList.remove('visible');
    }
  }

  window.addEventListener('scroll', onScroll, { passive: true });

  // Auch für den #main Scroll-Container
  var main = document.getElementById('main');
  if (main) {
    main.addEventListener('scroll', function () {
      if (main.scrollTop > 300) {
        btn.classList.add('visible');
      } else {
        btn.classList.remove('visible');
      }
    }, { passive: true });
  }

  btn.addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    if (main) main.scrollTo({ top: 0, behavior: 'smooth' });
  });
});
