import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDH-Y_tsJQVKnA049Rt9PFC513XjYmsKws",
    authDomain: "sql-demos-b4a97.firebaseapp.com",
    projectId: "sql-demos-b4a97",
    storageBucket: "sql-demos-b4a97.appspot.com",
    messagingSenderId: "639309477056",
    appId: "1:639309477056:web:7f85a5f91674fc6a48e925",
    measurementId: "G-13ZQTV0GCM"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();