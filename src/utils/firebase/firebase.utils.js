import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

import { getFirestore, doc, getDoc, setDoc , collection, writeBatch, query, getDocs} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCUJzYrI884JW4FkelPKif_JjcvL2Kk1ik",
  authDomain: "crwn-clothing-db-e5372.firebaseapp.com",
  projectId: "crwn-clothing-db-e5372",
  storageBucket: "crwn-clothing-db-e5372.appspot.com",
  messagingSenderId: "625200669166",
  appId: "1:625200669166:web:3d149d48f45a027c202eff",
};

// Initialize Firebase
const fireBaseApp = initializeApp(firebaseConfig);

// google Auth class
// can have different use cases
const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

// singleton - should be the same accross your website
export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

// points to our db
export const db = getFirestore();

export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
  const collectionRef = collection(db, collectionKey);

  //transaction reqresents a successful unit of work (writes) to a DB
  // if not successful then the changes that were made get reverted

  const batch = writeBatch(db); 

  objectsToAdd.forEach((object) => {
    const docRef = doc(collectionRef, object.title.toLowerCase());
    batch.set(docRef, object)
  })

  await batch.commit();
  console.log('done')

}

export const getcategoriesAndDocuments = async () => {
  const collectionRef = collection(db, 'categories');

  const q = query(collectionRef)

  const querySnapShot = await getDocs(q)
  return querySnapShot.docs.map(docSnapShot => docSnapShot.data())
  
  // the data that is returned lives here 
  // querySnapShot.docs
  //return querySnapShot.docs.map()
  
  
  

  //  return categoryMap;

}

export const createUserDocumentFromAuth = async (userAuth, additionalInformation ={}) => {
    if(!userAuth) return;

    const userDocRef = doc(db, 'users', userAuth.uid);

    // console.log(userDocRef)
    //allows to see if instance exsist and also access the   or creates it
    const userSnapShot = await getDoc(userDocRef)

    // console.log(userSnapShot)
    // console.log(userSnapShot.exists())

    // if exists returns true !reverses
    if(!userSnapShot.exists()){
        const { displayName, email} = userAuth;
        const createdAt = new Date();


        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt,
                ...additionalInformation
            })
        } catch (err) {
            console.log('error creating user', err.message);
        }

    }

    return userDocRef;
}

export const createAuthUserWithEmailAndPassword = async (email , password) => {
  if(!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
}

export const appSigninWithEmailAndPassword = async (email, password)=>{
  if(!email || !password) return;
  return await signInWithEmailAndPassword(auth, email, password)

}

export const signOutUser = async () => signOut(auth);

export const onAuthStateChangedListener = (callback) => onAuthStateChanged(auth, callback)

export const getCurrentUser = () => {
  return new Promise((resolve, reject) =>{
    const unsubscribe = onAuthStateChanged(
      auth,
      (userAuth) => {
        unsubscribe()
        resolve(userAuth)
      },
      reject
    )
  })
}