import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'

const firebaseConfig = {

};

if (firebase.apps.length == 0) {
  firebase.initializeApp(firebaseConfig);
}