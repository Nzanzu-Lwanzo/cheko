import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "nz-dev-projects.firebaseapp.com",
  projectId: "nz-dev-projects",
  storageBucket: "nz-dev-projects.firebasestorage.app",
  messagingSenderId: "598935187175",
  appId: import.meta.env.VITE_FIREBASE_API_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const dastabase = getFirestore(app);

export { auth, dastabase };
