import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDSdKY8_ntETsn2hevvpRE3c3vU76ZhNkw",
  authDomain: "project-react-b5b1a.firebaseapp.com",
  projectId: "project-react-b5b1a",
  storageBucket: "project-react-b5b1a.appspot.com",
  messagingSenderId: "564218490551",
  appId: "1:564218490551:web:c4987700860e59f747e732",
  measurementId: "G-EW5MR3FPYD"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db, onAuthStateChanged };
