// const menu = document.querySelector(".burger");
// const hero = document.querySelector("main");
// const head = document.querySelector("header");
// const drawer = document.querySelector(".drawer-text");

// menu.addEventListener("click", function (event) {
//   drawer.classList.toggle("open");
//   event.stopPropagation();
// });

// hero.addEventListener("click", function () {
//   drawer.classList.remove("open");
// });

// head.addEventListener("click", function () {
//   drawer.classList.remove("open");
// });

const DrawerInitiator = {
  init ({ button, drawer, content, burger }) {
    button.addEventListener('click', (event) => {
      this._toggleDrawer(event, drawer)
    })

    content.addEventListener('click', (event) => {
      this._closeDrawer(event, drawer)
    })

    burger.addEventListener('click', (event) => {
      this._toggleDrawer(event, drawer)
    })
  },

  _toggleDrawer (event, drawer) {
    event.stopPropagation()
    drawer.classList.toggle('open')
  },

  _closeDrawer (event, drawer) {
    event.stopPropagation()
    drawer.classList.remove('open')
  }
}

export default DrawerInitiator
