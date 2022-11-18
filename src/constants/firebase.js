import firebase from '@react-native-firebase/app';
import  "@react-native-firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyBEqQOGxKI4zctNO87uxlo8u8bCuj6z5Z0",
  authDomain: "rubikpedia.firebaseapp.com",
  projectId: "rubikpedia",
  storageBucket: "rubikpedia.appspot.com",
  messagingSenderId: "142055967078",
  appId: "1:142055967078:web:2f8bb8934f619649b3e0a7"
};
if (!firebase.apps.length) {
   firebase.initializeApp(firebaseConfig);
}

export const auth = firebase.auth()
export default firebase