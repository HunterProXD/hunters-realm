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
    createUserWithEmailAndPassword, onAuthStateChanged,
    updateCurrentUser
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
const q = query(colRef, orderBy('permissions'))

// get real time data from collection
onSnapshot(q, (snapshot) => {
    let users = []
    snapshot.docs.forEach((doc) => {
        users.push({ ...doc.data(), id: doc.id })
    })
    // console.log(users)
})

// adding Data
const addUserForm = document.querySelector('.addData')
addUserForm.addEventListener('submit', (e) => {
    e.preventDefault()

    addDoc(colRef, {
        email: addUserForm.email.value,
        password: addUserForm.password.value,
        username: addUserForm.username.value,
        permissions: addUserForm.permissions.value,
        createdAt: serverTimestamp(),
    })
    .then(() => {
        addUserForm.reset()
    })
})

// deleting Data
const deleteUserForm = document.querySelector('.deleteData')
deleteUserForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const docRef = doc(db, 'users', deleteUserForm.id.value)

    deleteDoc(docRef)
        .then(() => {
            deleteUserForm.reset()
        })
})

// get a single document
const docRef = doc(db, 'users', '0a6L4pkpQ0OYjHNEx5kd')

getDoc(docRef)
    .then((doc) => {
        // console.log(doc.data(), doc.id)
    })

onSnapshot(docRef, (doc) => {
    // console.log(doc.data(), doc.id)
})

// update a document
const updateForm = document.querySelector(".updateData")
updateForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const docRef = doc(db, 'users', updateForm.id.value)

    updateDoc(docRef, {
        permissions: updateForm.userPermissions.value
    })
    .then(() => {
        updateForm.reset
    })
})

// subscribe to changes
onAuthStateChanged(auth, (user) => {
    console.log('user status changed', user.displayName, user.uid, user)
})

// const update = document.getElementById('updates')
// update.addEventListener('click', (e) => {
//     e.preventDefault

//     console.log(auth,)
// })