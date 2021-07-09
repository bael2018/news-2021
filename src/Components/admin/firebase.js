import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

const firebaseConfig = {
    apiKey: "AIzaSyB8UNDjhWfUAJA_jARBSId0yh6k4UokgWk",
    authDomain: "news-2f85f.firebaseapp.com",
    databaseURL: "https://news-2f85f-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "news-2f85f",
    storageBucket: "news-2f85f.appspot.com",
    messagingSenderId: "462531376799",
    appId: "1:462531376799:web:29a4fe95b8aeeac06854aa"
};

export const fire = firebase;
export const provider = new firebase.auth.GoogleAuthProvider()
firebase.initializeApp(firebaseConfig)
