import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAtTCO4RXGV0I4sdSQ2guXRCfoUKdBHwZ4",
    authDomain: "discord-clown.firebaseapp.com",
    projectId: "discord-clown",
    storageBucket: "discord-clown.appspot.com",
    messagingSenderId: "1092303259087",
    appId: "1:1092303259087:web:7d73ef901e42630734feba",
    measurementId: "G-LBCEPZN01K"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth,provider};
  export default db;