let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  clearInterval(autoScroll); // Stop auto-scroll when manually navigating
  showSlides(slideIndex += n);
  autoScroll = setInterval(() => plusSlides(1), 5000); // Restart auto-scroll
}

// Thumbnail image controls
function currentSlide(n) {
  clearInterval(autoScroll);
  showSlides(slideIndex = n);
  autoScroll = setInterval(() => plusSlides(1), 5000);
}

function showSlides(n) {
  let i;
  const slides = document.getElementsByClassName("mySlides");
  const dots = document.getElementsByClassName("dot");
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

// Auto-scroll every 5 seconds
let autoScroll = setInterval(() => plusSlides(1), 5000);
