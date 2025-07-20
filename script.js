// Wait for the DOM to fully load
document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll("section, .project");

  const revealOnScroll = () => {
    const triggerBottom = window.innerHeight * 0.9;

    sections.forEach(el => {
      const elementTop = el.getBoundingClientRect().top;

      if (elementTop < triggerBottom) {
        el.classList.add("show");
      }
    });
  };

  // Run once and also on scroll
  revealOnScroll();
  window.addEventListener("scroll", revealOnScroll);
});
