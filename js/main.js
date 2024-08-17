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

  $(document).ready(function () {
    var link = $("#house-img .overlay-text");
    if (!link.length) {
      console.log("The .overlay-text link does not exist");
      return;
    }

    link.on("click", function (event) {
      console.log("The .overlay-text link was clicked");
      event.preventDefault();

      var hash = event.target.hash;
      if (!hash) {
        console.log(
          "The .overlay-text link does not have a valid href attribute"
        );
        return;
      }

      var target = $(hash);
      if (!target.length) {
        console.log("The target element does not exist");
        return;
      }

      $("html, body").stop().animate(
        {
          scrollTop: target.offset().top,
        },
        2000,
        "easeInOutExpo"
      );

      $(window).on("wheel", function () {
        $("html, body").stop();
      });
    });
  });
});
