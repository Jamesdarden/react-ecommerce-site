// import React, { useState, useContext } from "react";
import React, { useState } from "react";
import {SignUpContainer} from  "./sign-up.styles.jsx";
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";
import FormInput from "../form-input/form-input.component";
import './sign-up.styles.jsx'
import Button from "../button/button.component";
// import { UserContext } from "../../contexts/user.context";


const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

export default function SignUpForm() {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  //   console.log(formFields)
  // const {setCurrentUser} = useContext(UserContext);

  const handleChange = (event) => {
    // event.target  gives us the thing that emitting the trigger
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const resetFormFields = ()=>{
    setFormFields(defaultFormFields);
  }

  const handleSubmit = async (event) => {    
    event.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );
      
      // setCurrentUser(user)
      await createUserDocumentFromAuth(user, {displayName});

      resetFormFields();
    } catch (error) {
      if(error.code === 'auth/email-already-in-use') alert('Email already exists, please try forgot password or use a different email')
      else console.log(error)
    }
  };

  return (
    <SignUpContainer>
      <h2>I Don't have an account?</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit}>
     
        <FormInput
          label="Diplay Name"
          required
          type="text"
          onChange={handleChange}
          name="displayName"
          value={displayName}
        />

        <FormInput
          label="Email"
          required
          type="email"
          onChange={handleChange}
          name="email"
          value={email}
        />
   
        <FormInput
          label="Password"
          required
          type="password"
          onChange={handleChange}
          name="password"
          value={password}
        />
     
        <FormInput
          label="Confirm Password"
          required
          type="password"
          onChange={handleChange}
          name="confirmPassword"
          value={confirmPassword}
        />
        <Button type="submit">Sign up</Button>
      </form>
    </SignUpContainer>
  );
}
