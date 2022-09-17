import React, { Fragment } from 'react'
import {signInWithGooglePopup, createUserDocumentFromAuth} from "../../utils/firebase/Firebase.utils"
// import { getRedirectResult } from "firebase/auth"
// import {signInWithGoogleRedirect, auth} from "../../utils/firebase/Firebase.utils"


const SignIn = () => {
  
  const logGoogleUser =  async () => {
    const {user} = await signInWithGooglePopup()
     createUserDocumentFromAuth(user)

  }
  
  // useEffect( () => {
  //   async function signInWithRedirect() {
  //     const response = await getRedirectResult(auth)
  //     if (response) {
  //       console.log(response);
  //       const userDocRef = await createUserDocumentFromAuth(response.user)
  //     }
  //   }
  //   signInWithRedirect()
  // }, []);


    
    
  return (
    <Fragment>
      <div>
        <h3>Sign In</h3>
        <button onClick={logGoogleUser}>Sign in with Google Popup</button>
        {/* <button onClick={signInWithGoogleRedirect}>Sign in with Google Redirect</button> */}
        <p>{}</p>
      </div>
    </Fragment>
  )
}

export default SignIn