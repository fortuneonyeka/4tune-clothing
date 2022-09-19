import React, { useState } from "react";
import FormInput from "../form-inputs/Form-input";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase/Firebase.utils";
import "./sign-up-form-styles.scss"
import Button from "../button/Button";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);

  const { displayName, email, password, confirmPassword } = formFields;

  const resetFormField = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert("password do not match");
      return;
    }

    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );
      await createUserDocumentFromAuth(user, { displayName });
      resetFormField();
    } catch (error) {
      if (error.code == "auth/email-already-in-use") {
        alert(`Cannot create user ${email} already in use`);
      } else {
        console.log("User creation encountered an error", error);
      }
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };
  return (
    <div className="sign-up-container">
      <h2>Don't have an account?</h2>
      <span>Sign Up With Your Email And Password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
        label="Display Name"
        inputOptions={{required:true,
          type:"text",
          onChange:handleChange,
          name:"displayName",
          value:displayName
        }}
          
        />

        
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

        <FormInput
         label="Confirm Password"
         inputOptions={{
          required:true,
          type:"password",
          minLength:6,
          onChange:handleChange,
          name:"confirmPassword",
          value:confirmPassword,
         }}
          
        />
      
        <Button buttonType="inverted" type="submit">Create Account</Button>
      </form>
    </div>
  );
};

export default SignUpForm;
