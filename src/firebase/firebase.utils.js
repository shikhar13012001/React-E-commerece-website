import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
const config={
    
        apiKey: "AIzaSyAUplT6JO5SEcSOqNx98M3xj8YE6uvMxgw",
        authDomain: "crwn-clothing-66598.firebaseapp.com",
        projectId: "crwn-clothing-66598",
        storageBucket: "crwn-clothing-66598.appspot.com",
        messagingSenderId: "966752495872",
        appId: "1:966752495872:web:f3ad8c49897a4d23fd6be5",
        measurementId: "G-5T4F2ZSPE6"
      
}
firebase.initializeApp(config);
export const auth=firebase.auth();
export const firestore=firebase.firestore();
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle =()=>{
    auth.signInWithPopup(provider);
  
}
export default firebase;
