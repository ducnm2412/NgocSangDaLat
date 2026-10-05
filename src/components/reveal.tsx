"use client";

import { useEffect } from "react";

// Dùng IntersectionObserver thay cho CSS scroll-driven animation vì
// Firefox và Safari chưa hỗ trợ đầy đủ loại animation đó.
export function RevealOnScroll() {
  useEffect(() => {
    const targets = document.querySelectorAll(".ns-reveal");
    if (!("IntersectionObserver" in window)) {
      targets.forEach((el) => el.classList.add("is-visible"));
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    );
    targets.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <noscript>
      <style>{".ns-reveal{opacity:1;transform:none}"}</style>
    </noscript>
  );
}
