import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'

const config = {

    apiKey: "AIzaSyBQVT8eJ9P8NCUknhkF9f4OjWWItAQkiCY",

    authDomain: "react-shop-firebase-01.firebaseapp.com",

    projectId: "react-shop-firebase-01",

    storageBucket: "react-shop-firebase-01.appspot.com",

    messagingSenderId: "249893648182",

    appId: "1:249893648182:web:39e89a44373bef29822597"

}

const app = initializeApp(config);

export const auth = getAuth(app);
export const firestore = getFirestore(app);
const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    prompt: 'select_account'
});
export const signInWithGoogle = () => signInWithPopup(auth, provider);
