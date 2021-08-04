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
export const addCollectionandDocuments=async (collectionKey,ObjectsToAdd)=>{
const collectionRef=firestore.collection(collectionKey);
 const batch=firestore.batch();
 ObjectsToAdd.forEach(obj=>{
   const NewDocRef=collectionRef.doc();
   batch.set(NewDocRef, obj);
 })
 return await batch.commit();
}

export const convertCollectionsSnapshotToMap=(collections)=>{
 
  const transformedCollection= collections.docs.map(doc =>{
    const {title,items} = doc.data();
    return {
      routeName:encodeURI(title.toLowerCase()),
      title,
      items
    }
  })
  return transformedCollection.reduce((accumalate,collection)=>{
    accumalate[collection.title.toLowerCase()]=collection;
    return accumalate;
  },{});


}

firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => {
  auth.signInWithPopup(provider);
};
export default firebase;
