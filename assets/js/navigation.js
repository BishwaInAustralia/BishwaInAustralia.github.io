
/* ========================= MOBILE MENU ========================= */
const menuToggle = document.getElementById('menu-toggle');
const nav = document.getElementById('site-nav');

menuToggle.addEventListener('click', () => {
  nav.classList.toggle('show');
});

/* ========================= DROPDOWN TOGGLE ========================= */
const dropdownButtons = document.querySelectorAll('.dropdown-toggle');

dropdownButtons.forEach(button => {
  button.addEventListener('click', (e) => {
    e.stopPropagation();

    const parent = button.parentElement;

    // Close others
    document.querySelectorAll('.dropdown').forEach(d => {
      if (d !== parent) {
        d.classList.remove('open');
        d.querySelector('.dropdown-toggle')
          .setAttribute('aria-expanded', 'false');
      }
    });

    const isOpen = parent.classList.toggle('open');
    button.setAttribute('aria-expanded', isOpen);
  });
});

/* ========================= CLOSE ON OUTSIDE CLICK ========================= */
document.addEventListener('click', () => {
  document.querySelectorAll('.dropdown').forEach(d => {
    d.classList.remove('open');
    d.querySelector('.dropdown-toggle')
      .setAttribute('aria-expanded', 'false');
  });
});

/* ========================= ESC KEY CLOSE ========================= */
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    document.querySelectorAll('.dropdown').forEach(d => {
      d.classList.remove('open');
      d.querySelector('.dropdown-toggle')
        .setAttribute('aria-expanded', 'false');
    });
  }
});

/* ========================= DARK MODE ========================= */
const darkToggle = document.getElementById('dark-toggle');

darkToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark');
});
