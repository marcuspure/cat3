import firebase from "firebase";
import "firebase/firestore";
var firebaseConfig = {
  apiKey: "AIzaSyCj50M_NzuxSEIC748ylQyfjqAzRc9DaNA",
  authDomain: "vueproject-4d7e4.firebaseapp.com",
  projectId: "vueproject-4d7e4",
  storageBucket: "vueproject-4d7e4.appspot.com",
  messagingSenderId: "809736953091",
  appId: "1:809736953091:web:fe5d5a38256c1368a51d36",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { timestamp };
export default firebaseApp.firestore();
