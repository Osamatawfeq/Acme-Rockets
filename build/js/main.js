const initApp = () => {
  const burgerBtn = document.getElementById("burger-button");
  const mobileMenu = document.getElementById("mobile-memu");
};
const burgerBtn = document.getElementById("burger-button");
const links = document.querySelector(".links");
const lis = document.querySelectorAll("li");
const button = document.querySelector(".button-one");

burgerBtn.addEventListener("click", function () {
  links.classList.toggle("show-links");
});

lis.forEach((li) => {
  li.addEventListener("click", () => {
    links.classList.remove("show-links");
    button.setAttribute("aria-expanded", "false");
  });
});

button.addEventListener("click", () => {
  const currentState = button.getAttribute("aria-expanded");

  if (currentState === "false") {
    button.setAttribute("aria-expanded", "true");
  } else {
    button.setAttribute("aria-expanded", "false");
  }
});
