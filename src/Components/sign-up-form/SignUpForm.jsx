import React,{useState} from 'react'

import { createAuthUserWithEmailAndPassword,createUserDocumentFromAuth } from "../../utils/firebase/Firebase.utils"

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: ""
}


const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields)

  const {displayName,email,password,confirmPassword} = formFields;

  const resetFormField = () => {
    setFormFields(defaultFormFields)
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    if (password !== confirmPassword) {
      alert("password do not match")
      return
    }
    
    try {
      const {user} = await  createAuthUserWithEmailAndPassword(
        email,
        password)
        await createUserDocumentFromAuth(user, {displayName});
        resetFormField()
        
    } catch (error) {
      if(error.code == "auth/email-already-in-use"){
        alert(`Cannot create user ${email} already in use`)
      }else{

        console.log("User creation encountered an error", error);
      }
    }
  }

  const handleChange = (event) => {
    const {name, value} = event.target

    setFormFields({...formFields, [name]: value})
  }
  return (
    <div>
      <h1>Sign Up With Your Email And Password</h1>
      <form onSubmit={handleSubmit}>
          <label>Display Name</label>
          <input required type="text"  onChange={handleChange} name="displayName" value={displayName}/>

          <label>Email</label>
          <input required type="email" onChange={handleChange} name="email" value={email}/>

          <label>Password</label>
          <input required type="password" minLength={6} onChange={handleChange} name="password" value={password}/>

          <label>Confirm Password</label>
          <input required type="password" minLength={6} onChange={handleChange} name="confirmPassword" value={confirmPassword}/>

          <button type="submit">Create Account</button>
      </form>
    </div>
  )
}

export default SignUpForm