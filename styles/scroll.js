// Scrolling
var prevScrollpos = window.pageYOffset;
var navbar = document.getElementById("navbar");

window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;

  if (prevScrollpos > currentScrollPos) {
    navbar.style.top = "0";
  } else {
    navbar.style.top = "-120px";
  }

  prevScrollpos = currentScrollPos;
};

// sliding
const words = [
  "ORGANIZED!",
  "PRESENTABLE!",
  "SCHEDULED!",
];
let currentIndex = 0;
const wordElement = document.getElementById("word");

function changeWord() {
  wordElement.innerText = words[currentIndex];
  currentIndex = (currentIndex + 1) % words.length;
}

setInterval(changeWord, 2000);
