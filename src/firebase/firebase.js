import firebase from 'firebase/app'
import 'firebase/auth' // import authentication
import 'firebase/firestore'

// Cài firebase vào dự án có key trên firebase console
const app = firebase.initializeApp({
    apiKey: "AIzaSyDRJtF4MbGIyuGMEmENE2ShKrboarmw_mg",
    authDomain: "kaitoshop-dat.firebaseapp.com",
    projectId: "kaitoshop-dat",
    storageBucket: "kaitoshop-dat.appspot.com",
    messagingSenderId: "1087875438268",
    appId: "1:1087875438268:web:cd90b1ed030f1e5fdda2b9",
    measurementId: "G-6WK976N9MR"
})

export const auth = app.auth() // xuất và sử dụng authentication của firebase
export const db = app.firestore() // xuất và sử dụng database (firestore)
export default app