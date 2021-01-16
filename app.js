const sections = document.querySelectorAll("section");
const bubble = document.querySelector(".bubble");
const gradients = [
  "linear-gradient(to right top, #f46b45, #eea849)",
  "linear-gradient(to right top, #005c97, #363795)",
  "linear-gradient(to right top, #e53935, #e35d5b)",
];

let observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      const className = entry.target.className;
      const active = document.querySelector(`[data-page=${className}]`);
      const gradient = entry.target.getAttribute("data-index");
      const coords = active.getBoundingClientRect();
      const directions = {
        height: coords.height,
        width: coords.width,
        top: coords.top,
        left: coords.left,
      };
      if (entry.isIntersecting) {
        bubble.style.setProperty("left", `${directions.left}px`);
        bubble.style.setProperty("top", `${directions.top}px`);
        bubble.style.setProperty("height", `${directions.height}px`);
        bubble.style.setProperty("width", `${directions.width}px`);
        bubble.style.background = gradients[gradient];
      }
    });
  },
  { threshold: 0.8 }
);

sections.forEach((section) => {
  observer.observe(section);
});
