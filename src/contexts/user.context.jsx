import { createContext, useState } from "react"; // is store to hold  data

//actual storage thing , data you want to access
// also needs a provider

export const UserContext = createContext({
// provide default value
    currentUser: null,
    setCurrentUser: ()=> null
})

export const UserProvider = ({children}) =>{
    // provider will wrap around
    const [currentUser, setCurrentUser] = useState(null);
    const value = {currentUser, setCurrentUser};
    // value holds the contextual values
    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}