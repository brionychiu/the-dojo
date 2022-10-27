import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyD2p0MiEYyj0ZPyCDx_hf_7-pcBddj2jJ8",
    authDomain: "the-dojo-b5806.firebaseapp.com",
    projectId: "the-dojo-b5806",
    storageBucket: "the-dojo-b5806.appspot.com",
    messagingSenderId: "203052803602",
    appId: "1:203052803602:web:4640e3e290e2fbafba5acb"
  };

// init firebase
firebase.initializeApp(firebaseConfig)

// init services
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()

// timestamp
const timestamp = firebase.firestore.Timestamp

export { projectFirestore, projectAuth, timestamp }