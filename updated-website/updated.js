document.addEventListener("DOMContentLoaded", function () {
  let registerBtn = document.getElementById("registerBtn");

  let openDate = new Date("February 15, 2025 00:00:00").getTime();

  let countdown = setInterval(function () {
    let now = new Date().getTime();

    if (now >= openDate) {
      registerBtn.disabled = false;
      registerBtn.innerText = "Register Now!";
      registerBtn.classList.add("btn-success");
      clearInterval(countdown);
    }
  }, 1000);

  // GSAP Fix: Ensure visibility before animation
  gsap.set(
    ".hero-title, .hero-subtext, .btn-glow, .btn-outline-light, .hero-image",
    { visibility: "visible" }
  );

  // GSAP Animations
  gsap.from(".hero-title", {
    opacity: 0,
    y: -50,
    duration: 1,
    ease: "power2.out",
  });
  gsap.from(".hero-subtext", {
    opacity: 0,
    y: 30,
    duration: 1,
    ease: "power2.out",
    delay: 0.3,
  });
  gsap.from(".btn-glow, .btn-outline-light", {
    opacity: 0,
    scale: 0.8,
    duration: 1,
    ease: "elastic.out(1,0.5)",
    delay: 0.5,
  });
  gsap.from(".hero-image", {
    opacity: 0,
    x: 50,
    scale: 0.9,
    duration: 1.2,
    ease: "power3.out",
    delay: 0.7,
  });
});
