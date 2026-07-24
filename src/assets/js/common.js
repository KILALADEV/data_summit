// Import core GSAP library, ScrollTrigger plugin, and Lenis for smooth scrolling
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

// Register the ScrollTrigger plugin with GSAP
gsap.registerPlugin(ScrollTrigger);

const GlobalFunc = {
  rafId: null, // Stores the RequestAnimationFrame ID for Lenis
  mq: window.matchMedia("(max-width: 768px)"), // Media query for mobile breakpoint
  lastScrollY: window.scrollY, // Tracks the previous scroll position to detect scroll direction

  init: () => {
    GlobalFunc.initScrollEffects();
    GlobalFunc.initNavigation();
    GlobalFunc.initAnchorLinks();
    GlobalFunc.initModals();
    GlobalFunc.initLenisSystem();

    // Add 'loaded' class to body after a short delay once the page fully loads
    window.addEventListener("load", () => setTimeout(() => document.body.classList.add("loaded"), 500));
  },

  initScrollEffects: () => {
    const fadeItems = document.querySelectorAll(".fadein");

    const handleScroll = () => {
      const scroll = window.scrollY;

      // Trigger fade-in elements when they enter the viewport
      fadeItems.forEach(item => {
        const isVisible = scroll > (item.getBoundingClientRect().top + scroll - window.innerHeight + 150);
        item.classList.toggle("scrollin", isVisible);
      });
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("load", handleScroll);
  },

  initNavigation: () => {
    const body = document.body;
    const menu = document.querySelector(".m-menu");

    document.addEventListener("click", (e) => {
      const target = e.target;

      // Open menu when clicking the hamburger button
      if (target.closest(".js-menu-hambuger")) {
        menu?.classList.toggle("is-open");
        body.classList.toggle("has-menu");
      }

      // Close menu when clicking the close button or an anchor link
      if (target.closest(".js-menu-close") || target.closest(".js-anchor")) {
        menu?.classList.remove("is-open");
        body.classList.remove("has-menu");
      }
    });
  },

  initAnchorLinks: () => {
    // Dynamically calculate header height for scroll offset
    const getOffset = () => document.querySelector("header")?.offsetHeight || 0;

    /**
     * Performs the scroll animation using either Lenis or native scrollTo.
     * @param {HTMLElement} targetEl - The target element to scroll to.
     * @param {boolean} isSmooth - Whether to animate the scroll or jump instantly.
     */
    const scrollToTarget = (targetEl, isSmooth = true) => {
      const targetPos = targetEl.getBoundingClientRect().top + window.pageYOffset - getOffset();

      if (window.lenis) {
        // Smooth scroll using Lenis
        window.lenis.scrollTo(targetEl, {
          offset: -getOffset(),
          duration: isSmooth ? 1.2 : undefined,
          immediate: !isSmooth,
          easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        });
      } else {
        // Fallback to native browser smooth scrolling
        window.scrollTo({ top: targetPos, behavior: isSmooth ? "smooth" : "auto" });
      }
    };

    // Listen for clicks on page anchor links
    document.querySelectorAll(".js-anchor").forEach(link => {
      link.addEventListener("click", (e) => {
        const href = link.getAttribute("href");
        if (!href?.includes("#")) return;

        const url = new URL(link.href);
        const targetElement = document.querySelector(url.hash);

        // Check if the link points to the current page and the target exists
        if (location.pathname === url.pathname && targetElement) {
          e.preventDefault();
          scrollToTarget(targetElement);
        }
      });
    });

    // Handle initial scroll if the page is loaded with a hash in the URL
    if (window.location.hash) {
      const initialTarget = document.querySelector(window.location.hash);
      if (initialTarget) setTimeout(() => scrollToTarget(initialTarget, false), 300);
    }
  },

  initModals: () => {
    const body = document.body;

    // Open modal event listeners
    document.querySelectorAll(".js-open-modal").forEach(btn => {
      btn.addEventListener("click", () => {
        const modal = document.querySelector(btn.getAttribute("data-modal-target"));
        if (!modal) return;

        modal.classList.add("is-active");
        body.classList.add("has-modal");
        body.style.overflow = "hidden"; // Prevent background scrolling
        window.lenis?.stop(); // Pause smooth scrolling
      });
    });

    /**
     * Closes the active modal and restores background scrolling if no other modal is open.
     * @param {HTMLElement} modal - The modal element to close.
     */
    const closeModal = (modal) => {
      modal.classList.remove("is-active");

      // Only restore scroll if there are no other active modals remaining
      if (!document.querySelector(".c-modal.is-active")) {
        body.classList.remove("has-modal");
        body.style.overflow = "";
        window.lenis?.start(); // Resume smooth scrolling
      }
    };

    // Close modal event listeners (clicking close button or overlay backdrop)
    document.querySelectorAll(".js-close-modal, .overlay").forEach(el => {
      el.addEventListener("click", () => {
        const modal = el.closest(".c-modal") || document.querySelector(".c-modal.is-active");
        if (modal) closeModal(modal);
      });
    });
  },

  initLenisSystem: () => {
    window.addEventListener("load", async () => {
      // Wait for web fonts to load to prevent layout shifts/incorrect height calculations
      await document.fonts.ready;
      window.lenis = null;

      // Recursive animation frame loop for Lenis rendering
      const raf = (time) => {
        window.lenis?.raf(time);
        GlobalFunc.rafId = requestAnimationFrame(raf);
      };

      /**
       * Toggles Lenis based on viewport size (disabled on mobile, enabled on desktop).
       * @param {MediaQueryList} e - The media query list object.
       */
      const handleMode = (e) => {
        if (e.matches) {
          // Mobile: Destroy Lenis instance and cancel animation frames
          if (window.lenis) { window.lenis.destroy?.(); window.lenis = null; }
          cancelAnimationFrame(GlobalFunc.rafId);
          GlobalFunc.rafId = null;
          ScrollTrigger.refresh(); // Recalculate positions for native mobile scroll
        } else {
          // Desktop: Initialize Lenis smooth scroll
          window.lenis = new Lenis({
            smooth: true,
            lerp: 0.1,
            // Disable smooth touch scroll specifically on iOS devices
            smoothTouch: !/iP(ad|hone|od)/.test(navigator.userAgent),
          });

          if (!GlobalFunc.rafId) GlobalFunc.rafId = requestAnimationFrame(raf);
          requestAnimationFrame(() => ScrollTrigger.refresh());
        }
      };

      // Run check on initialization and listen for responsive window changes
      handleMode(GlobalFunc.mq);
      GlobalFunc.mq.addEventListener("change", handleMode);

      // Fix for page restorations (e.g., clicking the browser's back/forward button)
      window.addEventListener("pageshow", (e) => {
        const nav = performance.getEntriesByType("navigation")[0];
        if ((e.persisted || nav?.type === "back_forward") && window.lenis) {
          window.lenis.scrollTo(window.scrollY, { immediate: true });
        }
      });
    });
  }
};

// Fire initialization script based on the current DOM parsing state
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", GlobalFunc.init);
} else {
  GlobalFunc.init();
}
