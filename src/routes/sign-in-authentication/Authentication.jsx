import React from 'react'
import SignUpForm from "../../Components/sign-up-form/SignUpForm"
import { Helmet } from "react-helmet-async"
import SignInForm from "../../Components/sign-in/SignInForm"
import "./authentication.styles.scss"




const Authentication = () => {
    return (
    <div className="authentication-container">
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