import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDfZ3d9Ia2DAO-Kc5-eVvWcH_bjbbe5rqc",
  authDomain: "ward-3c083.firebaseapp.com",
  projectId: "ward-3c083",
  storageBucket: "ward-3c083.appspot.com",
  messagingSenderId: "208944028167",
  appId: "1:208944028167:web:7c2af34b182d0b8750e8a2",
  measurementId: "G-XL74DHLVD5"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const database = getFirestore(app);
