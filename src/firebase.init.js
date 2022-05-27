// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBlYUfQuhc3LVsHYknScfgsMF7xqnzIgdE",
  authDomain: "car-parts-menufacturar.firebaseapp.com",
  projectId: "car-parts-menufacturar",
  storageBucket: "car-parts-menufacturar.appspot.com",
  messagingSenderId: "520940093279",
  appId: "1:520940093279:web:977f1fb23ab242e17f40ea"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth=getAuth(app)
export default auth ;