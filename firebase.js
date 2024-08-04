// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDskGynsydZIPpkbgJTlTGsgHc6Je-u6-Q",
  authDomain: "pantry-tracker-ee1102.firebaseapp.com",
  projectId: "pantry-tracker-ee1102",
  storageBucket: "pantry-tracker-ee1102.appspot.com",
  messagingSenderId: "627396403615",
  appId: "1:627396403615:web:d517ff0692b9e56eef5daa",
  measurementId: "G-X52HTJWBX0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const firestore = getFirestore(app);

export {app, analytics, firestore}