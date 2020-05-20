let nav = document.getElementById("navbar");
let burger = document.getElementById("burger");
let hasScrolled = false;

let checkbox = document.querySelector("#menu-burger");
let links = document.querySelectorAll("a");

const instaButton = document.querySelector("#insta-button");
const messengerButton = document.querySelector("#messenger-button");
const sendButton = document.querySelector("#send-button");
const messagePopup = document.querySelector("#message-send-popup");

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

messengerButton.addEventListener("click", () => {
  window.open("https://www.facebook.com/Julia-Inska-104344307960361/");
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
  let bydgoszcz = { lat: 53.031111, lng: 18.008889 };

  let map = new google.maps.Map(document.getElementById("map"), {
    zoom: 10,
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
    radius: 15000,
  });
}
window.initMap = initMap;

sendButton.addEventListener("click", (e) => {
  e.preventDefault();
  sendData();
});

messagePopup.addEventListener("click", () => {
  messagePopup.classList.remove("transition");
});

function sendData() {
  let phoneNumber = document.querySelector("#phoneNumber").value;
  let message = document.querySelector("#message").value;
  let formData = new FormData();
  formData.append("phoneNumber", phoneNumber);
  formData.append("message", message);

  fetch("send.php", {
    method: "POST", // or 'PUT'
    body: formData,
  })
    .then((data) => {
      console.log("Success - POST");
      console.log(data);
      messagePopup.textContent = "Wiadomość wysłana";
      messagePopup.classList.add("transition");
    })
    .catch((error) => {
      console.error("Error - POST");
      console.log(error);
      messagePopup.textContent = "Błąd wysyłania wiadomości";
      messagePopup.classList.add("transition");
    });
}
