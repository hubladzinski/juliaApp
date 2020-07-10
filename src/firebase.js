import * as firebase from "firebase/app";
import "firebase/analytics";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB3Kg_9rrtamV4sJYCcQC-EWv2jS5lPwE4",
  authDomain: "juliasite-7b4ef.firebaseapp.com",
  databaseURL: "https://juliasite-7b4ef.firebaseio.com",
  projectId: "juliasite-7b4ef",
  storageBucket: "juliasite-7b4ef.appspot.com",
  messagingSenderId: "48345262322",
  appId: "1:48345262322:web:9f3109bbbb0a2e6413886b",
  measurementId: "G-GMXNDKZH0M",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

function sendMessageToDB(message) {
  return firebase
    .firestore()
    .collection("messages")
    .doc()
    .set({
      message: message.message,
      telephone: message.telephone,
      date: firebase.firestore.Timestamp.fromDate(message.date),
    })
    .then(() => true)
    .catch((error) => {
      console.error(error);
      return false;
    });
}

export { sendMessageToDB };
