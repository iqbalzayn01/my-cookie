const slideContainer = document.querySelector('.slide-container');
let isDown = false;
let startX;
let scrollLeft;

slideContainer.addEventListener('mousedown', (e) => {
  isDown = true;
  startX = e.pageX - slideContainer.offsetLeft;
  scrollLeft = slideContainer.scrollLeft;
});

slideContainer.addEventListener('mouseleave', () => {
  isDown = false;
});

slideContainer.addEventListener('mouseup', () => {
  isDown = false;
});

slideContainer.addEventListener('mousemove', (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - slideContainer.offsetLeft;
  const walk = (x - startX) * 2;
  slideContainer.scrollLeft = scrollLeft - walk;
});
