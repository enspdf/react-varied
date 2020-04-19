import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = firebase.initializeApp({
  apiKey: "AIzaSyB76_ipzbD227fEs1WRcYOMxCRbJ_Jaj_w",
  authDomain: "todoist-app-c7d2a.firebaseapp.com",
  databaseURL: "https://todoist-app-c7d2a.firebaseio.com",
  projectId: "todoist-app-c7d2a",
  storageBucket: "todoist-app-c7d2a.appspot.com",
  messagingSenderId: "795918352867",
  appId: "1:795918352867:web:45dbd8147d067463d360d6",
});

export { firebaseConfig as firebase };
