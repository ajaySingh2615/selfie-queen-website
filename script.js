// Smooth Scroll Function
// document.querySelectorAll(".btn").forEach((button) => {
//   button.addEventListener("click", function (e) {
//     e.preventDefault();
//     const target = document.querySelector(this.getAttribute("href"));
//     if (target) {
//       target.scrollIntoView({ behavior: "smooth" });
//     }
//   });
// });

// Countdown Timer (To Be Used Later)
// function startCountdown(deadline) {
//   let countdownElement = document.getElementById("countdown");
//   function updateCountdown() {
//     let now = new Date().getTime();
//     let timeLeft = deadline - now;

//     let days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
//     let hours = Math.floor(
//       (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
//     );
//     let minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
//     let seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

//     countdownElement.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

//     if (timeLeft < 0) {
//       countdownElement.innerHTML = "⏳ Submission Closed!";
//     }
//   }
//   setInterval(updateCountdown, 1000);
// }

// Call the function with the deadline (replace with actual deadline)
// startCountdown(new Date("2025-03-01 23:59:59").getTime());

// Parallax Scroll Effect for Hero Title
// window.addEventListener("scroll", function () {
//   let heroTitle = document.querySelector(".hero-title");
//   let scrollPosition = window.scrollY;

//   if (scrollPosition > 10) {
//     heroTitle.classList.add("window-scroll");
//   } else {
//     heroTitle.classList.remove("window-scroll");
//   }
// });

document.addEventListener("DOMContentLoaded", function () {
  const faqItems = document.querySelectorAll(".faq-item");

  faqItems.forEach((item) => {
    const question = item.querySelector(".faq-question");
    const icon = item.querySelector(".faq-toggle-icon i");

    question.addEventListener("click", () => {
      // Close all FAQs first
      faqItems.forEach((faq) => {
        if (faq !== item) {
          faq.classList.remove("active");
          faq.querySelector(".faq-answer").style.display = "none";
          faq
            .querySelector(".faq-toggle-icon i")
            .classList.replace("fa-minus", "fa-plus");
        }
      });

      // Toggle current FAQ
      const answer = item.querySelector(".faq-answer");
      if (item.classList.contains("active")) {
        item.classList.remove("active");
        answer.style.display = "none";
        icon.classList.replace("fa-minus", "fa-plus");
      } else {
        item.classList.add("active");
        answer.style.display = "block";
        icon.classList.replace("fa-plus", "fa-minus");
      }
    });
  });
});
