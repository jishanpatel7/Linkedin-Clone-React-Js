import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyDb35UERbr7iyatmvHnIsNbq57koHBuMkI",
    authDomain: "linkedin-clone-jp-5f7a2.firebaseapp.com",
    projectId: "linkedin-clone-jp-5f7a2",
    storageBucket: "linkedin-clone-jp-5f7a2.appspot.com",
    messagingSenderId: "488387492198",
    appId: "1:488387492198:web:62f500f312514443a370a7",
    measurementId: "G-GZ04J4TWQC"
  };

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {provider,auth, db };

   