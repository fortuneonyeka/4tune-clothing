import React, { Fragment } from 'react'
import {signInWithGooglePopup} from "../../utils/firebase/Firebase.utils"

const SignIn = () => {
  const logGoogleUser =  async () => {
    const response = await signInWithGooglePopup()
    console.log(response);
  }
  return (
    <Fragment>
      <div>
        <h3>Sign In</h3>
        <button onClick={logGoogleUser}>Sign in with Google Popup</button>
      </div>
    </Fragment>
  )
}

export default SignIn