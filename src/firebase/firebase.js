import firebase from "firebase/app";

import "firebase/auth";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyCE1J0oLFW1lHKPKNMR63gTh1fwLyX70s4",
  authDomain: "qualic-2d1d5.firebaseapp.com",
  databaseURL: "https://qualic-2d1d5.firebaseio.com",
  projectId: "qualic-2d1d5",
  storageBucket: "qualic-2d1d5.appspot.com",
  messagingSenderId: "935946837057",
  appId: "1:935946837057:web:e17bbe52723f34c4b47ac0",
  measurementId: "G-931MZNY34R"
};

export const myFirebase = firebase.initializeApp(config);
export const db = myFirebase.firestore();
