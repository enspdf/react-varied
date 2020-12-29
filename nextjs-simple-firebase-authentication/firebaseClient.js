import firebase from "firebase/app";

const FIREBASE_CONFIG = {
  apiKey: "AIzaSyDiGhwLzI-YpDqAHFB_DB3x111jK2N-LjM",
  authDomain: "fir-global-a3068.firebaseapp.com",
  databaseURL: "https://fir-global-a3068.firebaseio.com",
  projectId: "fir-global-a3068",
  storageBucket: "fir-global-a3068.appspot.com",
  messagingSenderId: "273497438908",
  appId: "1:273497438908:web:62cbc4578913224ce4aeb9",
};

export default function firebaseClient() {
  if (!firebase.apps.length) {
    firebase.initializeApp(FIREBASE_CONFIG);
  }
}
