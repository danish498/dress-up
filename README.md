## Lessons Learned

I have learned some concept about firebase/firestore.
How to set-up the firestore in the app and at google.console.

#### 1st part:

sign in with the Google popup

```javascript
import { initializeApp } from 'firebase/app';

import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from 'firebase/auth';

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

const provider = new GoogleAuthProvider(); //

provider.setCustomParameters({
  prompt: 'select_account',
});

export const auth = getAuth(); //
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
```

#### 2st part:

take the data and store into the firebaseStore

```javascript

import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';


export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, 'users', userAuth.uid);

  // console.log(userDocRef); /// document refrence

  const userSnapshot = await getDoc(userDocRef);

  // please do check the repositry to understand better:



```

#### Helper elements

```javascript
const logGoogleUser = async () => {
  const { user } = await signInWithGooglePopup();
  const userDocRef = createUserDocumentFromAuth(user);
  // console.log(userDocRef);
};
```

## 🛠 Skills

Javascript, HTML, CSS, Reactjs, Redux, Git and GitHub, Bootstrap, Sass,
MaterialUI, Node js,

## 🚀 About Me

My name is Daanish Noor. I have complited MCA in 2021, for me programing is my passion(PP).
