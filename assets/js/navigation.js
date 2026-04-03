// Mobile Menu

document.getElementById("menu-toggle")
.addEventListener("click", function(){

document.getElementById("site-nav")
.classList.toggle("show");

});



// Dark Mode

document.getElementById("dark-toggle")
.addEventListener("click", function(){

document.body.classList.toggle("dark");

});

const search = document.querySelector(".nav-search input");

search?.addEventListener("keyup", function(){

console.log("Searching:", this.value);

});