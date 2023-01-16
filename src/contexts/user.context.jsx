import { createContext, useEffect , useReducer} from "react"; // is store to hold  data
import { createAction } from "../utils/reducer/reducer.utils";
import {
  onAuthStateChangedListener,
  signOutUser,
  createUserDocumentFromAuth,
} from "../utils/firebase/firebase.utils";
//actual storage thing , data you want to access
// also needs a provider

export const UserContext = createContext({
  // provide default value
  currentUser: null,
  setCurrentUser: () => null,
});

const USER_ACTION_TYPES = {
  SET_CURRENT_USER : 'SET_CURRENT_USER'
}

const INITIAL_STATE = {
  currentUser:null,
}

const userReducer = (state, action) => {
  const {type, payload} = action;

  switch (type) {
    case 'SET_CURRENT_USER':
      return {
        ...state,
        currentUser : payload
      }
    default:
      throw new Error(`Unknown Type ${type} in userreducer`);
  }
}

export const UserProvider = ({ children }) => {
  // provider will wrap around
  // const [currentUser, setCurrentUser] = useState(null);
  const [{currentUser}, dispatch ] = useReducer( userReducer , INITIAL_STATE ) ;

  const setCurrentUser = (user) => dispatch(createAction(USER_ACTION_TYPES.SET_CURRENT_USER,user))
  

  const value = { currentUser, setCurrentUser };
  // value holds the contextual values

  //auth object persists
  //   signOutUser();

  useEffect(() => {
    // will either return null or the user object
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUserDocumentFromAuth(user);
      }
      setCurrentUser(user);
    });

    //whatever you return from useeffect will run what is returned
    return unsubscribe;
  }, []);

  return (<UserContext.Provider value={value}>
    {children}
    </UserContext.Provider>);
};
