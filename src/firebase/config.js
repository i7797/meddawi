import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


// configuration
const firebaseConfig = {
  apiKey: "AIzaSyDuaajsSeFEHr6eFUC08mXmsnZFbjc3xrc",
  authDomain: "meddawii.firebaseapp.com",
  projectId: "meddawii",
  storageBucket: "meddawii.appspot.com",
  messagingSenderId: "167299985120",
  appId: "1:167299985120:web:6718d86b6be8fbe5556a85"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
