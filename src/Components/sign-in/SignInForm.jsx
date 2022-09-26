import React, { useState } from "react";
import FormInput from "../form-inputs/Form-input";
import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  signInAuthUserWithEmailAndPassword
} from "../../utils/firebase/Firebase.utils";
import "./sign-in-form-styles.scss"
import Button from "../button/Button";

const defaultFormFields = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);

  const { email, password } = formFields;

  const resetFormField = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    

    try {
     const response = await signInAuthUserWithEmailAndPassword(email, password)
     console.log(response);
      resetFormField();
    } catch (error) {
      
    }
  };

  const SignInWithGoogle =  async () => {
    const {user} = await signInWithGooglePopup()
    await createUserDocumentFromAuth(user)

  }

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };
  return (
    <div className="sign-up-container">
      <h2>Already have an account?</h2>
      <span>Sign In With Your Email And Password</span>
      
      <form onSubmit={handleSubmit}>
        <FormInput
         label="Email"
         inputOptions={{
          required:true,
          type:"email",
          onChange:handleChange,
          name:"email",
          value:email,
         }}
          
        />

       
        <FormInput
         label="Password"
         inputOptions={{
          required: true,
          type:"password",
          minLength:6,
          onChange:handleChange,
          name:"password",
          value:password,
         }}
          
        />
        <div className="buttons-container">
          <Button buttonType="inverted" type="submit">Sign In</Button>
          <Button  buttonType="google" onClick={SignInWithGoogle}>Google Sign In</Button>
        </div>
      
      </form>
    </div>
  );
};

export default SignInForm;
