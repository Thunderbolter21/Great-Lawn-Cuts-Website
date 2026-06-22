/* ====================================================================
   GLC Great Lawn Cuts — minimal vanilla JS
   Genuine interactivity only: mobile nav, scroll reveal, gallery lightbox.
   No frameworks, no builder runtime.
   ==================================================================== */
(function () {
  "use strict";

  // Signal that JS is active so CSS can stop hiding reveal elements.
  document.documentElement.classList.remove("no-js");

  /* ---- Mobile navigation toggle ---- */
  var toggle = document.getElementById("menu-toggle");
  var panel = document.getElementById("mobile-nav");
  if (toggle && panel) {
    var iconOpen = toggle.querySelector(".icon-open");
    var iconClose = toggle.querySelector(".icon-close");

    var setOpen = function (open) {
      panel.classList.toggle("hidden", !open);
      toggle.setAttribute("aria-expanded", String(open));
      toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
      if (iconOpen) iconOpen.classList.toggle("hidden", open);
      if (iconClose) iconClose.classList.toggle("hidden", !open);
    };

    toggle.addEventListener("click", function () {
      setOpen(panel.classList.contains("hidden"));
    });

    // Close after tapping any link in the panel.
    panel.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () { setOpen(false); });
    });
  }

  /* ---- Reveal-on-scroll ---- */
  var revealables = document.querySelectorAll(".glc-reveal");
  if ("IntersectionObserver" in window && revealables.length) {
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("glc-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    revealables.forEach(function (el) { io.observe(el); });
  } else {
    // Fallback: just show everything.
    revealables.forEach(function (el) { el.classList.add("glc-visible"); });
  }

  /* ---- Work gallery lightbox ---- */
  var lightbox = document.getElementById("lightbox");
  if (lightbox) {
    var lightboxImg = lightbox.querySelector("[data-lightbox-img]");
    var lightboxCaption = lightbox.querySelector("[data-lightbox-caption]");
    var closeBtn = lightbox.querySelector("[data-lightbox-close]");
    var triggers = document.querySelectorAll("[data-gallery-item]");
    var total = triggers.length;

    var openLightbox = function (btn) {
      var img = btn.querySelector("img");
      if (!img) return;
      lightboxImg.src = img.src;
      lightboxImg.alt = img.alt;
      if (lightboxCaption) {
        var idx = btn.getAttribute("data-index");
        lightboxCaption.textContent =
          "Project " + idx + " · " + parseInt(idx, 10) + " / " + total;
      }
      lightbox.hidden = false;
      document.body.style.overflow = "hidden";
      if (closeBtn) closeBtn.focus();
    };

    var closeLightbox = function () {
      lightbox.hidden = true;
      lightboxImg.src = "";
      document.body.style.overflow = "";
    };

    triggers.forEach(function (btn) {
      btn.addEventListener("click", function () { openLightbox(btn); });
    });
    if (closeBtn) closeBtn.addEventListener("click", closeLightbox);
    lightbox.addEventListener("click", function (e) {
      if (e.target === lightbox) closeLightbox();
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && !lightbox.hidden) closeLightbox();
    });
  }
})();
