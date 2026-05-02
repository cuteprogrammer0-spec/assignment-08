import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; 

const firebaseConfig = {
  apiKey: "AIzaSyCogJ9uI7Zsw7stSP2yCIL113ON6n6b2OA",
  authDomain: "beginner-f0b04.firebaseapp.com",
  projectId: "beginner-f0b04",
  storageBucket: "beginner-f0b04.firebasestorage.app",
  messagingSenderId: "888684562419",
  appId: "1:888684562419:web:61aca28ba018ab100c7486",
  measurementId: "G-QN5Q53ENBC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export const auth = getAuth(app);