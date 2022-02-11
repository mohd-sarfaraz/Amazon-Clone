import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyBmTAC1w0-kC3F8GSpGRHbcRBlmJ4SU4SM",
    authDomain: "project-89baa.firebaseapp.com",
    projectId: "project-89baa",
    storageBucket: "project-89baa.appspot.com",
    messagingSenderId: "33215392982",
    appId: "1:33215392982:web:2f537c54f609add12b2d77"
  };


  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export{ db, auth };