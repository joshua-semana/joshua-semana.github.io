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
