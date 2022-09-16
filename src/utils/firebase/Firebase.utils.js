import { initializeApp } from "firebase/app"
import {getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider,} from "firebase/auth"


const firebaseConfig = {
  apiKey: "AIzaSyC120w1k0WLbBu8oKAxjk1xRQz40l-sITA",
  authDomain: "tune-clothing.firebaseapp.com",
  projectId: "tune-clothing",
  storageBucket: "tune-clothing.appspot.com",
  messagingSenderId: "294108505186",
  appId: "1:294108505186:web:13fc7e50a89794e4619d3b"
};


const firbaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account"
})

export const auth =  getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider)