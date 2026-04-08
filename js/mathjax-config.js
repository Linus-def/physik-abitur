window._mathjaxPending = window._mathjaxPending || [];
window.mathjaxTypeset = function (elements) {
  if (window.MathJax && MathJax.typesetPromise) {
    return MathJax.typesetPromise(elements);
  }
  window._mathjaxPending.push(elements);
  return Promise.resolve();
};

MathJax = {
  tex: { inlineMath: [['\\(','\\)']], displayMath: [['\\[','\\]']] },
  options: { skipHtmlTags: ['script','noscript','style','textarea','pre'] },
  startup: {
    typeset: false,
    ready() {
      MathJax.startup.defaultReady();
      (window._mathjaxPending || []).forEach(elements => {
        if (MathJax.typesetPromise) {
          MathJax.typesetPromise(elements);
        }
      });
      window._mathjaxPending = [];
    }
  }
};
