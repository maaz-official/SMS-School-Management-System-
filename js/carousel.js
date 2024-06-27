document.addEventListener("DOMContentLoaded", () => {
    const slides = document.querySelectorAll("[data-slide]");
    const nextButton = document.querySelector("[data-button='next']");
    const prevButton = document.querySelector("[data-button='previous']");
    
    let currentIndex = 0;
    const totalSlides = slides.length;
  
    const updateSlides = () => {
      slides.forEach((slide, index) => {
        slide.style.transform = `translateX(${100 * (index - currentIndex)}%)`;
      });
    };
  
    nextButton.addEventListener("click", () => {
      currentIndex = (currentIndex + 1) % totalSlides;
      updateSlides();
    });
  
    prevButton.addEventListener("click", () => {
      currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
      updateSlides();
    });
  
    updateSlides();
  });
  