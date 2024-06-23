document.addEventListener("DOMContentLoaded", function() {
    const cardSlider = document.querySelector(".card-slider");
    const prevButton = document.getElementById("prevBtn");
    const nextButton = document.getElementById("nextBtn");
  
    let currentIndex = 0;
    const cardWidth = 310; // Width of each card including margin
  
    prevButton.addEventListener("click", () => {
      if (currentIndex > 0) {
        currentIndex--;
        updateSlider();
      }
    });
  
    nextButton.addEventListener("click", () => {
      if (currentIndex < cardSlider.children.length - 3) {
        currentIndex++;
        updateSlider();
      }
    });
  
    function updateSlider() {
      const offsetX = -currentIndex * cardWidth;
      cardSlider.style.transform = `translateX(${offsetX}px)`;
    }
  
    updateSlider();
  });
  