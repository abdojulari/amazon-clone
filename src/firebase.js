import firebase from 'firebase';
const firebaseConfig = {
    apiKey: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
    authDomain: "clone-27f18.firebaseapp.com",
    databaseURL: "https://clone-27f18.firebaseio.com",
    projectId: "clone-27f18",
    storageBucket: "clone-27f18.appspot.com",
    messagingSenderId: "50447289627",
    appId: "1:50447289627:web:3d2493694d8f9d84fed7be",
    measurementId: "G-N81LDLRTD5"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth };
