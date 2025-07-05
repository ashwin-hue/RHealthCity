document.querySelectorAll('.slider-section').forEach((section) => {
  const slides = section.querySelectorAll('.slide');
  const dots = section.querySelectorAll('.dot');
  const prevBtn = section.querySelector('.arrow.left');
  const nextBtn = section.querySelector('.arrow.right');
  let currentIndex = 0;

  const showSlide = (index) => {
    slides.forEach((slide, i) => {
      slide.classList.toggle('active', i === index);
      dots[i].classList.toggle('active', i === index);
    });
  };

  prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    showSlide(currentIndex);
  });

  nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
  });

  dots.forEach((dot, i) => {
    dot.addEventListener('click', () => {
      currentIndex = i;
      showSlide(currentIndex);
    });
  });

  // Initialize the slider
  showSlide(currentIndex);
});