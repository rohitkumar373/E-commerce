
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAmay8woVVcpfJLz45lyTKUte-dkOS5po4",
    authDomain: "ecommerce-58c0f.firebaseapp.com",
    projectId: "ecommerce-58c0f",
    storageBucket: "ecommerce-58c0f.appspot.com",
    messagingSenderId: "249013867844",
    appId: "1:249013867844:web:55bf019a0e5798e14af311"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app);
const auth = getAuth(app);

export { fireDB, auth }