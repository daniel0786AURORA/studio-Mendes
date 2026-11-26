"use client";
import { useEffect } from "react";

/**
 * Faz cada seção surgir com um movimento suave quando entra na tela.
 * Pula a primeira seção (hero), que tem a própria animação.
 */
export function ScrollReveal() {
  useEffect(() => {
    const secoes = Array.from(document.querySelectorAll("main > section")).slice(1);
    secoes.forEach((s) => s.classList.add("reveal"));

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -8% 0px" }
    );

    secoes.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, []);

  return null;
}
