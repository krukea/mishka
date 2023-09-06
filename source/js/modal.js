const openPopup = document.querySelector(".buy__btn");
const popup = document.querySelector(".add-to-cart");

openPopup.addEventListener("click", (e) => {
  popup.classList.remove("modal--hidden");
});

window.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    popup.classList.add("modal--hidden");
  }
});

popup.addEventListener("click", (e) => {
  console.log(e.target);
  if (e.target === popup && !popup.classList.contains("modal--hidden")) {
    popup.classList.add("modal--hidden");
  }
});
