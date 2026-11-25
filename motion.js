if ("IntersectionObserver" in window && !matchMedia("(prefers-reduced-motion: reduce)").matches) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("enter");
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.1 });

  document.querySelectorAll(
    ".intro h2, .intro p, .loop-step, .workspace-heading h2, .workspace-heading p, " +
    ".wide-shot img, .capabilities > div, .memory-copy h2, .memory-copy p, .memory-shot img, " +
    ".review-grid h2, .review-grid > div > p, .review-grid details, .review-shot img, " +
    ".start h2, .start p, .start-list li, .faq h2, .faq details, .closing-content h2, .closing-content p"
  ).forEach((element) => observer.observe(element));
}
