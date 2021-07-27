import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
const config = {
  apiKey: "AIzaSyAUplT6JO5SEcSOqNx98M3xj8YE6uvMxgw",
  authDomain: "crwn-clothing-66598.firebaseapp.com",
  projectId: "crwn-clothing-66598",
  storageBucket: "crwn-clothing-66598.appspot.com",
  messagingSenderId: "966752495872",
  appId: "1:966752495872:web:f3ad8c49897a4d23fd6be5",
  measurementId: "G-5T4F2ZSPE6",
};
export const createUserProfileDocument = async (
  userAuth,
  ...additionalData
) => {
  if (!userAuth) {
    return;
  }
  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snap = await userRef.get();
  if (!snap.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({ displayName, email, createdAt, ...additionalData });
    } catch (error) {
      console.log(error.message);
    }
  }
  return userRef;
};
firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => {
  auth.signInWithPopup(provider);
};
export default firebase;
