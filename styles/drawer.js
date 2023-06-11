// Drawer
const menu = document.querySelector(".burger");
const hero = document.querySelector("main");
const head = document.querySelector("header");
const drawer = document.querySelector(".drawer-text");

menu.addEventListener("click", function (event) {
  drawer.classList.toggle("open");
  event.stopPropagation();
});

hero.addEventListener("click", function () {
  drawer.classList.remove("open");
});

head.addEventListener("click", function () {
  drawer.classList.remove("open");
});

