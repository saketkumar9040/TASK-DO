import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from 
'firebase/auth';
import { getFirestore } from "firebase/firestore";

import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';

const firebaseConfig = {
  apiKey: "AIzaSyBrWbov8fb34t-1MBJ99ONETiybTeKQevQ",
  authDomain: "task-do-fc2ea.firebaseapp.com",
  projectId: "task-do-fc2ea",
  storageBucket: "task-do-fc2ea.appspot.com",
  messagingSenderId: "757184607582",
  appId: "1:757184607582:web:5761fa17f43dc0fc294bcf",
  databaseURL:"https://task-do-fc2ea-default-rtdb.asia-southeast1.firebasedatabase.app/"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});
export const db = getFirestore(app);