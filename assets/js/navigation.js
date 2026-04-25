// Toggle main menu
const menuToggle = document.getElementById("menu-toggle");
const nav = document.getElementById("nav");

menuToggle.addEventListener("click", () => {
  nav.classList.toggle("active");
});

// Handle dropdowns
document.querySelectorAll(".has-child").forEach(item => {
  const btn = item.querySelector(".dropdown-toggle");

  btn.addEventListener("click", (e) => {
    e.stopPropagation();

    // Close others (clean UX)
    document.querySelectorAll(".has-child").forEach(i => {
      if (i !== item) i.classList.remove("open");
    });

    item.classList.toggle("open");
  });
});

// Close when clicking outside
document.addEventListener("click", (e) => {
  if (!e.target.closest(".has-child")) {
    document.querySelectorAll(".has-child").forEach(item => {
      item.classList.remove("open");
    });
  }
});