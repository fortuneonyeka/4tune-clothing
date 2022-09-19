import React, { Fragment, useState } from 'react'
import {signInWithGooglePopup, createUserDocumentFromAuth} from "../../utils/firebase/Firebase.utils"
import Button from "../../Components/button/Button"
// import { getRedirectResult } from "firebase/auth"
// import {signInWithGoogleRedirect, auth} from "../../utils/firebase/Firebase.utils"
import SignUpForm from "../../Components/sign-up-form/SignUpForm"
import { Helmet } from "react-helmet-async"



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
      
      <Helmet>
        <title>Login</title>
        <meta name="description" content="User Login page."/>
        <link rel="canonical" href="/sign-in" />
        {/* Disallowing google robot to crawl this page. */}
        <meta name="robots" content="noindex"/>
      </Helmet>
      <div>
        <h3>Sign In</h3>
        <Button buttonType="google" onClick={logGoogleUser}>Sign in with Google</Button>
        {/* <button onClick={signInWithGoogleRedirect}>Sign in with Google Redirect</button> */}
        <SignUpForm />
      </div>
    </Fragment>
  )
}

export default SignIn