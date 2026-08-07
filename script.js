document.addEventListener('DOMContentLoaded', () => {
  // 1. Intersection Observer para animaciones de entrada fluidas al hacer scroll
  const animatedElements = document.querySelectorAll('[data-animate]');

  if ('IntersectionObserver' in window) {
    const observerOptions = {
      root: null,
      rootMargin: '0px 0px -40px 0px',
      threshold: 0.15
    };

    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          obs.unobserve(entry.target);
        }
      });
    }, observerOptions);

    animatedElements.forEach((el) => observer.observe(el));
  } else {
    // Fallback simple si no hay soporte para IntersectionObserver
    animatedElements.forEach((el, index) => {
      setTimeout(() => el.classList.add('is-visible'), 100 + index * 100);
    });
  }

  // 2. Control de Botón de Impresión / PDF
  const printBtn = document.getElementById('btn-print');
  if (printBtn) {
    printBtn.addEventListener('click', () => {
      // Forzar que todos los elementos animados sean visibles antes de imprimir
      animatedElements.forEach((el) => el.classList.add('is-visible'));
      window.print();
    });
  }
});
