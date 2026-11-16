import { useEffect } from "react";

// Element med klassen "reveal" tonas in när de scrollas fram
export function useReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });

    document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));

    // Städa upp när sidan försvinner
    return () => observer.disconnect();
  }, []);
}
