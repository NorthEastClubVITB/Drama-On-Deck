/*
  Drama on Deck — Bollywood Days
  -------------------------------------------------
  This file is intentionally small + readable.
  It handles:
  - Editable config for links/details/coordinators
  - Scroll-reveal (IntersectionObserver)
  - Parallax (requestAnimationFrame, lightweight)
  - Mobile menu toggle
  - Tiny micro-interactions (toast)
*/

/* =========================
   EDIT EVENT DETAILS HERE
   ========================= */
const SITE_CONFIG = {
  // Replace with your real Google Form URL
  registerUrl: "https://forms.gle/egAERjvd7nkeDwZo6",

  // Replace with your official club/college page
  officialSiteUrl: "https://northeastclubvitb.netlify.app/",

  event: {
    date: "27 February 2026",
    time: "10:00 AM \u2013 3:00 PM",
    venue: "AB1-420",
    entry: "Open for all • Limited slots",
  },

  org: {
    clubName: "NE CLUB",
    collegeName: "VIT Bhopal University",
    socials: {
      instagram: "https://www.instagram.com/northeastclub.vitb_?igsh=b3NoYjA4YmU2ZDNx",
      linkedin: "https://www.linkedin.com/company/north-east-club-vitb/",
      website: "https://northeastclubvitb.netlify.app/",
    },
  },

  coordinators: [
    {
      name: "Faculty Coordinator Name",
      role: "Dr. Shafiul Alom Ahmed",
      
      phone: "Dr. Subrata Nath",
       email: "coordinator@example.com",
    },
    {
      name: "Coordinator Name",
      role: "Aakash Lalwani",
      phone: "+91 8822681608",
      email: "aakash.23bai10885@vitbhopal.ac.in",
    },
  ],
};

/* =========================
   DOM helpers
   ========================= */
const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

function setText(sel, value) {
  const el = $(sel);
  if (el) el.textContent = value;
}

function setHref(sel, value) {
  const el = $(sel);
  if (el) el.setAttribute("href", value);
}

/* =========================
   Hydrate content from config
   ========================= */
function applyConfig() {
  // CTA links
  $$("[data-register]").forEach((a) => a.setAttribute("href", SITE_CONFIG.registerUrl));
  $$("[data-official]").forEach((a) => a.setAttribute("href", SITE_CONFIG.officialSiteUrl));

  // Details
  const { date, time, venue, entry } = SITE_CONFIG.event;
  $$("[data-detail-date]").forEach((el) => (el.textContent = date));
  $$("[data-detail-time]").forEach((el) => (el.textContent = time));
  $$("[data-detail-venue]").forEach((el) => (el.textContent = venue));
  $$("[data-detail-entry]").forEach((el) => (el.textContent = entry));

  // Org
  $$("[data-club-name]").forEach((el) => (el.textContent = SITE_CONFIG.org.clubName));
  $$("[data-college-name]").forEach((el) => (el.textContent = SITE_CONFIG.org.collegeName));

  // Socials (both coordinator section + footer reuse same data-social attr)
  $$("[data-social]").forEach((a) => {
    const key = a.getAttribute("data-social");
    const href = SITE_CONFIG.org.socials[key];
    if (href) a.setAttribute("href", href);
  });

  // Coordinators (2 slots in layout)
  const c1 = SITE_CONFIG.coordinators[0];
  const c2 = SITE_CONFIG.coordinators[1];

  if (c1) {
    $$("[data-coord-name-1]").forEach((el) => (el.textContent = c1.name));
    $$("[data-coord-role-1]").forEach((el) => (el.textContent = c1.role));
    $$("[data-coord-phone-text-1]").forEach((el) => (el.textContent = prettifyPhone(c1.phone)));
    $$("[data-coord-email-text-1]").forEach((el) => (el.textContent = c1.email));
    $$("[data-coord-phone-1]").forEach((a) => a.setAttribute("href", `tel:${c1.phone}`));
    $$("[data-coord-email-1]").forEach((a) => a.setAttribute("href", `mailto:${c1.email}`));
    $$("[data-coord-linkedin-1]").forEach((a) => {
      if (c1.linkedin) a.setAttribute("href", c1.linkedin);
    });
  }

  if (c2) {
    $$("[data-coord-name-2]").forEach((el) => (el.textContent = c2.name));
    $$("[data-coord-role-2]").forEach((el) => (el.textContent = c2.role));
    $$("[data-coord-phone-text-2]").forEach((el) => (el.textContent = prettifyPhone(c2.phone)));
    $$("[data-coord-email-text-2]").forEach((el) => (el.textContent = c2.email));
    $$("[data-coord-phone-2]").forEach((a) => a.setAttribute("href", `tel:${c2.phone}`));
    $$("[data-coord-email-2]").forEach((a) => a.setAttribute("href", `mailto:${c2.email}`));
    $$("[data-coord-linkedin-2]").forEach((a) => {
      if (c2.linkedin) a.setAttribute("href", c2.linkedin);
    });
  }
}

function prettifyPhone(raw) {
  // Keep it simple: show +91 12345 67890 style if possible.
  if (!raw) return "";
  const s = String(raw).replace(/\s+/g, "");
  const m = s.match(/^(\+\d{1,3})(\d{5})(\d{5,})$/);
  if (!m) return raw;
  return `${m[1]} ${m[2]} ${m[3]}`;
}

/* =========================
   Reveal on scroll
   ========================= */
function setupReveals() {
  const targets = $$("[data-reveal], [data-title-reveal]");
  if (!targets.length) return;

  const io = new IntersectionObserver(
    (entries) => {
      for (const e of entries) {
        if (e.isIntersecting) {
          e.target.classList.add("is-revealed");
          io.unobserve(e.target);
        }
      }
    },
    { root: null, threshold: 0.14, rootMargin: "0px 0px -8% 0px" }
  );

  targets.forEach((el) => io.observe(el));
}

/* =========================
   Parallax (very lightweight)
   ========================= */
function setupParallax() {
  const hero = $("[data-parallax]");
  if (!hero) return;

  const bg = $(".hero__bg", hero);
  const stage = $(".hero__stage", hero);
  const neonTop = $(".hero__neon--top", hero);
  const neonBottom = $(".hero__neon--bottom", hero);

  let ticking = false;
  let lastY = window.scrollY || 0;

  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduced) return;

  function onScroll() {
    lastY = window.scrollY || 0;
    if (!ticking) {
      ticking = true;
      requestAnimationFrame(update);
    }
  }

  function update() {
    ticking = false;
    const y = Math.min(700, Math.max(0, lastY));
    const bgPar = y * 0.032; // subtle: avoids motion sickness
    const stagePar = y * 0.012;

    // Use CSS variables so we don't override CSS animations on spotlights.
    if (bg) hero.style.setProperty("--bg-par", `${bgPar}px`);
    if (stage) hero.style.setProperty("--stage-par", `${stagePar}px`);

    if (neonTop) neonTop.style.opacity = String(0.55 + Math.min(0.35, y / 2000));
    if (neonBottom) neonBottom.style.opacity = String(0.55 + Math.min(0.35, y / 2000));
  }

  window.addEventListener("scroll", onScroll, { passive: true });
  update();
}

/* =========================
   Mobile menu
   ========================= */
function setupMenu() {
  const btn = $("[data-menu-btn]");
  const menu = $("[data-menu]");
  if (!btn || !menu) return;

  const close = () => {
    btn.setAttribute("aria-expanded", "false");
    menu.classList.remove("is-open");
  };

  btn.addEventListener("click", () => {
    const isOpen = btn.getAttribute("aria-expanded") === "true";
    btn.setAttribute("aria-expanded", String(!isOpen));
    menu.classList.toggle("is-open", !isOpen);
  });

  // Close when clicking a menu link
  $$(".mobile-nav__link", menu).forEach((a) => a.addEventListener("click", close));

  // Close on ESC
  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") close();
  });
}

/* =========================
   Topbar elevation on scroll
   ========================= */
function setupTopbarElevation() {
  const topbar = document.querySelector("[data-elevate]");
  if (!topbar) return;

  const update = () => {
    const elevated = (window.scrollY || 0) > 10;
    topbar.setAttribute("data-elevated", elevated ? "true" : "false");
  };
  window.addEventListener("scroll", update, { passive: true });
  update();
}

/* =========================
   Toast micro-interactions
   ========================= */
function setupToasts() {
  const toast = $(".toast");
  if (!toast) return;
  const text = $(".toast__text", toast);

  let hideTimer = null;

  function show(msg) {
    if (!text) return;
    if (hideTimer) window.clearTimeout(hideTimer);

    text.textContent = msg;
    toast.hidden = false;
    toast.animate(
      [
        { opacity: 0, transform: "translate(-50%, 10px) scale(.98)" },
        { opacity: 1, transform: "translate(-50%, 0) scale(1)" },
      ],
      { duration: 240, easing: "ease-out", fill: "forwards" }
    );

    hideTimer = window.setTimeout(() => {
      toast.animate(
        [
          { opacity: 1, transform: "translate(-50%, 0) scale(1)" },
          { opacity: 0, transform: "translate(-50%, 8px) scale(.98)" },
        ],
        { duration: 220, easing: "ease-in", fill: "forwards" }
      );
      window.setTimeout(() => (toast.hidden = true), 220);
    }, 1800);
  }

  // Buttons that have data-toast attribute
  $$("[data-toast]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const msg = btn.getAttribute("data-toast") || "Bollywood mode: ON";
      show(msg);
    });
  });
}

/* =========================
   Opening cinematic intro
   ========================= */
function setupOpeningIntro() {
  const intro = document.querySelector("[data-opening-intro]");
  if (!intro) return;

  const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (prefersReduced) {
    intro.remove();
    return;
  }

  let done = false;

  const finish = () => {
    if (done) return;
    done = true;
    intro.classList.add("opening-intro--done");
    window.setTimeout(() => {
      intro.remove();
    }, 500);
  };

  // Auto-complete after ~3.5s
  const timeoutId = window.setTimeout(finish, 3500);

  // Skip on any click/tap
  intro.addEventListener("click", () => {
    window.clearTimeout(timeoutId);
    finish();
  });
}

/* =========================
   Interactive games tips panel
   ========================= */
function setupGameTips() {
  const toggle = document.querySelector("[data-tips-toggle]");
  const panel = document.querySelector("[data-tips-panel]");
  if (!toggle || !panel) return;

  let isOpen = false;

  const setOpen = (next) => {
    isOpen = next;
    panel.classList.toggle("is-open", isOpen);
    panel.setAttribute("aria-hidden", isOpen ? "false" : "true");
  };

  toggle.addEventListener("click", () => {
    setOpen(!isOpen);
  });
}

/* =========================
   Init
   ========================= */
document.addEventListener("DOMContentLoaded", () => {
  applyConfig();
  setupOpeningIntro();
  setupReveals();
  setupParallax();
  setupMenu();
  setupTopbarElevation();
  setupToasts();
  setupGameTips();
});

