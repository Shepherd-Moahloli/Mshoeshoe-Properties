var slides = document.querySelectorAll("#slider .slide");
var currentSlide = 0;
var isAnimating = false;
var slideInterval;

slides.forEach((slide) => {
  slide.addEventListener("mouseover", stopSlider);
  slide.addEventListener("mouseout", startSlider);
});

function changeSlide() {
  if (isAnimating) return;
  isAnimating = true;

  // Move the current slide out
  slides[currentSlide].style.transform = "translateX(-100%)";

  // Move to the next slide
  var nextSlide = (currentSlide + 1) % slides.length;
  slides[nextSlide].style.transform = "translateX(0)";
  slides[nextSlide].style.zIndex = 2;

  // After the animation is complete, reset the position of the previous slide
  setTimeout(() => {
    slides[currentSlide].style.transform = "translateX(100%)";
    slides[currentSlide].style.zIndex = 1;
    currentSlide = nextSlide;
    isAnimating = false;
  }, 1000); // delay equal to transition duration
}

slideInterval = setInterval(changeSlide, 3000);

function stopSlider() {
  clearInterval(slideInterval);
}

function startSlider() {
  slideInterval = setInterval(changeSlide, 3000);
}

document.querySelectorAll(".my-svg").forEach(function (img) {
  img.parentNode.addEventListener("mouseover", function () {
    img.src = "images/circle-right-regular-red.svg"; // path to the red SVG
  });
  img.parentNode.addEventListener("mouseout", function () {
    img.src = "images/circle-right-regular.svg"; // path to the original SVG
  });
});
