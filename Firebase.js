const firebaseConfig = {
    apiKey: "AIzaSyARnGcim2fcLgJyINNFqgh-Ix_g5sllT7k",
    authDomain: "xyzmastery.firebaseapp.com",
    projectId: "xyzmastery",
    storageBucket: "xyzmastery.appspot.com",
    messagingSenderId: "911120864996",
    appId: "1:911120864996:web:6ffd08cd64b10b79777ef1",
    measurementId: "G-XKYJHC2JXF"
  };
  // Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();