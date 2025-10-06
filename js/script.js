// script.js

// Scroll-triggered animations
const fadeEls = document.querySelectorAll(".fade-slide");
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("in-view");
    }
  });
});
fadeEls.forEach(el => observer.observe(el));

// Project and Skills filtering
const filters = document.querySelectorAll(".filter-btn");
const projectCards = document.querySelectorAll(".project-card");
const skillCards = document.querySelectorAll(".grid-card");

filters.forEach(btn => {
  btn.addEventListener("click", () => {
    // Remove active class from all filter buttons
    document.querySelectorAll(".filter-btn").forEach(filterBtn => {
      filterBtn.classList.remove("active");
    });
    btn.classList.add("active");
    
    const filter = btn.getAttribute("data-filter");

    // Filter project cards (for projects.html)
    projectCards.forEach(card => {
      if (filter === "all" || card.classList.contains(filter)) {
        card.style.display = "block";
        card.style.animation = "fadeIn 0.5s ease-in-out";
      } else {
        card.style.display = "none";
      }
    });

    // Filter skill cards (for skills.html)
    skillCards.forEach(card => {
      if (filter === "all" || card.classList.contains(filter)) {
        card.style.display = "flex";
        card.style.animation = "fadeIn 0.5s ease-in-out";
      } else {
        card.style.display = "none";
      }
    });
  });
});

// PWA install prompt
let deferredPrompt;
const installBtn = document.getElementById("installBtn");
if (installBtn) {
  window.addEventListener("beforeinstallprompt", e => {
    e.preventDefault();
    deferredPrompt = e;
    installBtn.style.display = "inline-block";
  });

  installBtn.addEventListener("click", () => {
    deferredPrompt.prompt();
    deferredPrompt.userChoice.then(choice => {
      if (choice.outcome === "accepted") {
        console.log("App installed");
      }
      deferredPrompt = null;
    });
  });
}
