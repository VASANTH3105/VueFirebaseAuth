// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD7lHRmltZ5TqIsTuCE_xGY5YvSngK1qbY",
  authDomain: "unbitable-8ed3b.firebaseapp.com",
  projectId: "unbitable-8ed3b",
  storageBucket: "unbitable-8ed3b.appspot.com",
  messagingSenderId: "1084086022847",
  appId: "1:1084086022847:web:38b5a6e5df6610fd508c0a",
  measurementId: "G-5C12VS2VQR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const auth = getAuth(app);