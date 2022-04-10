import firebase from 'firebase/compat/app'
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyBxuHMbtRcnJWqJRtwfsJaut0NfDJlJQ84",
  authDomain: "discord-clone-a4eca.firebaseapp.com",
  projectId: "discord-clone-a4eca",
  storageBucket: "discord-clone-a4eca.appspot.com",
  messagingSenderId: "326969939556",
  appId: "1:326969939556:web:4f0b23520944853876b171"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export { auth, provider }
export default db