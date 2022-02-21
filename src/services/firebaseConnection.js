import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

//import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCigYee18gsuEM4u6ZQz8m6aOldhad1eZc",
  authDomain: "sistema-de-chamados-react.firebaseapp.com",
  projectId: "sistema-de-chamados-react",
  storageBucket: "sistema-de-chamados-react.appspot.com",
  messagingSenderId: "919494062058",
  appId: "1:919494062058:web:c8e2859a99245873654c93"
};

// Initialize Firebase
if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
}

export default firebase;
