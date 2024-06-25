import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const FIREBASE_CONFIG = {
  apiKey: "AIzaSyAwCp2LFwDIH2Td2oJGz8LbAJIdUn6R8pQ",
  authDomain: "alta-875f0.firebaseapp.com",
  projectId: "alta-875f0",
  storageBucket: "alta-875f0.appspot.com",
  messagingSenderId: "495904334112",
  appId: "1:495904334112:web:ad998e144ec6c657b13745",
  measurementId: "G-7QPJ6QFYHK",
};
// Initialize Firebase
const app = initializeApp(FIREBASE_CONFIG);
// Initialize Cloud Firestore and get a reference to the service
const FIREBASE = getFirestore(app);
// Object.freeze(FIREBASE)
export default FIREBASE