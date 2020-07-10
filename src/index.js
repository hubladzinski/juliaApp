import "./index.scss";
import "./portfolioImages.scss";
import { sendMessageToDB } from "./firebase";
import * as firebase from "firebase/app";

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

//Burger menu jump link
function jumpLink() {
  if (nav.classList.contains("white-ovveride")) {
    checkbox.checked = false;
  }
}

//Google maps function
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

sendButton.addEventListener("click", (e) => {
  //Stop form from sending data
  e.preventDefault();

  let message = {};
  let phoneNumber = document.querySelector("#phoneNumber").value;
  let messageField = document.querySelector("#message").value;
  if (document.querySelector("#phoneNumber").value) {
    message = {
      message: messageField,
      telephone: phoneNumber,
      date: new Date(Date.now()),
    };
    let kek = sendMessageToDB(message);
    kek.then((response) => {
      informUser(response);
      if (response) {
        sendEmail(message);
      }
    });
  } else {
    messagePopup.textContent = "Wpisz telefon";
    if (!messagePopup.classList.contains("transition"))
      messagePopup.classList.add("transition");
  }
});

messagePopup.addEventListener("click", () => {
  messagePopup.classList.remove("transition");
});

function informUser(responseStatus) {
  if (responseStatus) {
    messagePopup.textContent = "Wiadomość wysłana";
    if (!messagePopup.classList.contains("transition"))
      messagePopup.classList.add("transition");
  } else {
    messagePopup.textContent = "Błąd wysyłania wiadomości";
    if (!messagePopup.classList.contains("transition"))
      messagePopup.classList.add("transition");
  }
}

function sendEmail(messageData) {
  let myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  let raw = JSON.stringify({
    message: messageData.message,
    telephone: messageData.telephone,
    date: messageData.date,
  });

  let requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
  };

  fetch(
    "https://us-central1-juliasite-7b4ef.cloudfunctions.net/sendMail",
    requestOptions
  );
}

window.initMap = initMap;
