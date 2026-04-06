/* =============================================================
   nav.js  —  Jekyll GitHub Pages navigation
   Place at: assets/js/nav.js
   NO Liquid front matter — plain JS, runs after DOMContentLoaded.
   ============================================================= */

document.addEventListener('DOMContentLoaded', function () {

  /* ── Elements ──────────────────────────────────────────────── */
  var menuToggle  = document.getElementById('menu-toggle');
  var siteNav     = document.getElementById('site-nav');
  var backdrop    = document.getElementById('nav-backdrop');
  var dropItems   = document.querySelectorAll('.nav-item.has-drop');
  var darkBtns    = document.querySelectorAll('.dark-toggle');

  // Safety check — header may not be on every page
  if (!menuToggle || !siteNav) return;

  /* ── Helpers ───────────────────────────────────────────────── */
  function isMobile() {
    return window.innerWidth <= 768;
  }

  /* ── Mobile drawer ─────────────────────────────────────────── */
  function openDrawer() {
    siteNav.classList.add('is-open');
    menuToggle.classList.add('is-open');
    menuToggle.setAttribute('aria-expanded', 'true');
    menuToggle.setAttribute('aria-label', 'Close menu');
    if (backdrop) backdrop.classList.add('is-visible');
    document.body.style.overflow = 'hidden';
  }

  function closeDrawer() {
    siteNav.classList.remove('is-open');
    menuToggle.classList.remove('is-open');
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.setAttribute('aria-label', 'Open menu');
    if (backdrop) backdrop.classList.remove('is-visible');
    document.body.style.overflow = '';
    closeAllDrops();
  }

  menuToggle.addEventListener('click', function () {
    if (siteNav.classList.contains('is-open')) {
      closeDrawer();
    } else {
      openDrawer();
    }
  });

  if (backdrop) {
    backdrop.addEventListener('click', function () {
      closeDrawer();
    });
  }

  /* ── Dropdowns ─────────────────────────────────────────────── */
  function openDrop(item) {
    item.classList.add('open');
    var btn = item.querySelector('.drop-btn');
    if (btn) btn.setAttribute('aria-expanded', 'true');
  }

  function closeDrop(item) {
    item.classList.remove('open');
    var btn = item.querySelector('.drop-btn');
    if (btn) btn.setAttribute('aria-expanded', 'false');
  }

  function closeAllDrops(except) {
    dropItems.forEach(function (item) {
      if (item !== except) closeDrop(item);
    });
  }

  dropItems.forEach(function (item) {
    var btn = item.querySelector('.drop-btn');
    if (!btn) return;

    /* Click — works for both mobile accordion and desktop fallback */
    btn.addEventListener('click', function (e) {
      e.stopPropagation();
      var isOpen = item.classList.contains('open');
      closeAllDrops(isOpen ? null : item);
      if (isOpen) {
        closeDrop(item);
      } else {
        openDrop(item);
      }
    });

    /* Desktop hover */
    item.addEventListener('mouseenter', function () {
      if (!isMobile()) {
        closeAllDrops(item);
        openDrop(item);
      }
    });

    item.addEventListener('mouseleave', function () {
      if (!isMobile()) {
        closeDrop(item);
      }
    });
  });

  /* Close dropdowns on outside click */
  document.addEventListener('click', function (e) {
    if (!siteNav.contains(e.target) && e.target !== menuToggle) {
      closeAllDrops();
      if (isMobile() && siteNav.classList.contains('is-open')) {
        closeDrawer();
      }
    }
  });

  /* Escape key */
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      closeAllDrops();
      if (isMobile()) closeDrawer();
    }
  });

  /* Resize: reset mobile state when expanding to desktop */
  var resizeTimer;
  window.addEventListener('resize', function () {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function () {
      if (!isMobile() && siteNav.classList.contains('is-open')) {
        closeDrawer();
      }
    }, 150);
  });

  /* ── Dark mode ─────────────────────────────────────────────── */
  var THEME_KEY = 'preferred-theme';

  function getSystemPref() {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark';
    }
    return 'light';
  }

  function getSavedTheme() {
    try {
      return localStorage.getItem(THEME_KEY);
    } catch (e) {
      return null;
    }
  }

  function saveTheme(theme) {
    try {
      localStorage.setItem(THEME_KEY, theme);
    } catch (e) { /* localStorage blocked (private browsing etc.) */ }
  }

  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    saveTheme(theme);
  }

  function toggleTheme() {
    var current = document.documentElement.getAttribute('data-theme');
    applyTheme(current === 'dark' ? 'light' : 'dark');
  }

  /* Initialise theme immediately to avoid flash */
  var savedTheme = getSavedTheme();
  applyTheme(savedTheme || getSystemPref());

  /* Wire up ALL dark toggle buttons (desktop header + mobile drawer) */
  darkBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      toggleTheme();
    });
  });

  /* Respect OS-level theme changes */
  if (window.matchMedia) {
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function (e) {
      if (!getSavedTheme()) {
        applyTheme(e.matches ? 'dark' : 'light');
      }
    });
  }

  /* ── Mobile focus trap ─────────────────────────────────────── */
  siteNav.addEventListener('keydown', function (e) {
    if (!isMobile() || !siteNav.classList.contains('is-open') || e.key !== 'Tab') return;

    var focusable = siteNav.querySelectorAll(
      'a[href], button:not([disabled]), input:not([disabled]), [tabindex]:not([tabindex="-1"])'
    );
    if (!focusable.length) return;

    var first = focusable[0];
    var last  = focusable[focusable.length - 1];

    if (e.shiftKey) {
      if (document.activeElement === first) {
        e.preventDefault();
        last.focus();
      }
    } else {
      if (document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }
  });

});