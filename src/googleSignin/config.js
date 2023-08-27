// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import {FacebookAuthProvider, getAuth,GoogleAuthProvider} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCZbBnOyx6h_eVLGqYNShMDORzbHEJ8CSU",
  authDomain: "wiin-auth.firebaseapp.com",
  projectId: "wiin-auth",
  storageBucket: "wiin-auth.appspot.com",
  messagingSenderId: "838229603838",
  appId: "1:838229603838:web:cdd2e48cffc61ff1d73caf",
  measurementId: "G-DHP212FGQ8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth=getAuth(app)
const provider = new GoogleAuthProvider();
const fbprovider = new FacebookAuthProvider();
export {auth,provider,fbprovider};