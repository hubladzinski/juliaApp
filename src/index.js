let nav = document.getElementById("navbar");
let burger = document.getElementById("burger");
let hasScrolled = false;

let checkbox = document.querySelector("#menu-burger");
let links = document.querySelectorAll("a");

const instaButton = document.querySelector("#insta-button");

checkbox.addEventListener("change", function () {
  if (this.checked && hasScrolled == false) {
    nav.classList.add("white-ovveride");
  } else {
    nav.classList.remove("white-ovveride");
  }
});

instaButton.addEventListener("click", () => {
  window.open("https://www.instagram.com/julia_inska/");
});

links.forEach((link) => {
  link.addEventListener("click", () => jumpLink());
});

function jumpLink() {
  if (nav.classList.contains("white-ovveride")) {
    checkbox.checked = false;
  }
}
function initMap() {
  let bydgoszcz = { lat: 53.125, lng: 18.011111 };

  let map = new google.maps.Map(document.getElementById("map"), {
    zoom: 9,
    center: bydgoszcz,
  });

  let cityCircle = new google.maps.Circle({
    strokeColor: "#FF0000",
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: "#FF0000",
    fillOpacity: 0.2,
    map: map,
    center: bydgoszcz,
    radius: 20000,
  });
}
window.initMap = initMap;
