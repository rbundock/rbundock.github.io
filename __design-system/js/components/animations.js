const items = document.querySelectorAll('[data-animate]');

items.forEach(element => {
  const origin = element.getAttribute('data-origin') ?? 'left';
  const distance = element.getAttribute('data-distance') ?? '5%';
  const duration = element.getAttribute('data-duration') ?? 1000;
  const delay = element.getAttribute('data-delay') ?? 0;

  ScrollReveal().reveal(element, {
    distance,
    origin,
    duration,
    delay
  });
});