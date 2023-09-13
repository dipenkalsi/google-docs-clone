import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
import { getAuth } from "firebase/auth";
const firebaseConfig = {
    apiKey: "AIzaSyCRjw6wI3b95G88IZUH0uqDEBlxQH-eYdk",
    authDomain: "docs-clone-353ca.firebaseapp.com",
    projectId: "docs-clone-353ca",
    storageBucket: "docs-clone-353ca.appspot.com",
    messagingSenderId: "982217722010",
    appId: "1:982217722010:web:c3f3f928b5fe1d1407b723"
  };

  const app = initializeApp(firebaseConfig);
  export const db = getFirestore(app)
  export const auth = getAuth(app)