// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import firebase from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
//   authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
//   databaseURL: process.env.REACT_APP_FIREBASE_DB_URL,
//   projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
//   appId: process.env.REACT_APP_FIREBASE_APP_ID,
// };

const firebaseConfig = {
  apiKey: "AIzaSyDV6slT6gC3_LAiY8BfntgtyOB1wzkRESU",
  authDomain: "random-food-78556.firebaseapp.com",
  databaseURL: "https://random-food-78556-default-rtdb.firebaseio.com",
  projectId: "random-food-78556",
  storageBucket: "random-food-78556.appspot.com",
  messagingSenderId: "656523554283",
  appId: "1:656523554283:web:3ea66f5582c2e2bb553dae",
  measurementId: "G-4L61SWW3SK",
};

// console.log(process.env.REACT_APP_FIREBASE_API_KEY);
// Initialize Firebase
// const firebaseApp = firebase.initializeApp(firebaseConfig);
const firebaseApp = initializeApp(firebaseConfig);
export default firebaseApp;
