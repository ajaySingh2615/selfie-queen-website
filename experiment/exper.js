gsap.registerPlugin(ScrollTrigger);

// Setup PIXI.js Scene for Flashy Effects
const app = new PIXI.Application({
  view: document.getElementById("explosionCanvas"),
  width: window.innerWidth,
  height: window.innerHeight,
  transparent: true,
});

function createFlashEffect() {
  let flash = new PIXI.Graphics();
  flash.beginFill(0xffffff);
  flash.drawRect(0, 0, app.screen.width, app.screen.height);
  flash.endFill();
  flash.alpha = 1;
  app.stage.addChild(flash);

  gsap.to(flash, {
    alpha: 0,
    duration: 0.5,
    ease: "power2.out",
    onComplete: () => app.stage.removeChild(flash),
  });
}

let currentScrolls = 0;
const maxScrolls = 3;
const body = document.querySelector("body");
const heroSection = document.querySelector(".hero-section");
const otherSections = document.querySelector(".other-sections");

document.addEventListener("wheel", function (event) {
  if (currentScrolls < maxScrolls) {
    event.preventDefault(); // Stop default scrolling

    createFlashEffect(); // Trigger Flash Explosion

    let prizeId = `#prize${currentScrolls + 1}`;
    gsap.to(prizeId, { opacity: 1, scale: 1, duration: 1 });

    currentScrolls++;

    if (currentScrolls === maxScrolls) {
      setTimeout(() => {
        heroSection.style.position = "relative"; // Allow scrolling
        otherSections.style.display = "block";
        body.style.overflow = "auto"; // Enable scrolling
      }, 1000);
    }
  }
});
