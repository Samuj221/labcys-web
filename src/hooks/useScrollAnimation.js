import { useEffect } from "react";

export default function useScrollAnimation() {
  useEffect(() => {
    const elements = document.querySelectorAll("[data-animate]");

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.2,
      }
    );

    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);
}
