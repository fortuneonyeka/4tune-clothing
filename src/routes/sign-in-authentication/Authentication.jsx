import React, {  useState } from 'react'
// import FormInput from "../../Components/form-inputs/Form-input"
import {signInWithGooglePopup, createUserDocumentFromAuth} from "../../utils/firebase/Firebase.utils"

// import { getRedirectResult } from "firebase/auth"
// import {signInWithGoogleRedirect, auth} from "../../utils/firebase/Firebase.utils"
import SignUpForm from "../../Components/sign-up-form/SignUpForm"
import { Helmet } from "react-helmet-async"

import SignInForm from "../../Components/sign-in/SignInForm"




const Authentication = () => {


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
    <div className="">
      
      <Helmet>
        <title>Login</title>
        <meta name="description" content="User Login page."/>
        <link rel="canonical" href="/sign-in" />
      </Helmet>
     <SignInForm />
     <SignUpForm />
    </div>
  )
}


export default Authentication