document.addEventListener("DOMContentLoaded", () => {
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const revealItems = document.querySelectorAll("[data-reveal]");

  revealItems.forEach((item) => item.classList.add("is-visible"));

  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", (event) => {
      const targetId = link.getAttribute("href");
      const target = targetId ? document.querySelector(targetId) : null;
      if (!target) return;

      event.preventDefault();
      target.scrollIntoView({
        behavior: reducedMotion ? "auto" : "smooth",
        block: "start",
      });
    });
  });

  const trackClick = (label) => {
    if (typeof window.gtag !== "function") return;
    window.gtag("event", "click", {
      event_category: "portfolio_cta",
      event_label: label,
    });
  };

  document.querySelectorAll("[data-cta]").forEach((element) => {
    element.addEventListener("click", () => {
      const label = element.getAttribute("data-cta");
      if (label) trackClick(label);
    });
  });
});
