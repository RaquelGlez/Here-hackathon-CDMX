import firebase from "firebase";
import "firebase/firestore";

var config = {
  apiKey: "AIzaSyA5dNM-1eA6O0YhhCdTEfj4QPWiuhankWw",
  authDomain: "schoolship-here.firebaseapp.com",
  databaseURL: "https://schoolship-here.firebaseio.com",
  projectId: "schoolship-here",
  storageBucket: "schoolship-here.appspot.com",
  messagingSenderId: "423731107589"
};

firebase.initializeApp(config);
const db = firebase.firestore();
const auth = firebase.auth();

const settings = {
  timestampsInSnapshots: true
};

db.settings(settings);

const usersCollection = db.collection("users");
const assistanceCollection = db.collection("assistance");

export { db, auth, usersCollection, assistanceCollection };
