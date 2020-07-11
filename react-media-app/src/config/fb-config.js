import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

import firebase from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDiGhwLzI-YpDqAHFB_DB3x111jK2N-LjM",
  authDomain: "fir-global-a3068.firebaseapp.com",
  databaseURL: "https://fir-global-a3068.firebaseio.com",
  projectId: "fir-global-a3068",
  storageBucket: "fir-global-a3068.appspot.com",
  messagingSenderId: "273497438908",
  appId: "1:273497438908:web:482cf80e9d2a4ad5e4aeb9",
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const storage = firebase.storage();
export const db = firebase.firestore();
