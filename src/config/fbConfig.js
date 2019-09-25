import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAlwLMuEE_biDK4UL1Q_dDNsekgnW_DLXg",
  authDomain: "react-reddit-search-app.firebaseapp.com",
  databaseURL: "https://react-reddit-search-app.firebaseio.com",
  projectId: "react-reddit-search-app",
  storageBucket: "",
  messagingSenderId: "592666256925",
  appId: "1:592666256925:web:b5db302e13578ee90a08f4",
  measurementId: "G-ZV0S4HBDWM"
};

firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;