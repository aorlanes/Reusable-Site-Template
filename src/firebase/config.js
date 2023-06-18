// Import the functions you need from the SDKs you need
import * as firebase from "firebase/app";
import "firebase/storage";
import "firebse/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBXseDalh2K9yUPqiov6yVTUYyGo6iNYB4",
  authDomain: "veraandsons-a0856.firebaseapp.com",
  projectId: "veraandsons-a0856",
  storageBucket: "veraandsons-a0856.appspot.com",
  messagingSenderId: "1064424806531",
  appId: "1:1064424806531:web:4fb24e61ed4097c097e3b6"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const fbStorage = firebase.storage();
const fbFirestore = firebase.firestore();

export { fbStorage, fbFirestore };