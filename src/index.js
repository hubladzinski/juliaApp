var nav = document.getElementById("navbar");
var burger = document.getElementById("burger");
var hasScrolled = false;

window.addEventListener("scroll", function () {
  if (window.scrollY == 0) {
    nav.classList.remove("navigation-scrolling");
    burger.classList.remove("menu-burger-label-scrolling");
    nav.classList.add("navigation");
    hasScrolled = false;
  } else {
    nav.classList.remove("navigation");
    nav.classList.add("navigation-scrolling");
    burger.classList.add("menu-burger-label-scrolling");
    hasScrolled = true;
  }
});

var checkbox = document.querySelector("#menu-burger");

checkbox.addEventListener("change", function () {
  if (this.checked && hasScrolled == false) {
    nav.classList.add("white-ovveride");
  } else {
    nav.classList.remove("white-ovveride");
  }
});
