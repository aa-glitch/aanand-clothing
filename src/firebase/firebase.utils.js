import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBArS_lXUM8DhK0HiAqnOjNmcpRRTeN-sI",
  authDomain: "aanand-clothing.firebaseapp.com",
  databaseURL: "https://aanand-clothing.firebaseio.com",
  projectId: "aanand-clothing",
  storageBucket: "aanand-clothing.appspot.com",
  messagingSenderId: "715470902966",
  appId: "1:715470902966:web:f52546fd802b3060dcf817",
  measurementId: "G-LGLZ504NVH"
}

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch (error) {
      console.log('error creating user', error.message)
    }

  }
  return userRef;
}




firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
