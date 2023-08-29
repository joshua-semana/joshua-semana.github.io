const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animate-show");
    } else {
      entry.target.classList.remove("animate-show");
    }
  });
});
const hiddenSections = document.querySelectorAll(".animate-hidden");
hiddenSections.forEach((section) => observer.observe(section));
