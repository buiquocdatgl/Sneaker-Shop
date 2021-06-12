import {auth} from '../firebase/firebase'
import firebase from 'firebase/app'

const google = new firebase.auth.GoogleAuthProvider()

export function google_login() {
    return auth.signInWithPopup(google)
}