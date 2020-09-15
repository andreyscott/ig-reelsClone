// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyAtssMlCRcSSlSt-NKIEinnayT6RVq-aQw",
  authDomain: "ig-reels-ec778.firebaseapp.com",
  databaseURL: "https://ig-reels-ec778.firebaseio.com",
  projectId: "ig-reels-ec778",
  storageBucket: "ig-reels-ec778.appspot.com",
  messagingSenderId: "376902603411",
  appId: "1:376902603411:web:1b9a029d83c3f8a544f366",
  measurementId: "G-6VFVW0G899",
};

const firebaseApp = firebase.initializeApp
(firebaseConfig);

const db = firebaseApp.firestore();



export default db;