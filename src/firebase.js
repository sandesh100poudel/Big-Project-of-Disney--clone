import firebase from "firebase/compat/app";

import "firebase/compat/auth";
import "firebase/compat/firestore"
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyD_SmO3rdqiZDPpFZH2Y8h2sju_uPM-WYQ",
  authDomain: "disney-clone-fb4bb.firebaseapp.com",
  projectId: "disney-clone-fb4bb",
  storageBucket: "disney-clone-fb4bb.appspot.com",
  messagingSenderId: "665443812481",
  appId: "1:665443812481:web:c687eb8a125c1083523980",
  measurementId: "G-3S41691PWK"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();


  export { auth, provider, storage };
  export default db;

