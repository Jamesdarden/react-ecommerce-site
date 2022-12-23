import Button from "../button/button.component";
import FormInput from "../form-input/form-input.component";
import { useState } from "react";
import { appSigninWithEmailAndPassword } from "../../utils/firebase/firebase.utils";

/* 
 label="Diplay Name"
          required
          type="text"
          onChange={handleChange}
          name="displayName"
          value={displayName}

*/

const defaultSigninObj = {
  signinEmail: "",
  signinPassword: "",
};

const SignInForm = () => {
  const [signinObj, setSigninObj] = useState(defaultSigninObj);
  const { signinEmail, signinPassword } = signinObj;

  const updateState = (e) => {
    const { name, value } = e.target.value;
    setSigninObj({ ...signinObj, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!signinEmail || !signinPassword) return;
    try {
      const response = await appSigninWithEmailAndPassword(
        signinEmail,
        signinPassword
      );
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="signup-container">
      <h2>I already have an account</h2>
      <span>Sign in with your email and password </span>
      <form className="sign-in-container" onSubmit={handleSubmit}>
        <FormInput
          label="email"
          type="text"
          onChange={updateState}
          name="signinEmail"
          value={signinEmail}
          required
        />
        
        <FormInput
          label="password"
          type="password"
          onChange={updateState}
          required
          name="signinPassword"
          value={signinPassword}
        />

        <Button  type="submit" >Sign in</Button>
        <Button buttonType="google"> Google sign in </Button>
      </form>
    </div>
  );
};

export default SignInForm;
