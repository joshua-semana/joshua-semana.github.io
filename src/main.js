import "https://flackr.github.io/scroll-timeline/dist/scroll-timeline.js";

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate-show");
        observer.unobserve(entry.target);
      }
    });
  },
  {
    rootMargin: "0px 0px -50px",
  }
);
const hiddenSections = document.querySelectorAll(".animate-hidden");
hiddenSections.forEach((section) => observer.observe(section));

const scrollTracker = document.getElementById("scroll-tracker");
const scrollTimeline = new ScrollTimeline({
  scrollOffsets: [CSS.percent(0), CSS.percent(100)],
});

scrollTracker.animate(
  {
    transform: ["scaleX(0)", "scaleX(1)"],
  },
  {
    timeline: scrollTimeline,
  }
);

const openHygeia = document.getElementById("open-hygeia");
const openTechaza = document.getElementById("open-techaza");
const openBotania = document.getElementById("open-botania");
const openTechGalaxy = document.getElementById("open-tech-galaxy");
const openQuickR = document.getElementById("open-quickr");
const openStudentManagement = document.getElementById("open-student-management");

openHygeia.addEventListener("click", () => {
  window.open("https://www.behance.net/gallery/176554899/Hygeia", "_blank");
});

openTechaza.addEventListener("click", () => {
  window.open("https://www.behance.net/gallery/179089673/Techaza", "_blank");
});

openBotania.addEventListener("click", () => {
  window.open("https://www.behance.net/gallery/176555329/Botania", "_blank");
});

openTechGalaxy.addEventListener("click", () => {
  window.open("https://www.behance.net/gallery/179089881/Tech-Galaxy", "_blank");
});

openQuickR.addEventListener("click", () => {
  window.open("https://www.behance.net/gallery/179090093/QuickR", "_blank");
});

openStudentManagement.addEventListener("click", () => {
  window.open(
    "https://www.behance.net/gallery/179090243/Student-Management-System-(SIS)",
    "_blank"
  );
});
