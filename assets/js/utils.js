document.querySelectorAll(".dropdown > a").forEach(link => {
  link.addEventListener("click", function(e) {
    if (window.innerWidth < 900) {
      e.preventDefault();
      this.parentElement.classList.toggle("open");
    }
  });
});