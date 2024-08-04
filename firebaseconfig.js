
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-firestore.js ";


 const firebaseConfig = {
   apiKey: "AIzaSyA_vqCUnggC2l6pXdltghPr9nLxV62FOhI",
   authDomain: "simpletodoapp-fd017.firebaseapp.com",
   projectId: "simpletodoapp-fd017",
   storageBucket: "simpletodoapp-fd017.appspot.com",
   messagingSenderId: "1034169285092",
   appId: "1:1034169285092:web:daa89551cc4b8c627f6ff1",
   measurementId: "G-2X2GB4TTP8"
 };




 // Initialize Firebase
 const app = initializeApp(firebaseConfig);
 export const db = getFirestore(app);