let nav = document.getElementById("navbar");
let burger = document.getElementById("burger");
let hasScrolled = false;

let checkbox = document.querySelector("#menu-burger");
let links = document.querySelectorAll("a");

checkbox.addEventListener("change", function () {
  if (this.checked && hasScrolled == false) {
    nav.classList.add("white-ovveride");
  } else {
    nav.classList.remove("white-ovveride");
  }
});

links.forEach((link) => {
  link.addEventListener("click", () => jumpLink());
});

function jumpLink() {
  if (nav.classList.contains("white-ovveride")) {
    checkbox.checked = false;
  }
}
