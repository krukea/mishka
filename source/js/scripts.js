const menyToggle = document.querySelector(".main-nav__toggle");
const mainNav = document.querySelector(".main-nav");

mainNav.classList.remove("main-nav--no-js");

menyToggle.addEventListener("click", (e) => {
  mainNav.classList.toggle("main-nav--closed");
  mainNav.classList.toggle("main-nav--opened");
});
