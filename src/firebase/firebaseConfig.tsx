import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBrWbov8fb34t-1MBJ99ONETiybTeKQevQ",
  authDomain: "task-do-fc2ea.firebaseapp.com",
  projectId: "task-do-fc2ea",
  storageBucket: "task-do-fc2ea.appspot.com",
  messagingSenderId: "757184607582",
  appId: "1:757184607582:web:5761fa17f43dc0fc294bcf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);