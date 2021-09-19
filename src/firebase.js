import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCqiC4lAQul6t0X7GB3v98FPw2oF_IczOM",
    authDomain: "lta-search.firebaseapp.com",
    projectId: "lta-search",
    storageBucket: "lta-search.appspot.com",
    messagingSenderId: "471408897537",
    appId: "1:471408897537:web:484bb4907eb4db93931a00",
    measurementId: "G-V77CPYMBK8"
  };

firebase.initializeApp(firebaseConfig);
export const database = firebase.firestore();
export const auth = firebase.auth();
auth.setPersistence(firebase.auth.Auth.Persistence.SESSION)
