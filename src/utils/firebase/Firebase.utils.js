import { initializeApp } from "firebase/app"
import {getAuth,  signInWithPopup, GoogleAuthProvider,} from "firebase/auth"
// import {signInWithRedirect,} from "firebase/auth"
import {getFirestore, doc, getDoc, setDoc, } from "firebase/firestore"


const firebaseConfig = {
  apiKey: "AIzaSyAK1TqvITKdj9DsnmMdqVPA8z_hzm4-Xac",
  authDomain: "tun-clothings.firebaseapp.com",
  projectId: "tun-clothings",
  storageBucket: "tun-clothings.appspot.com",
  messagingSenderId: "703322152757",
  appId: "1:703322152757:web:24b41aab159a2ad500f67c"
};


const firbaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
  prompt: "select_account"
})

// const googleRedirectProvider = new Google

export const auth =  getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider)

// export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider)

export const db = getFirestore()

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, 'users', userAuth.uid);
 

  const userSnapshot = await getDoc(userDocRef);


  //if user data does not exists
  //create / set the document with the data from userAuth in my collection

  //if user exists
  //return user

  if (!userSnapshot.exists()) {
    const {displayName, email } = userAuth;
    const createdAt = new Date()

    try {
      await setDoc(userDocRef, {
        displayName, email, createdAt
      })
    } catch (error) {
      console.log("error creating this user", error.message);
    }
  }

  return userDocRef
}