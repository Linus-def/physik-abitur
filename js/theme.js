// Theme-Initialisierung (vor dem Render, im <head>)
(function () {
  var theme = window._theme ||
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
    if (t === 'dark') {
      icon.textContent = '\u2600\uFE0F';
      label.textContent = 'Light Mode';
    } else {
      icon.textContent = '\uD83C\uDF19';
      label.textContent = 'Dark Mode';
    }
  }

  applyTheme(theme);

  if (btn) {
    btn.addEventListener('click', function () {
      applyTheme(theme === 'dark' ? 'light' : 'dark');
    });
  }
});
