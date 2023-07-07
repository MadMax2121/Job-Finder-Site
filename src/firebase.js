import firebase from 'firebase';


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAh3Bc_FwHrg5P2NaTHhM77H6V5KePOD2I",
  authDomain: "jobfinder-e8577.firebaseapp.com",
  projectId: "jobfinder-e8577",
  storageBucket: "jobfinder-e8577.appspot.com",
  messagingSenderId: "319392375077",
  appId: "1:319392375077:web:3208fb39155651fc123acc",
  measurementId: "G-M9ZNHC17PX"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db, auth};