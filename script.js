document.addEventListener('DOMContentLoaded', () => {
  const animated = document.querySelectorAll('[data-animate]');
  animated.forEach((el, i) => {
    setTimeout(() => el.classList.add('is-visible'), 120 + i * 115);
  });
});
