let slideIndex = 1;
let autoPlayInterval;

showSlides(slideIndex);
startAutoPlay();

// Next/previous controls
function plusSlides(n) {
  clearInterval(autoPlayInterval); // Stop autoplay
  showSlides(slideIndex += n);
  startAutoPlay(); // Resume autoplay after the change
}

// Thumbnail image controls
function currentSlide(n) {
  clearInterval(autoPlayInterval); // Stop autoplay
  showSlides(slideIndex = n);
  startAutoPlay(); // Resume autoplay after the change
}

// Show the current slide
function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) { slideIndex = 1; }
  if (n < 1) { slideIndex = slides.length; }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

// Autoplay functionality
function startAutoPlay() {
  autoPlayInterval = setInterval(() => {
    showSlides(slideIndex += 1);
  }, 7000); // Change slides every 7 seconds
}
