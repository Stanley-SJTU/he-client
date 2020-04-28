import firebase from "firebase";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAZvwn32DlFNsOv-r49ElYDq_U7y5eudoM",
  authDomain: "horizonisland.firebaseapp.com",
  databaseURL: "https://horizonisland.firebaseio.com",
  projectId: "horizonisland",
  storageBucket: "horizonisland.appspot.com",
  messagingSenderId: "288144064240",
  appId: "1:288144064240:web:1c0dc64fde81ab7ec24c35",
  measurementId: "G-95CYYRB37V",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
