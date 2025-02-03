// Create Floating Red Particles
const particlesContainer = document.querySelector(".particles");

function createParticle() {
  const particle = document.createElement("div");
  particle.classList.add("particle");
  particlesContainer.appendChild(particle);

  // Random Position
  const size = Math.random() * 10 + 5;
  particle.style.width = `${size}px`;
  particle.style.height = `${size}px`;
  particle.style.left = `${Math.random() * 100}vw`;
  particle.style.top = `${Math.random() * 100}vh`;

  // Animation
  particle.style.animation = `floatUp ${
    Math.random() * 5 + 5
  }s linear infinite`;
  setTimeout(() => particle.remove(), 5000);
}

// Generate Particles
setInterval(createParticle, 300);

// CSS for Particles
const particleStyles = document.createElement("style");
particleStyles.innerHTML = `
    .particle {
        position: absolute;
        background: rgba(255, 0, 0, 0.8);
        border-radius: 50%;
        opacity: 0.8;
        filter: blur(2px);
    }
    
    @keyframes floatUp {
        from { transform: translateY(0) scale(1); opacity: 1; }
        to { transform: translateY(-50px) scale(0.8); opacity: 0; }
    }
`;
document.head.appendChild(particleStyles);

// Animate Prize Money Counter
const counters = document.querySelectorAll(".counter");
counters.forEach((counter) => {
  counter.innerText = "0";
  const updateCounter = () => {
    const target = +counter.getAttribute("data-target");
    const count = +counter.innerText;
    const increment = target / 100;

    if (count < target) {
      counter.innerText = Math.ceil(count + increment);
      setTimeout(updateCounter, 20);
    } else {
      counter.innerText = target;
    }
  };
  updateCounter();
});

// 3D Tilt Effect on Hover
VanillaTilt.init(document.querySelectorAll(".prize-card"), {
  max: 15,
  speed: 400,
  glare: true,
  "max-glare": 0.2,
});

// Fireworks Effect
const canvas = document.getElementById("fireworks");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

function createFirework() {
  let x = Math.random() * canvas.width;
  let y = (Math.random() * canvas.height) / 2;
  ctx.beginPath();
  ctx.arc(x, y, 3, 0, Math.PI * 2);
  ctx.fillStyle = `hsl(${Math.random() * 360}, 100%, 50%)`;
  ctx.fill();
}

setInterval(createFirework, 500);

// Play Announcement Voice ONLY When Section Becomes Visible
let sectionVisible = false;
const prizesSection = document.querySelector(".prizes-section");

const playAnnouncement = () => {
  if (!sectionVisible) {
    let speech = new SpeechSynthesisUtterance(
      "Welcome to Miss Selfie Queen 2025! Here are the grand prizes!"
    );
    speechSynthesis.speak(speech);
    sectionVisible = true;
  }
};

// Check if section is visible
const observer2 = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        playAnnouncement();
      }
    });
  },
  { threshold: 0.5 }
);

observer.observe2(prizesSection);

// Step Cards Fade-in on Scroll
const stepCards = document.querySelectorAll(".step-card");
const observer3 = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.animation = "fadeInUp 1s ease-in-out forwards";
      }
    });
  },
  { threshold: 0.3 }
);

stepCards.forEach((card) => observer.observe3(card));

// FAQ Items Fade-in on Scroll
const faqItems = document.querySelectorAll(".accordion-item");
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.animation = "fadeInUp 0.8s ease-in-out forwards";
      }
    });
  },
  { threshold: 0.3 }
);

faqItems.forEach((item) => observer.observe(item));

// Voice Assistant for FAQ Answers
const faqButtons = document.querySelectorAll(".accordion-button");
faqButtons.forEach((button) => {
  button.addEventListener("click", () => {
    let text = button.innerText;
    let speech = new SpeechSynthesisUtterance(text);
    speechSynthesis.speak(speech);
  });
});
