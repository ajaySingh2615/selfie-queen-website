// Function to Trigger Scroll Animations Repeatedly
function scrollAnimations() {
  const elements = document.querySelectorAll(
    ".scroll-fade-in, .scroll-slide-left, .scroll-slide-right"
  );

  elements.forEach((element) => {
    const elementPosition = element.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.3;

    if (elementPosition < screenPosition) {
      element.classList.add("active");
    } else {
      element.classList.remove("active");
    }
  });
}

// Function for Parallax Image Effect (Disabled on Mobile)
function parallaxEffect() {
  const parallaxImage = document.querySelector(".parallax-img");
  if (parallaxImage && window.innerWidth > 768) {
    // Parallax only for large screens
    let scrollPos = window.scrollY;
    parallaxImage.style.transform = `translateY(${scrollPos * 0.1}px)`;
  }
}

// Run Functions on Scroll
window.addEventListener("scroll", () => {
  scrollAnimations();
  parallaxEffect();
});

// Run Animation Once on Page Load (for elements already in view)
document.addEventListener("DOMContentLoaded", scrollAnimations);

// Function to Calculate Days Left Until Registration Ends
function updateCountdown() {
  const endDate = new Date("March 10, 2025 23:59:59").getTime();
  const now = new Date().getTime();
  const timeLeft = endDate - now;

  if (timeLeft > 0) {
    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    document.getElementById("countdown").innerHTML = days + " Days Left";
  } else {
    document.getElementById("countdown").innerHTML = "Registration Closed";
  }
}

// Run Countdown Function Every Second
setInterval(updateCountdown, 1000);
updateCountdown();
