// Smooth Scroll for navigation links
document.querySelectorAll("nav a").forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href").substring(1);
      document.getElementById(targetId).scrollIntoView({ behavior: "smooth" });
    });
  });
  
  // Dark Mode Toggle
  const themeToggle = document.getElementById("theme-toggle");
  themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    if (document.body.classList.contains("dark-mode")) {
      themeToggle.textContent = "☀️ Light Mode";
    } else {
      themeToggle.textContent = "🌙 Dark Mode";
    }
  });
  
  // Typing Effect for Hero Section
  const text =
    "Aspiring Full-Stack Developer | Front-End Developer | Passionate about Building Cool Stuff";
  let index = 0;
  function typeEffect() {
    if (index < text.length) {
      document.getElementById("typing-text").textContent += text[index];
      index++;
      setTimeout(typeEffect, 50);
    }
  }
  document.addEventListener("DOMContentLoaded", typeEffect);
  