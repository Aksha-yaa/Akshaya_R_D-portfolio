import { useEffect } from "react";
import Lenis from "lenis";

const SmoothScroll = () => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // Support anchor clicks
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest("a[href^='#']");
      if (anchor) {
        const href = anchor.getAttribute("href");
        if (href && href.startsWith("#")) {
          const el = document.getElementById(href.slice(1));
          if (el) {
            e.preventDefault();
            lenis.scrollTo(el, { offset: -60 });
          }
        }
      }
    };

    document.addEventListener("click", handleClick);
    return () => {
      lenis.destroy();
      document.removeEventListener("click", handleClick);
    };
  }, []);

  return null;
};

export default SmoothScroll;
