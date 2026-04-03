


const home = document.querySelector('.home-elite');

const observer = new IntersectionObserver(entries => {
  if (entries[0].isIntersecting) {
    home.classList.add('visible');
  }
});

observer.observe(home);



