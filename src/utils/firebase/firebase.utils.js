import { initializeApp } from 'firebase/app';

import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from 'firebase/auth';

import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCHFY-Iquf1SnOoBcQcab_5yjq5MEtUl7o',
  authDomain: 'crown-clothing-db-9f454.firebaseapp.com',
  projectId: 'crown-clothing-db-9f454',
  storageBucket: 'crown-clothing-db-9f454.appspot.com',
  messagingSenderId: '790976367910',
  appId: '1:790976367910:web:e3df2a90ed8506243d05e7',
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider(); //

googleProvider.setCustomParameters({
  prompt: 'select_account',
});

export const auth = getAuth(); //
export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);

// export const signInWithGoogleRedirect = () =>
//   signInWithRedirect(auth, googleProvider);

/////////////////////////////////////////////////////////////////////////////////////////////
export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, 'users', userAuth.uid);

  // console.log(userDocRef); /// document refrence

  const userSnapshot = await getDoc(userDocRef);

  // console.log(userSnapshot);
  // console.log(userSnapshot.exists());  // checked weather that data is available or not

  // if user data does not exist
  // crearte / set the documents with the data from userAuth in my collection

  // if user data does not exist

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (error) {
      console.log('error creating the user', error.message);
    }
  }

  return userDocRef;
};
