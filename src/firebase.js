import firebase from 'firebase' ; 

const firebaseConfig = {
    apiKey: "AIzaSyCRSAgBCVUkqbw-mCyOWnHTSGJKQGwXJ4U",
    authDomain: "netflix-clone-1299a.firebaseapp.com",
    projectId: "netflix-clone-1299a",
    storageBucket: "netflix-clone-1299a.appspot.com",
    messagingSenderId: "405747262781",
    appId: "1:405747262781:web:5552afe9b49404907b5154"
  };


// initialization

const firebase_initialization = firebase.initializeApp(firebaseConfig) ; 


// using firebase service

const db = firebase_initialization.firestore() ; 

const authentication = firebase.auth() ; 



export {authentication } ; 
export default db  ; 
