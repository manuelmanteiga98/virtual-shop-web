import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyA4XkzGdteP4I68OHEqLA3qvel3lgpL_cs",
  authDomain: "market-app-3d249.firebaseapp.com",
  projectId: "market-app-3d249",
  storageBucket: "market-app-3d249.appspot.com",
  messagingSenderId: "394294858448",
  appId: "1:394294858448:web:386df80d2942ea4fe504d5",
  measurementId: "G-PMQMEJ02H6",
};

const app = firebase.initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = app.firestore();
const storage = getStorage(app);

export { auth, db, storage };
