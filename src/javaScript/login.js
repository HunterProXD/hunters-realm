import { initializeApp } from 'firebase/app'
import {
    getFirestore, collection, onSnapshot,
    addDoc, deleteDoc, doc,
    query, where,
    orderBy, serverTimestamp,
    getDoc, updateDoc,
    
} from 'firebase/firestore'
import {
    getAuth,
    createUserWithEmailAndPassword,
    signOut, signInWithEmailAndPassword,
    onAuthStateChanged
} from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyBxfVvKxqRZgjB789czvwWhAWGlx1Sjdes",
    authDomain: "hunter-s-realm-5010d.firebaseapp.com",
    databaseURL: "https://hunter-s-realm-5010d-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "hunter-s-realm-5010d",
    storageBucket: "hunter-s-realm-5010d.appspot.com",
    messagingSenderId: "745492184124",
    appId: "1:745492184124:web:6d5099639fecfe78c21739",
    measurementId: "G-890J3HQP2N"
}

// initialize firebase
initializeApp(firebaseConfig)

// initialize services
const db = getFirestore()
const auth = getAuth()

// reference the collection
const colRef = collection(db, 'users')

// queries 
const q = query(colRef)

// get real time data from collection
onSnapshot(q, (snapshot) => {
    let users = []
    snapshot.docs.forEach((doc) => {
        users.push({ ...doc.data(), id: doc.id })
    })
    console.log(users)
})

// log user in
const loginForm = document.querySelector('.logIn')
loginForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const email = loginForm.email.value
    const password = loginForm.password.value

    console.log(email, password)

    signInWithEmailAndPassword(auth, email, password)
        .then((cred) => {
            console.log('user logged in:', cred.user)
            window.location.href = "./index.html"
        })
        .catch((err) => {
            console.log(err.message)
        })
})