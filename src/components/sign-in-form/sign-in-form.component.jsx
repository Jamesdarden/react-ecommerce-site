import { useState } from "react";
// import "./sign-up.styles.scss";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
  signInWithGooglePopup,
  appSigninWithEmailAndPassword,
} from "../../utils/firebase/firebase.utils";
import FormInput from "../form-input/form-input.component";
import {SignupContainer, ButtonsContainer} from  "./sign-in.styles.jsx";
import Button, {BUTTON_TYPE_CLASSES} from "../button/button.component";

// import { UserContext } from "../../contexts/user.context";

const defaultFormFields = {
  email: "",
  password: "",
};

export default function SignInForm() {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  //   console.log(formFields)
  // const { setCurrentUser } = useContext(UserContext);

  const handleChange = (event) => {
    // event.target  gives us the thing that emitting the trigger
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const signInWithgoogle = async () => {
    await signInWithGooglePopup();
    // const userDocRef = await createUserDocumentFromAuth(user);
    
  };

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const { user } = await appSigninWithEmailAndPassword(email, password);
      // setCurrentUser(user);
      resetFormFields();
    } catch (error) {
      const { code } = error;

      switch (code) {
        case "auth/wrong-password":
          alert("Incorrect Password");
          break;
        case "auth/user-not-found":
          alert("No user associated with this email address");
          break;
        default:
          console.log(error);
      }
    }
  };

  return (
    <SignupContainer>
      <h2>Already have an account?</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
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

        <ButtonsContainer>
          <Button type="submit">Sign in</Button>
          <Button
            type="button"
            buttonType={BUTTON_TYPE_CLASSES.google}
            children="Sign in with Google"
            onClick={signInWithgoogle}
          />
        </ButtonsContainer>
      </form>
    </SignupContainer>
  );
}
