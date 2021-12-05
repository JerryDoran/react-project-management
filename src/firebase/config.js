import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyDJr9y-244bCz4xEdTXuTaRWq7hARptTco',
  authDomain: 'thedojo-b7d1b.firebaseapp.com',
  projectId: 'thedojo-b7d1b',
  storageBucket: 'thedojo-b7d1b.appspot.com',
  messagingSenderId: '263605150810',
  appId: '1:263605150810:web:da7da3732f951a3be9a463',
};

// init firebase
firebase.initializeApp(firebaseConfig);

// init services
const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();

const timestamp = firebase.firestore.Timestamp;

export { projectFirestore, projectAuth, timestamp };
