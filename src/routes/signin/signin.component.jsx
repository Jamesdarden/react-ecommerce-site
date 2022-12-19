import React from "react";

import { signInWithGooglePopup, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";

function Signin() {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };


  return (
    <div>
      <h1>Signin</h1>
      <button onClick={logGoogleUser}>sign in with Google</button>
    </div>
  );
}

export default Signin;
