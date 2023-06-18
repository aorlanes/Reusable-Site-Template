import * as firebase from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBXseDalh2K9yUPqiov6yVTUYyGo6iNYB4",
  authDomain: "veraandsons-a0856.firebaseapp.com",
  projectId: "veraandsons-a0856",
  storageBucket: "veraandsons-a0856.appspot.com",
  messagingSenderId: "1064424806531",
  appId: "1:1064424806531:web:4fb24e61ed4097c097e3b6"
};

const app = firebase.initializeApp(firebaseConfig);
const storage = getStorage(app);
const firestore = getFirestore(app);

export { storage, firestore };