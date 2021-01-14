import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: "crow-clothing-db.firebaseapp.com",
  projectId: "crow-clothing-db",
  storageBucket: "crow-clothing-db.appspot.com",
  messagingSenderId: "650887226383",
  appId: "1:650887226383:web:a9a816744b144854a72f7a",
  measurementId: "G-97RWQPZQTG",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
