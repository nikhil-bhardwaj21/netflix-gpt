// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAS3YX0u3CxQh4PPtv0bwuSKVjXAEtOVYg",
  authDomain: "netflixgpt-1a2e3.firebaseapp.com",
  projectId: "netflixgpt-1a2e3",
  storageBucket: "netflixgpt-1a2e3.appspot.com",
  messagingSenderId: "533188507741",
  appId: "1:533188507741:web:eba8a940b8cf3b956435b4",
  measurementId: "G-M661Z6EC16"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);