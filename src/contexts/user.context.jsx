import { createContext, useState, useEffect, useContext } from "react"; // is store to hold  data

import {onAuthStateChangedListener, signOutUser, createUserDocumentFromAuth} from '../utils/firebase/firebase.utils';
//actual storage thing , data you want to access
// also needs a provider


export const UserContext = createContext({
  // provide default value
  currentUser: null,
  setCurrentUser: () => null,
});

export const UserProvider = ({ children }) => {
  // provider will wrap around
  const [currentUser, setCurrentUser] = useState(null);
  const value = { currentUser, setCurrentUser };
  // value holds the contextual values

  //auth object persists
//   signOutUser();

  useEffect(() => {
    // will either return null or the user object
    const unsubscribe = onAuthStateChangedListener((user) =>{
        if(user){
            createUserDocumentFromAuth(user);
        }
        setCurrentUser(user)
    })

    //whatever you return from useeffect unmounts
    return unsubscribe
  }, []);
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
