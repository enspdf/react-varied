import firebase from 'firebase/app'
import 'firebase/database'
import 'firebase/analytics'

const firebaseConfig = {
    apiKey: "AIzaSyBs5-jfyGm16_vnZdic-IfoyNXG6TUruaM",
    authDomain: "fir-react-varied.firebaseapp.com",
    databaseURL: "https://fir-react-varied-default-rtdb.firebaseio.com",
    projectId: "fir-react-varied",
    storageBucket: "fir-react-varied.appspot.com",
    messagingSenderId: "846149220914",
    appId: "1:846149220914:web:a7a8cf47cbdff109c2da2b",
    measurementId: "G-BGH8SV613Q"
}

firebase.initializeApp(firebaseConfig)
firebase.analytics()

export default firebase.database()