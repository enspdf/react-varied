import Firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
// import { seedDatabase } from "../seed";

const config = {
  apiKey: "AIzaSyDiGhwLzI-YpDqAHFB_DB3x111jK2N-LjM",
  authDomain: "fir-global-a3068.firebaseapp.com",
  databaseURL: "https://fir-global-a3068.firebaseio.com",
  projectId: "fir-global-a3068",
  storageBucket: "fir-global-a3068.appspot.com",
  messagingSenderId: "273497438908",
  appId: "1:273497438908:web:01f066864891dd55e4aeb9",
};

const firebase = Firebase.initializeApp(config);

// seedDatabase(firebase);

export { firebase };
