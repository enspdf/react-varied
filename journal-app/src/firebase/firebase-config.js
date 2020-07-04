import "firebase/auth";
import "firebase/firestore";

import firebase from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDiGhwLzI-YpDqAHFB_DB3x111jK2N-LjM",
  authDomain: "fir-global-a3068.firebaseapp.com",
  databaseURL: "https://fir-global-a3068.firebaseio.com",
  projectId: "fir-global-a3068",
  storageBucket: "fir-global-a3068.appspot.com",
  messagingSenderId: "273497438908",
  appId: "1:273497438908:web:72f63c36422a0ba9e4aeb9",
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { db, googleAuthProvider, firebase };
