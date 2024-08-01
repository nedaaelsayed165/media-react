import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC0IUSTC9CXfVs4x-H_c4NQwwGngn0camE",
  authDomain: "my-posts-4e1e2.firebaseapp.com",
  projectId: "my-posts-4e1e2",
  storageBucket: "my-posts-4e1e2.appspot.com",
  messagingSenderId: "1065749717975",
  appId: "1:1065749717975:web:1664e0bb3ba9795de26192"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db, onAuthStateChanged };
