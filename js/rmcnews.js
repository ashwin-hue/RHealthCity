const sliders = {
    slider1: {
      images: [
        "assets/images/s1i1.jpg",
       "assets/images/s1i2.jpg",
       "assets/images/s1i3.jpg",
      "assets/images/s1i4.jpg",
      "assets/images/s1i5.jpg",
      ],
      currentIndex: 0,
    },
    slider2: {
      images: [
        "assets/images/s2i1.jpg",
       "assets/images/s2i2.jpg",
      "assets/images/s2i3.jpg",
        "assets/images/s2i4.jpg",
       "assets/images/s2i5.jpg",
      ],
      currentIndex: 0,
    }
  };
  
  function updateSlider(id) {
    const slider = sliders[id];
    const container = document.getElementById(id);
    const img = container.querySelector('.slide-img');
    const dotsContainer = document.getElementById(`dots${id.slice(-1)}`);
  
    img.src = slider.images[slider.currentIndex];
  
    // Dots
    dotsContainer.innerHTML = '';
    slider.images.forEach((_, i) => {
      const dot = document.createElement('span');
      dot.className = 'dot' + (i === slider.currentIndex ? ' active' : '');
      dot.onclick = () => {
        slider.currentIndex = i;
        updateSlider(id);
      };
      dotsContainer.appendChild(dot);
    });
  }
  
  function changeSlide(id, direction) {
    const slider = sliders[id];
    slider.currentIndex += direction;
    if (slider.currentIndex < 0) slider.currentIndex = slider.images.length - 1;
    if (slider.currentIndex >= slider.images.length) slider.currentIndex = 0;
    updateSlider(id);
  }
  
  window.onload = () => {
    updateSlider("slider1");
    updateSlider("slider2");
  };
  