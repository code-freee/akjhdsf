import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCL8_VxmZVDh4KgokUGa88Dgs5lWxzuqN0",
  authDomain: "owl-street-clothing.firebaseapp.com",
  projectId: "owl-street-clothing",
  storageBucket: "owl-street-clothing.appspot.com",
  messagingSenderId: "662866822454",
  appId: "1:662866822454:web:c0f0e38cb92eadec5d1f97",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();

export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.uid);

  console.log(userDocRef);

  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const CreatedAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        CreatedAt,
      });
    } catch (error) {
      console.log("error created the user", error.message);
    }
  }

  return userDocRef;
};
